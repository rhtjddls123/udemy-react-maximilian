import Places from "./Places.jsx";

interface AvailablePlacesProps {
  onSelectPlace: (place: PlaceType) => void;
}

export default function AvailablePlaces({ onSelectPlace }: AvailablePlacesProps) {
  return (
    <Places
      title="Available Places"
      places={[]}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
