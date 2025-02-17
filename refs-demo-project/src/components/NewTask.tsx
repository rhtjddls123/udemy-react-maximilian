import { useRef } from "react";

interface NewTaskProps {
  onAddTask: (text: string) => void;
}

const NewTask = ({ onAddTask }: NewTaskProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTask = () => {
    if (inputRef.current) {
      onAddTask(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <input type="text" ref={inputRef} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
      <button onClick={handleAddTask} className="text-stone-700 hover:text-stone-950">
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
