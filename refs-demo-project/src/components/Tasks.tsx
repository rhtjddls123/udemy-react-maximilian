import NewTask from "./newTask";

interface TasksProps {
  tasks: TaskType[];
  onAddTask: (text: string) => void;
  onDeleteTask: (id: number) => void;
}

const Tasks = ({ tasks, onAddTask, onDeleteTask }: TasksProps) => {
  return (
    <section>
      <h2 className="text-stone-700 mb-4 font-bold text-2xl">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length > 0 && (
        <ul className="mt-8 p-4 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
      {!(tasks.length > 0) && (
        <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>
      )}
    </section>
  );
};

export default Tasks;
