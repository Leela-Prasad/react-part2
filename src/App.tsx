import HomePage from "./state-management/components/HomePage";
import NavBar from "./state-management/components/NavBar";
import Counter from "./state-management/counter/Counter";
import { TaskProvider } from "./state-management/tasks";

function App() {
  return (
    <TaskProvider>
      <Counter />
      <NavBar />
      <HomePage />
    </TaskProvider>
  );
}

export default App;
