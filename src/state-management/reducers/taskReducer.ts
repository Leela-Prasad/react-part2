interface Task {
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

type TaskAction = AddTask | DeleteTask;

function taskReducer(tasks: Task[], dispatch: TaskAction): Task[] {
  switch (dispatch.type) {
    case "ADD":
      return [...tasks, { id: dispatch.task.id, title: dispatch.task.title }];

    case "DELETE":
      return tasks.filter((t) => t.id !== dispatch.id);
  }
}

export default taskReducer;
