import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router";

interface User {
  email: string;
  password: string;
}

interface AuthProviderData {
  authToken: string;
  signIn: (userData: User) => void;
  Logout: () => void;
}

interface AuthProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProps) => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState<string>(
    () => localStorage.getItem("token") || ""
  );

  const signIn = (userData: User) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setAuthToken(response.data.token);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  const Logout = () => {
    localStorage.clear();
    setAuthToken("");
    history.push("/login");
  };

  return (
    <AuthContext.Provider value={{ authToken, Logout, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
