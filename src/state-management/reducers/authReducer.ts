interface LoginAction {
  type: "LOGIN";
  username: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

type authAction = LoginAction | LogoutAction;

function loginReducer(user: string, action: authAction) {
  switch (action.type) {
    case "LOGIN":
      return action.username;
    case "LOGOUT":
      return "";
  }
}

export default loginReducer;
