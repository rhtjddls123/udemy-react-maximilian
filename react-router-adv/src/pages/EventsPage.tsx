import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { EventType } from "../types/type";

function EventsPage() {
  const data: { events: EventType[] } = useLoaderData();
  const events = data.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function eventsLoader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  } else {
    return response;
  }
}
