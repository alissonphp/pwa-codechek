import { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import api from "../services/api.service";

interface AuthContextData {
  signed: boolean;
  token: string | null;
  user: User | null;
  Login(values: LoginData): Promise<void>;
  Logout(): any;
}

export interface LoginData {
  login: string;
  password: string;
}

interface User {
  name: string
  email: string
  document: string
  date_birth: string
  type: number,
  uid: string
  channel: number
  updated_at: string
  created_at: string
  id: number
  object_channel: {
      id: number
      module: number,
      name: string
      description: string
      active: number,
      created_at: string
      updated_at: string
  }
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      const storagedToken = localStorage.getItem("@App:token");
      const storagedUser = localStorage.getItem("@App:user");
      if (storagedToken && storagedUser) {
        setUser(JSON.parse(storagedUser));
      }
    }

    loadStorageData()
  }, []);

  async function Login(values: LoginData) {
    const { data } = await api.post("/users/login", values);

    setToken("ok");
    setUser(data.object_response);

    localStorage.setItem("@App:token", "ok");
    localStorage.setItem("@App:user", JSON.stringify(data.object_response));
  }

  function Logout() {
    localStorage.clear()
    setToken(null);
    setUser(null);
    window.location.href = '/'
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(token), token, user, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }
  return context;
}

export function RequireAuth({ children }: { children: JSX.Element }) {
  const storagedToken = localStorage.getItem("@App:token");
  const location = useLocation();
  if (!storagedToken) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
  return children;
}

export { AuthContext, useAuth };
