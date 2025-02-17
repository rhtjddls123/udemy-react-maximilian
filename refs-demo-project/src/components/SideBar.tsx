interface SideBarProps {
  projects: ProjectType[];
  onStartAddProject: () => void;
}

const SideBar = ({ projects, onStartAddProject }: SideBarProps) => {
  return (
    <aside className="bg-stone-900 w-1/3 py-16 px-8 flex flex-col rounded-r-xl md:w-72">
      <h2 className="text-stone-200 font-bold text-xl mb-8 uppercase">YOUR PROJECTS</h2>
      <div>
        <button
          onClick={onStartAddProject}
          className="bg-stone-700 py-2 px-4 rounded-md text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        >
          + Add Project
        </button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="text-stone-400 hover:bg-stone-800 hover:text-stone-200 w-full text-left my-1 px-2 py-1 rounded-sm">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
