import {
  ActionFunctionArgs,
  Form,
  HTMLFormMethod,
  Params,
  redirect,
  useActionData,
  useNavigate,
  useNavigation
} from "react-router-dom";

import classes from "./EventForm.module.css";
import { ActionResponseType, EventType, parameterIds } from "../types/type";

interface EventFormProps {
  method: HTMLFormMethod;
  event?: EventType;
}

function EventForm({ method, event }: EventFormProps) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData<ActionResponseType>();

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form className={classes.form} method={method}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event ? event.date : ""} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows={5}
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Save"}</button>
      </div>
    </Form>
  );
}

export default EventForm;

interface manipulateEventActionArgs extends ActionFunctionArgs {
  params: Params<parameterIds>;
}

export async function manipulateEventAction({ request, params }: manipulateEventActionArgs) {
  const data = await request.formData();
  const method = request.method as HTMLFormMethod;
  const eventData = Object.fromEntries(data.entries());

  let url = "http://localhost:8080/events";

  if (method === "PATCH") {
    const id = params.eventId;
    url = `http://localhost:8080/events/${id}`;
  }

  const response = await fetch(url, {
    method: method,
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(eventData)
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not save event." }), {
      status: 500,
      headers: { "Content-type": "application/json" }
    });
  }

  return redirect("/events");
}
