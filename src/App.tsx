import AuthProvider from "./state-management/auth/AuthProvider";
import HomePage from "./state-management/components/HomePage";
import NavBar from "./state-management/components/NavBar";
import { TaskProvider } from "./state-management/tasks";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <NavBar />
        <HomePage />
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
