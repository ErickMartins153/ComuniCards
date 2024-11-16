import { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import LoginInput from '../Input';
import Button from '../Button';

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

        const data = await response.text();

        if (response.ok) {
            setMessage('Login realizado com sucesso!');
        } else {
            setMessage(data);
        }
    };

    return (
        <div className="bg-[#B1D8FF] flex flex-col items-center justify-center rounded-xl w-[26%] h-[60%] shadow-[0_10px_50px_rgba(0,0,0,0.25)]">
            <label className='text-white text-center text-2xl font-normal leading-normal uppercase font-sour-gummy'>
                <div>BEM VINDO DE</div>
                <div> VOLTA!</div>
            </label>
            <br />
            <br />
            <LoginInput
                icon={FaEnvelope}
                placeholder="Email"
                type='email'
                style={{ color: '#8B96C2' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <LoginInput
                icon={FaLock}
                placeholder="Senha"
                style={{ color: '#8B96C2' }}
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />
            <div className='mt-2 mb-7 w-full pl-10 text-white'>
                <label>Não tem uma conta ? </label>
                <a href='#' className='underline'>Cadastre-se</a>
            </div>
            <br />
            <Button text="Login" function={handleLogin} />
            {message && <div className="text-red-500 mt-4">{message}</div>}
        </div>
    );
}
