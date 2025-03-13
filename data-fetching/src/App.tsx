import { useRef, useState, useCallback, useEffect } from "react";
import Modal from "./components/Modal";
import DeleteConfirmation from "./components/DeleteConfirmation";
import logoImg from "./assets/logo.png";
import Places from "./components/Places";
import AvailablePlaces from "./components/AvailablePlaces";
import { fetchUserPlaces, updateUserPlaces } from "./http";
import ErrorPage from "./components/ErrorPage";

function App() {
  const selectedPlace = useRef<PlaceType | null>(null);

  const [userPlaces, setUserPlaces] = useState<PlaceType[]>([]);
  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState<Error | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<Error>();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    (async () => {
      setIsFetching(true);
      try {
        const places = await fetchUserPlaces();
        setUserPlaces(places);
        setIsFetching(false);
      } catch (error) {
        if (error instanceof Error) {
          setError({
            ...error,
            message: error.message || "Could not fetch places, please try again later."
          });
        }
        setIsFetching(false);
      }
    })();
  }, []);

  function handleStartRemovePlace(place: PlaceType) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace: PlaceType) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updateUserPlaces([selectedPlace, ...userPlaces]);
    } catch (error) {
      if (error instanceof Error) {
        setUserPlaces(userPlaces);
        setErrorUpdatingPlaces({ ...error, message: error.message || "Failed to update places" });
      }
    }
  }

  const handleRemovePlace = useCallback(
    async function handleRemovePlace() {
      setUserPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter((place) => place.id !== selectedPlace.current?.id)
      );

      try {
        await updateUserPlaces(
          userPlaces.filter((place) => place.id !== selectedPlace.current?.id)
        );
      } catch (error) {
        if (error instanceof Error) {
          setUserPlaces(userPlaces);
          setErrorUpdatingPlaces({ ...error, message: error.message || "Failed to delete places" });
        }
      }

      setModalIsOpen(false);
    },
    [userPlaces]
  );

  const handleError = () => {
    setErrorUpdatingPlaces(null);
  };

  return (
    <>
      <Modal open={!!errorUpdatingPlaces} onClose={handleError}>
        {errorUpdatingPlaces && (
          <ErrorPage
            title="An error occurred!"
            message={errorUpdatingPlaces.message}
            onConfirm={handleError}
          />
        )}
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation onCancel={handleStopRemovePlace} onConfirm={handleRemovePlace} />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or you have visited.
        </p>
      </header>
      <main>
        {error && <ErrorPage title="An error occurred!" message={error.message} />}
        {!error && (
          <Places
            title="I'd like to visit ..."
            fallbackText="Select the places you would like to visit below."
            places={userPlaces}
            isLoading={isFetching}
            loadingText="Fetching your places..."
            onSelectPlace={handleStartRemovePlace}
          />
        )}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
