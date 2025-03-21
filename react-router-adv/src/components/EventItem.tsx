import { Link, useSubmit } from "react-router-dom";
import classes from "./EventItem.module.css";
import { EventType } from "../types/type";

interface EventItemProps {
  event: EventType;
}

function EventItem({ event }: EventItemProps) {
  const submit = useSubmit();
  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "DELETE" });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
