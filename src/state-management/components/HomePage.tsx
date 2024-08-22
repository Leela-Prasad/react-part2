import LoginStatus from "../auth/LoginStatus";
import TaskList from "../tasks/TaskList";

function HomePage() {
  return (
    <>
      <LoginStatus />
      <TaskList />
    </>
  );
}

export default HomePage;
