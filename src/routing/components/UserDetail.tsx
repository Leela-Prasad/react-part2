import { useLocation, useParams, useSearchParams } from "react-router-dom";

function UserDetail() {
  const params = useParams(); //to get path parameters
  // console.log(params);

  // const [searchParams, setSearchParams] = useSearchParams(); // for query params
  // console.log(searchParams.toString());
  // console.log(searchParams.get("name"));

  // const location = useLocation(); // obj contains path and query params
  // console.log(location);

  return <p>User {params.id}</p>;
}

export default UserDetail;
