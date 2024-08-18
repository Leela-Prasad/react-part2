import { useReducer, useState } from "react";
import authReducer from "../reducers/authReducer";

function LoginStatus() {
  const [user, dispatch] = useReducer(authReducer, "");

  if (user)
    return (
      <div>
        <span className="mx-2">{user}</span>
        <a
          className="link-primary"
          href="#"
          onClick={() => dispatch({ type: "LOGOUT" })}
        >
          Logout
        </a>
      </div>
    );

  return (
    <div>
      <a
        className="link-primary"
        href="#"
        onClick={() => dispatch({ type: "LOGIN", username: "Leela" })}
      >
        Login
      </a>
    </div>
  );
}

export default LoginStatus;
