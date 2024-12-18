import { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import Input from "../Input";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

export default function RegisterBox() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    if (!nome || !senha || !email)
      return setMessage("Os campos não podem ser nulos");

    const response = await fetch(
      "http://localhost:8081/api/usuarios/cadastro",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nome,
          email: email,
          senha: senha,
        }),
      },
    );

    if (response.ok) {
      setMessage("Cadastro realizado com sucesso!");
      navigate("/");
    } else if (response.status === 409) {
      setMessage("Este email já está registrado.");
    } else {
      setMessage("Erro no cadastro. Tente novamente.");
    }
  };

  return (
    <div className="bg-white flex flex-col py-8 items-center justify-between rounded-l-xl w-[60%] h-[400px] border-r-2">
        <label className="text-[#29C5FD] text-center text-2xl font-bold leading-normal font-roboto un">
        Criar uma conta
      </label>
      <div className="my-12 flex h-[50%] w-full flex-col items-center justify-between">
        <Input
          icon={FaUser}
          placeholder="Digite seu nome..."
          style={{ color: "#8B96C2" }}
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <Input
          icon={FaEnvelope}
          placeholder="Digite seu email..."
          type="email"
          style={{ color: "#8B96C2" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          icon={FaLock}
          placeholder="Digite sua senha..."
          style={{ color: "#8B96C2" }}
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <Button text="Cadastrar" function={handleRegister} />
      {message && <div className="mt-4 text-red-500">{message}</div>}
    </div>
  );
}
