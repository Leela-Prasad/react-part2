import { Outlet } from "react-router-dom";
import UserList from "./UserList";

const UserPage = () => {
  // throw new Error("Application Error");

  return (
    <div className="row">
      <div className="col">
        <UserList />
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};

export default UserPage;
