import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import ErrorPage from "./ErrorPage.js";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

interface AvailablePlacesProps {
  onSelectPlace: (place: PlaceType) => void;
}

export default function AvailablePlaces({ onSelectPlace }: AvailablePlacesProps) {
  const [availablePlaces, setAvailablePlaces] = useState<PlaceType[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    (async () => {
      setIsFetching(true);
      try {
        const places = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );

          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
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

  if (error) {
    return <ErrorPage title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
