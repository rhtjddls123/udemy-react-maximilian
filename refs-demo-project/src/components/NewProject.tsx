import { useRef } from "react";
import InputLabel from "./InputLabel";

interface NewProjectProps {
  onCancelProject: () => void;
  onAddProject: (projectData: Omit<ProjectType, "id">) => void;
}

const NewProject = ({ onCancelProject, onAddProject }: NewProjectProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    const enterdTitle = titleRef.current?.value;
    const enterdDescription = descriptionRef.current?.value;
    const enterdDueDate = dueDateRef.current?.value;

    if (enterdTitle && enterdDescription && enterdDueDate) {
      onAddProject({ title: enterdTitle, description: enterdDescription, dueDate: enterdDueDate });
    }
  };
  return (
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
  );
};

export default NewProject;
