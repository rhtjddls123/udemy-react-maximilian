import Tasks from "./Tasks";

interface SelectedProjectProps {
  tasks: TaskType[];
  project: ProjectType;
  onDeleteProject: () => void;
  onAddTask: (text: string) => void;
  onDeleteTask: (id: number) => void;
}

const SelectedProject = ({
  tasks,
  project,
  onDeleteProject,
  onAddTask,
  onDeleteTask
}: SelectedProjectProps) => {
  const { title, description, dueDate } = project;
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
          <button onClick={onDeleteProject} className="text-stone-600 hover:text-stone-950">
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{dueDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
      </header>
      <Tasks tasks={tasks} onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
    </div>
  );
};

export default SelectedProject;
