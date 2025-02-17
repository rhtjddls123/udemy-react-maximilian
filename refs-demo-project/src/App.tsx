import { useState } from "react";
import "./App.css";
import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectState, setProjectState] = useState<PropjectStateType>({
    selectedProjectId: undefined,
    projects: []
  });

  const handleStartAddProject = () => {
    setProjectState((prev) => ({ ...prev, selectedProjectId: null }));
  };

  const handleCancelAddProject = () => {
    setProjectState((prev) => ({ ...prev, selectedProjectId: undefined }));
  };

  const handleAddProject = (projectData: Omit<ProjectType, "id">) => {
    const projectLength = projectState.projects.length;
    const id = projectLength > 0 ? projectState.projects[projectLength - 1].id + 1 : 0;
    const newProject: ProjectType = { ...projectData, id };

    setProjectState((prev) => ({
      ...prev,
      selectedProjectId: undefined,
      projects: [...prev.projects, newProject]
    }));
  };

  let content;

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onCancelProject={handleCancelAddProject} onAddProject={handleAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="my-8 h-screen flex gap-8">
      <SideBar projects={projectState.projects} onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
