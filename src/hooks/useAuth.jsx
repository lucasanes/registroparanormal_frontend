import { React, createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {

  const [data, setData] = useState({});

  async function signIn({ username, email, senha, manterLogin }) {
    try {
      const response = await api.post("/login", { username, email, senha });
      const { user, token } = response.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token });

      localStorage.setItem("@registroparanormal:manterLogin", manterLogin)
      localStorage.setItem("@registroparanormal:token", token);

    } catch (error) {
      toast.error(error.response.data.msg)
    }
  }

  function signOut() {

    localStorage.removeItem("@registroparanormal:token");
    localStorage.removeItem("@registroparanormal:manterLogin");

    window.location.href = "/"

    setData({user: null, token: null})
  }

  useEffect(() => {
    const token = localStorage.getItem("@registroparanormal:token");
    const manterLogin = localStorage.getItem("@registroparanormal:manterLogin")

    if (token && manterLogin) {

      async function fetchData() {
        const response = await api.post("/token", { token })
        const tokenIsValid = response.data.tokenIsValid
        const user = response.data.user

        if (manterLogin == 'false') {
          signOut()
        }

        if (!tokenIsValid) {
          signOut()
        } else {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          setData({ user, token });
        }
      }

      fetchData()
    } else {
      setData({user: null, token: null})
    }

  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
        token: data.token
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth, AuthContext };