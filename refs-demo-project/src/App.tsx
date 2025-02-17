import { useState } from "react";
import "./App.css";
import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState<PropjectStateType>({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
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

  const handleDeleteProject = () => {
    setProjectState((prev) => {
      const newProject = prev.projects.filter((project) => project.id !== prev.selectedProjectId);
      return { ...prev, projects: newProject, selectedProjectId: undefined };
    });
  };

  const handleSelectProject = (id: number) => {
    setProjectState((prev) => ({ ...prev, selectedProjectId: id }));
  };

  const handleAddTask = (text: string) => {
    const teskLength = projectState.tasks.length;
    const taskId = teskLength > 0 ? projectState.tasks[teskLength - 1].id + 1 : 0;
    if (projectState.selectedProjectId === 0 || projectState.selectedProjectId) {
      const newTask: TaskType = { id: taskId, projectId: projectState.selectedProjectId, text };
      setProjectState((prev) => ({ ...prev, tasks: [...prev.tasks, newTask] }));
    }
  };

  const handleDeleteTask = (id: number) => {
    const newTasks = projectState.tasks.filter((task) => task.id !== id);
    setProjectState((prev) => ({ ...prev, tasks: newTasks }));
  };

  let content;

  const seletedProject = projectState.projects.find(
    ({ id }) => id === projectState.selectedProjectId
  );

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onCancelProject={handleCancelAddProject} onAddProject={handleAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (seletedProject) {
    content = (
      <SelectedProject
        tasks={projectState.tasks.filter(
          (task) => task.projectId === projectState.selectedProjectId
        )}
        project={seletedProject}
        onDeleteProject={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
      />
    );
  }
  return (
    <main className="my-8 h-screen flex gap-8">
      <SideBar
        projects={projectState.projects}
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
