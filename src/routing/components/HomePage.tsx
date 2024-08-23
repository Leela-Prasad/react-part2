import { Link } from "react-router-dom";

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
