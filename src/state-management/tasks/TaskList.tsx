import { HStack } from "@chakra-ui/react";
import { useContext } from "react";
import TasksContext from "./tasksContext";
import useAuth from "../auth/useAuth";

const useTasks = () => useContext(TasksContext);

function TaskList() {
  const { tasks, dispatch } = useTasks();
  const { user } = useAuth();

  return (
    <>
      <p>User: {user}</p>
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            task: {
              id: Date.now(),
              title: "Task " + Date.now(),
            },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>

      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item">
            <HStack justifyContent={"space-between"}>
              <p>{task.title}</p>
              <button
                onClick={() =>
                  dispatch({
                    type: "DELETE",
                    id: task.id,
                  })
                }
                className="btn btn-danger"
              >
                Delete
              </button>
            </HStack>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TaskList;
