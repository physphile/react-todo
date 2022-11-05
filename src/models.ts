export default interface Task {
  id: number;
  title: string;
  completed: boolean;
  creationDate: Date;
  completionDate: Date | null;
}
