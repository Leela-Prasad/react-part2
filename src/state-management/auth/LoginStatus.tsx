import useAuthStore from "./store";

function LoginStatus() {
  const { user, login, logout } = useAuthStore();

  if (user)
    return (
      <div>
        <span className="mx-2">{user}</span>
        <a className="link-primary" href="#" onClick={() => logout()}>
          Logout
        </a>
      </div>
    );

  return (
    <div>
      <a className="link-primary" href="#" onClick={() => login("Leela")}>
        Login
      </a>
    </div>
  );
}

export default LoginStatus;
