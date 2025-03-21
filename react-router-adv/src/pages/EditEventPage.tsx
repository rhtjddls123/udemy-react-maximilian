import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";
import { ROUTER_IDS } from "../constants/constants";
import { EventType } from "../types/type";

const EditEventPage = () => {
  const { event } = useRouteLoaderData(ROUTER_IDS.EVENT_DETAIL) as { event: EventType };

  return <EventForm method="PATCH" event={event} />;
};

export default EditEventPage;
