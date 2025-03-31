import { QueryClient } from "@tanstack/react-query";
import { FetchErrorType, InputDataType } from "../types/type";

export const queryClient = new QueryClient();

export async function fetchEvents({
  signal,
  searchTerm,
  max
}: {
  signal: AbortSignal;
  searchTerm?: string;
  max?: number;
}) {
  let url = "http://localhost:3000/events";

  if (searchTerm && max) {
    url += "?search=" + searchTerm + "&max=" + max;
  } else if (searchTerm) {
    url += "?search=" + searchTerm;
  } else if (max) {
    url += "?max=" + max;
  }

  const response = await fetch(url, { signal });

  if (!response.ok) {
    const error: FetchErrorType = new Error("An error occurred while fetching the events");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { events } = await response.json();

  return events;
}

export async function createNewEvent(eventData: { event: InputDataType }) {
  const response = await fetch(`http://localhost:3000/events`, {
    method: "POST",
    body: JSON.stringify(eventData),
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    const error: FetchErrorType = new Error("An error occurred while creating the event");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { event } = await response.json();

  return event;
}

export async function fetchSelectableImages({ signal }: { signal: AbortSignal }) {
  const response = await fetch(`http://localhost:3000/events/images`, { signal });

  if (!response.ok) {
    const error: FetchErrorType = new Error("An error occurred while fetching the images");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { images } = await response.json();

  return images;
}

export async function fetchEvent({ id, signal }: { id?: string; signal: AbortSignal }) {
  const response = await fetch(`http://localhost:3000/events/${id}`, { signal });

  if (!response.ok) {
    const error: FetchErrorType = new Error("An error occurred while fetching the event");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { event } = await response.json();

  return event;
}

export async function deleteEvent({ id }: { id?: string }) {
  const response = await fetch(`http://localhost:3000/events/${id}`, {
    method: "DELETE"
  });

  if (!response.ok) {
    const error: FetchErrorType = new Error("An error occurred while deleting the event");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}

export async function updateEvent({ id, event }: { id?: string; event: InputDataType }) {
  const response = await fetch(`http://localhost:3000/events/${id}`, {
    method: "PUT",
    body: JSON.stringify({ event }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    const error: FetchErrorType = new Error("An error occurred while updating the event");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}
