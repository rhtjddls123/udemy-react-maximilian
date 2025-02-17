interface PropjectStateType {
  selectedProjectId?: number | null;
  projects: ProjectType[];
}

interface ProjectType {
  id: number;
  title: string;
  description: string;
  dueDate: string;
}
