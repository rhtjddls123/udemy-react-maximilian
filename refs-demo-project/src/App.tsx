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

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onCancelProject={handleCancelAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleStartAddProject} />;
  }

  return (
    <main className="my-8 h-screen flex gap-8">
      <SideBar onAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
