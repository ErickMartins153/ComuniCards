import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import LoginInput from "../Input";
import Button from "../Button";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

export default function LoginBox() {
  const { logar } = useAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    console.log(email, senha);

    if (!email || !senha) return;

    const result = logar({ email, senha });
    if (typeof result === "string") {
      setMessage(result);
    }
  };

  return (
    <div className="flex h-[60%] w-[26%] flex-col items-center justify-center rounded-xl bg-[#B1D8FF] shadow-[0_10px_50px_rgba(0,0,0,0.25)]">
      <label className="text-center font-sour-gummy text-2xl font-normal uppercase leading-normal text-[#171717]">
        <div>BEM VINDO DE</div>
        <div> VOLTA!</div>
      </label>
      <br />
      <br />
      <LoginInput
        icon={FaEnvelope}
        placeholder="Email"
        type="email"
        style={{ color: "#8B96C2" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <LoginInput
        icon={FaLock}
        placeholder="Senha"
        style={{ color: "#8B96C2" }}
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <div className="mb-7 mt-2 w-full pl-10 text-[#171717]">
        <label>Não tem uma conta ? </label>
        <Link to={"/register"}>
          <a className="underline">Cadastre-se</a>
        </Link>
      </div>
      <br />
      <Button text="Login" function={handleLogin} />
      {message && <div className="mt-4 text-red-500">{message}</div>}
    </div>
  );
}
