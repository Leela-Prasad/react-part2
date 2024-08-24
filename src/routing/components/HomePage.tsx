import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function HomePage() {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae,
        amet.
      </p>
      <Link to={"/users"}>Users</Link>
    </>
  );
}

export default HomePage;
