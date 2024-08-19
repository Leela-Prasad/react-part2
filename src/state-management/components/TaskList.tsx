import { HStack } from "@chakra-ui/react";
import { useContext, useReducer, useState } from "react";
import taskReducer from "../reducers/taskReducer";
import TasksContext from "../contexts/tasksContext";
import { AuthContext } from "../contexts/authContext";

function TaskList() {
  const {tasks, dispatch} = useContext(TasksContext);
  const {user} = useContext(AuthContext);

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
