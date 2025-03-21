import { Await, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { EventType } from "../types/type";
import { Suspense } from "react";
import { fetchData } from "../utils/http";

type loadedDataType = { data: Promise<{ events: EventType[] }> };

function EventsPage() {
  const { data } = useLoaderData<loadedDataType>();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={data}>{(loadedEvents) => <EventsList events={loadedEvents.events} />}</Await>
    </Suspense>
  );
}

export default EventsPage;

export function eventsLoader() {
  const data = fetchData<{ events: EventType[] }>("http://localhost:8080/events");

  return { data };
}
