import { useContext, useReducer } from "react";
import LoginStatus from "./state-management/components/LoginStatus";
import taskReducer from "./state-management/reducers/taskReducer";
import TasksContext from "./state-management/contexts/tasksContext";
import TaskList from "./state-management/components/TaskList";
import NavBar from "./state-management/components/NavBar";
import HomePage from "./state-management/components/HomePage";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <HomePage />
    </TasksContext.Provider>
  );
}

export default App;
