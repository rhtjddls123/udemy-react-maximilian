import {
  ActionFunctionArgs,
  Await,
  LoaderFunctionArgs,
  Params,
  redirect,
  useRouteLoaderData
} from "react-router-dom";
import EventItem from "../components/EventItem";
import { EventType, parameterIds } from "../types/type";
import { ROUTER_IDS } from "../constants/constants";
import EventsList from "../components/EventsList";
import { Suspense } from "react";
import { fetchData } from "../utils/http";

interface loadedDataType {
  event: Promise<{ event: EventType }>;
  events: Promise<{ events: EventType[] }>;
}

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData(ROUTER_IDS.EVENT_DETAIL) as loadedDataType;

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>{(loadedEvent) => <EventItem event={loadedEvent.event} />}</Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents.events} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

interface eventDetailLoaderArgs extends LoaderFunctionArgs {
  params: Params<parameterIds>;
}

export function eventDetailLoader({ params }: eventDetailLoaderArgs) {
  const id = params.eventId;

  const event = fetchData<{ event: EventType }>(`http://localhost:8080/events/${id}`);
  const events = fetchData<{ events: EventType[] }>("http://localhost:8080/events");

  return { events, event };
}

interface deleteEventActoinArgs extends ActionFunctionArgs {
  params: Params<parameterIds>;
}

export async function deleteEventActoin({ params, request }: deleteEventActoinArgs) {
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${id}`, { method: request.method });

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not delete event." }), {
      status: 500,
      headers: { "Content-type": "application/json" }
    });
  }

  return redirect("/events");
}
