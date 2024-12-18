import { createContext, ReactNode, useEffect, useState } from "react";
import Usuario, { Credentials } from "../model/Usuario";
import { handleLogin } from "../util/authService";

interface AuthContextType {
  usuario: Usuario | null;
  logar: (credenciais: Credentials) => Promise<Usuario | string>;
  deslogar: () => void;
}

const defaultValue: AuthContextType = {
  usuario: null,
  logar: async () => "",
  deslogar: async () => {},
};

export const AuthContext = createContext<AuthContextType>(defaultValue);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("usuario");
    if (storedUser) {
      const { email, senha }: Usuario = JSON.parse(storedUser);
      logar({ email, senha })
        .then(() => console.log("existente"))
        .catch(() => deslogar());
      setUsuario(JSON.parse(storedUser));
    }
  }, []);

  async function logar(credenciais: Credentials) {
    if (!credenciais.email || !credenciais.senha) return "";

    const result = await handleLogin(credenciais);
    if (typeof result === "object" && !!typeof result.email) {
      setUsuario(result);
      localStorage.setItem("usuario", JSON.stringify(result));
    }

    return result;
  }

  async function deslogar() {
    setUsuario(null);
    localStorage.removeItem("usuario");
  }

  const value: AuthContextType = {
    logar,
    deslogar,
    usuario,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
