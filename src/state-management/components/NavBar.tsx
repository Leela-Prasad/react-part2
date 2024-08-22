import { useContext } from "react";
import TasksContext from "../tasks/tasksContext";
import useCounterStore from "../counter/store";

function NavBar() {
  const { tasks } = useContext(TasksContext);
  const { counter } = useCounterStore();

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
    </nav>
  );
}

export default NavBar;
