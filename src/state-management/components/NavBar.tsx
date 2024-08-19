import { useContext } from "react";
import TasksContext from "../contexts/tasksContext";

function NavBar() {
  const { tasks } = useContext(TasksContext);

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
    </nav>
  );
}

export default NavBar;
