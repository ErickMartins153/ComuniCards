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
    <div className="bg-white flex flex-col items-center justify-center rounded-xl w-[26%] h-[60%] shadow-[0_10px_50px_rgba(0,0,0,0.25)]">
            <label className='text-[#29C5FD] text-center text-2xl font-bold leading-normal uppercase font-roboto'>
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
      <div className='mt-2 mb-7 w-full pl-10 text-[#8d8e8e]'>
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
