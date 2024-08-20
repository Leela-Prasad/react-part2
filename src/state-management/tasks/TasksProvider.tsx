import { ReactNode, useReducer } from "react";
import TasksContext from "./tasksContext";

export interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: "ADD";
  task: Task;
}

interface DeleteTask {
  type: "DELETE";
  id: number;
}

export type TaskAction = AddTask | DeleteTask;

function taskReducer(tasks: Task[], dispatch: TaskAction): Task[] {
  switch (dispatch.type) {
    case "ADD":
      return [...tasks, { id: dispatch.task.id, title: dispatch.task.title }];

    case "DELETE":
      return tasks.filter((t) => t.id !== dispatch.id);
  }
}

interface Props {
  children: ReactNode;
}

function TaskProvider({ children }: Props) {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
}

export default TaskProvider;
