import { Await, useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";
import { ROUTER_IDS } from "../constants/constants";
import { EventType } from "../types/type";
import { Suspense } from "react";

interface loadedDataType {
  event: Promise<{ event: EventType }>;
  events: Promise<{ events: EventType[] }>;
}

const EditEventPage = () => {
  const { event } = useRouteLoaderData(ROUTER_IDS.EVENT_DETAIL) as loadedDataType;
  console.log(event);
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={event}>
        {(loadedEvents) => <EventForm method="PATCH" event={loadedEvents.event} />}
      </Await>
    </Suspense>
  );
};

export default EditEventPage;
