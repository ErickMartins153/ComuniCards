import { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import Button from '../Button';
import Input from '../Input';

export default function LoginBox() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        const response = await fetch('http://localhost:8081/api/usuarios/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                senha: senha,
            }),
        });

        if (response.ok) {
            setMessage('Login realizado com sucesso!');
            window.location.href = "/home";
        } else {
            const data = await response.text();
            setMessage(data);
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
            <Input
                icon={FaEnvelope}
                placeholder="Email"
                style={{ color: '#8B96C2' }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <Input
                icon={FaLock}
                placeholder="Senha"
                style={{ color: '#8B96C2' }}
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />
            <div className='mt-2 mb-7 w-full pl-10 text-[#8d8e8e]'>
                <label>Não tem uma conta ? </label>
                <a href='#' className='underline'>Cadastre-se</a>
            </div>
            <br />
            <Button text="Login" function={handleLogin} />
            {message && <div className="text-red-500 mt-4">{message}</div>}
        </div>
    );
}
