export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData: { places: PlaceType[] } = await response.json();

  if (!response.ok) {
    throw Error("Failed to fetch places");
  }

  return resData.places;
}

export async function fetchUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places");
  const resData: { places: PlaceType[] } = await response.json();

  if (!response.ok) {
    throw Error("Failed to fetch user places");
  }

  return resData.places;
}

export async function updateUserPlaces(places: PlaceType[]) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const resData: { message: string } = await response.json();

  if (!response.ok) {
    throw Error("Failed to update user data.");
  }

  return resData.message;
}
