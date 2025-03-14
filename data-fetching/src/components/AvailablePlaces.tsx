import Places from "./Places.jsx";
import ErrorPage from "./ErrorPage.js";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";
import { useFetch } from "../hooks/useFetch.js";

interface AvailablePlacesProps {
  onSelectPlace: (place: PlaceType) => void;
}

async function fetchSortedPlaces(): Promise<PlaceType[]> {
  const places = await fetchAvailablePlaces();

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        places,
        position.coords.latitude,
        position.coords.longitude
      );

      resolve(sortedPlaces);
    });
  });
}

export default function AvailablePlaces({ onSelectPlace }: AvailablePlacesProps) {
  const {
    fetchedData: availablePlaces,
    isFetching,
    error
  } = useFetch<PlaceType[]>(fetchSortedPlaces, []);

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
