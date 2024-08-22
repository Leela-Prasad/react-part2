import AuthProvider from "./state-management/auth/AuthProvider";
import HomePage from "./state-management/components/HomePage";
import NavBar from "./state-management/components/NavBar";
import Counter from "./state-management/counter/Counter";
import { TaskProvider } from "./state-management/tasks";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Counter />
        <NavBar />
        <HomePage />
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
