import noPojectImage from "../assets/no-projects.png";

interface NoProjectSelectedProps {
  onStartAddProject: () => void;
}

const NoProjectSelected = ({ onStartAddProject }: NoProjectSelectedProps) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 mx-auto object-contain"
        src={noPojectImage}
        alt="no-projects-image"
      />
      <h2 className="text-stone-500 text-xl font-bold my-4">No Project Selected</h2>
      <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
      <p className="mt-8">
        <button
          onClick={onStartAddProject}
          className="bg-stone-700 text-stone-400 py-2 px-4 rounded-md hover:bg-stone-600 hover:text-stone-100"
        >
          Create new project
        </button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
