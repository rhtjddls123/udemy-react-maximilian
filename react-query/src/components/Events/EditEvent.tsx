import { Link, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.tsx";
import { EventType, FetchErrorType, InputDataType } from "../../types/type.ts";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../utils/http.ts";
import LoadingIndicator from "../UI/LoadingIndicator.tsx";
import ErrorBlock from "../UI/ErrorBlock.tsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();

  const { data, isPending, isError, error } = useQuery<EventType, FetchErrorType>({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ id: params.id, signal })
  });

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async ({ event }) => {
      await queryClient.cancelQueries({ queryKey: ["events", params.id] });
      const previousEvent = queryClient.getQueryData(["events", params.id]);

      queryClient.setQueryData(["events", params.id], event);

      return { previousEvent };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(["events", params.id], context?.previousEvent);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["events", params.id] });
    }
  });

  function handleSubmit(formData: InputDataType) {
    mutate({ id: params.id, event: formData });
    navigate("../");
  }

  function handleClose() {
    navigate("../");
  }

  let content;

  if (isPending) {
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to load event"
          message={
            error.info?.message ||
            "Failed to load event. Please check your inputs and try again later."
          }
        />
        <div className="form-action">
          <Link to={"../"} className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}
