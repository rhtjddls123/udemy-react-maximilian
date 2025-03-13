import { useCallback, useEffect, useRef, useState } from "react";

import { AVAILABLE_PLACES } from "./data.js";
import logoImg from "./assets/logo.png";
import Modal from "./components/Modal.js";
import DeleteConfirmation from "./components/DeleteConfirmation.js";
import Places from "./components/Places.js";
import { sortPlacesByDistance } from "./loc.js";

const storedIds: PlaceType["id"][] = JSON.parse(localStorage.getItem("selectedPlaces") ?? "[]");
const storedPlaces = storedIds.map((id) => AVAILABLE_PLACES.find((place) => place.id === id)!);

function App() {
  const selectedPlace = useRef<string>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState<PlaceType[]>([]);
  const [pickedPlaces, setPickedPlaces] = useState<PlaceType[]>(storedPlaces);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );

      setAvailablePlaces(sortedPlaces);
    });
  }, []);

  function handleStartRemovePlace(id: PlaceType["id"]) {
    setModalIsOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  function handleSelectPlace(id: PlaceType["id"]) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      if (!place) return prevPickedPlaces;
      return [place, ...prevPickedPlaces];
    });

    const storedPlaces: PlaceType["id"][] = JSON.parse(
      localStorage.getItem("selectedPlaces") ?? "[]"
    );
    if (storedPlaces.indexOf(id) === -1) {
      localStorage.setItem("selectedPlaces", JSON.stringify([id, ...storedPlaces]));
    }
  }

  const handleRemovePlace = useCallback(() => {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setModalIsOpen(false);

    const storedIds: PlaceType["id"][] = JSON.parse(localStorage.getItem("selectedPlaces") ?? "[]");
    localStorage.setItem(
      "selectedPlaces",
      JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current))
    );
  }, []);

  return (
    <>
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
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          fallbackText="Sorting places by distance..."
          places={availablePlaces}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
