interface PropjectStateType {
  selectedProjectId?: number | null;
  projects: ProjectType[];
  tasks: TaskType[];
}

interface ProjectType {
  id: number;
  title: string;
  description: string;
  dueDate: string;
}

interface TaskType {
  id: number;
  projectId: number;
  text: string;
}
