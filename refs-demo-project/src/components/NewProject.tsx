import { useRef } from "react";
import InputLabel from "./InputLabel";
import Modal, { HandleDialog } from "./Modal";

interface NewProjectProps {
  onCancelProject: () => void;
  onAddProject: (projectData: Omit<ProjectType, "id">) => void;
}

const NewProject = ({ onCancelProject, onAddProject }: NewProjectProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HandleDialog>(null);

  const handleSave = () => {
    const enterdTitle = titleRef.current?.value;
    const enterdDescription = descriptionRef.current?.value;
    const enterdDueDate = dueDateRef.current?.value;

    if (
      enterdTitle?.trim() === "" ||
      enterdDescription?.trim() === "" ||
      enterdDueDate?.trim() === ""
    ) {
      modalRef.current?.open();
      return;
    }

    if (enterdTitle && enterdDescription && enterdDueDate) {
      onAddProject({ title: enterdTitle, description: enterdDescription, dueDate: enterdDueDate });
    }
  };
  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2 className="text-stone-700 text-xl font-bold my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops ... looks like you forgot to enter a value.</p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex justify-end gap-4 my-4">
          <button className="text-stone-800 hover:text-stone-950" onClick={onCancelProject}>
            Cancel
          </button>
          <button
            className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </menu>
        <div>
          <InputLabel title="Title" type="text" ref={titleRef} />
          <InputLabel title="Description" InputType={"textarea"} ref={descriptionRef} />
          <InputLabel title="Due Date" type="date" ref={dueDateRef} />
        </div>
      </div>
    </>
  );
};

export default NewProject;
