export interface Work {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  isDone: boolean;
  isChecking?: boolean;
}