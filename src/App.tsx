import { useContext, useReducer } from "react";
import LoginStatus from "./state-management/components/LoginStatus";
import taskReducer from "./state-management/reducers/taskReducer";
import TasksContext from "./state-management/contexts/tasksContext";
import TaskList from "./state-management/components/TaskList";
import NavBar from "./state-management/components/NavBar";
import HomePage from "./state-management/components/HomePage";
import authReducer from "./state-management/reducers/authReducer";
import { AuthContext } from "./state-management/contexts/authContext";

function App() {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
      <TasksContext.Provider value={{ tasks, dispatch: taskDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
