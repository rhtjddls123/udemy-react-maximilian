import InputLabel from "./InputLabel";

interface NewProjectProps {
  onCancelProject: () => void;
}

const NewProject = ({ onCancelProject }: NewProjectProps) => {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex justify-end gap-4 my-4">
        <button className="text-stone-800 hover:text-stone-950" onClick={onCancelProject}>
          Cancel
        </button>
        <button className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
      </menu>
      <div>
        <InputLabel title="Title" type="text" />
        <InputLabel title="Description" InputType={"textarea"} />
        <InputLabel title="Due Date" type="date" />
      </div>
    </div>
  );
};

export default NewProject;
