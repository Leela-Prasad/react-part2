import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Counter from "./counter/Counter";
import { TaskProvider } from "./tasks";

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
