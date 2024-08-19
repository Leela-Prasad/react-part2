import { useContext, useReducer, useState } from "react";
import authReducer from "../reducers/authReducer";
import { AuthContext } from "../contexts/authContext";

function LoginStatus() {
  const { user, dispatch } = useContext(AuthContext);

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
