import Usuario, { Credentials } from "../model/Usuario";

export async function handleLogin(credenciais: Credentials) {
  const response = await fetch("http://localhost:8081/api/usuarios/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credenciais),
  });
  const data = await response.json();

  if (response.ok) {
    return data as Usuario;
  } else {
    return data as string;
  }
}
