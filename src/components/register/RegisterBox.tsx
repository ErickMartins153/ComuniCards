import { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import Input from "../Input";
import Button from "../Button";

export default function RegisterBox() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async () => {
        const response = await fetch('http://localhost:8081/api/usuarios/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                email: email,
                senha: senha,
            }),
        });

        if (response.ok) {
            setMessage('Cadastro realizado com sucesso!');
            window.location.href = "/login";
        } else if (response.status === 409) {
            setMessage('Este email já está registrado.');
        } else {
            setMessage('Erro no cadastro. Tente novamente.');
        }
    };

    return (
        <div className="bg-white flex flex-col py-8 items-center justify-between rounded-l-xl w-[60%] h-[400px] border-r-2">
            <label className="text-[#29C5FD] text-center text-2xl font-bold leading-normal font-roboto">
                Criar uma conta
            </label>
            <div className="flex flex-col items-center justify-between w-full h-[50%]">
                <Input
                    icon={FaUser}
                    placeholder="Digite seu nome..."
                    style={{ color: "#8B96C2" }}
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}            />
                <Input
                    icon={FaEnvelope}
                    placeholder="Digite seu email..."
                    style={{ color: "#8B96C2" }}
                    type="email"
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
            {message && <div className="text-red-500 mt-4">{message}</div>}
        </div>
    );
}
