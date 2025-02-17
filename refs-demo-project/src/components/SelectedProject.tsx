interface SelectedProjectProps {
  project: ProjectType;
  onDeleteProject: () => void;
}

const SelectedProject = ({ project, onDeleteProject }: SelectedProjectProps) => {
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
      <section>
        <h2 className="text-stone-700 mb-4 font-bold text-2xl">Tasks</h2>
        <div className="flex gap-4 items-center">
          <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
          <button className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
        <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>
      </section>
    </div>
  );
};

export default SelectedProject;
