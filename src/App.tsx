import { useReducer } from "react";
import AuthProvider from "./state-management/AuthProvider";
import HomePage from "./state-management/components/HomePage";
import NavBar from "./state-management/components/NavBar";
import TasksContext from "./state-management/contexts/tasksContext";
import taskReducer from "./state-management/reducers/taskReducer";

function App() {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);

  return (
    <AuthProvider>
      <TasksContext.Provider value={{ tasks, dispatch: taskDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthProvider>
  );
}

export default App;
