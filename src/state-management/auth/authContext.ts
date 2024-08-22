import { Dispatch } from "react";
import React from "react";
import { AuthAction } from "./AuthProvider";

interface AuthContextType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

export const AuthContext = React.createContext<AuthContextType>(
  {} as AuthContextType
);
