import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  Params,
  redirect,
  useRouteLoaderData
} from "react-router-dom";
import EventItem from "../components/EventItem";
import { EventType, parameterIds } from "../types/type";
import { ROUTER_IDS } from "../constants/constants";

const EventDetailPage = () => {
  const { event } = useRouteLoaderData(ROUTER_IDS.EVENT_DETAIL) as { event: EventType };
  return <EventItem event={event} />;
};

export default EventDetailPage;

interface eventDetailLoaderArgs extends LoaderFunctionArgs {
  params: Params<parameterIds>;
}

export async function eventDetailLoader({ params }: eventDetailLoaderArgs) {
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch details for selected event." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  } else {
    return response;
  }
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
