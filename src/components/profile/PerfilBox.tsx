import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import perfilIcon from "../../assets/perfilIcon.svg";

export default function PerfilBox() {
  const [foto, setFoto] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [message, setMessage] = useState("");
  const { usuario } = useAuth();
  const navigate = useNavigate();

  const handleAlterarFoto = async () => {
    if (!foto || !usuario) {
      setMessage("Por favor, insira a URL da foto.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8081/api/usuarios/${usuario?.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...usuario, foto }),
        },
      );

      if (response.ok) {
        setMessage("Foto de perfil alterada com sucesso!");
        usuario.foto = foto;
      } else {
        setMessage("Erro ao alterar foto.");
      }
    } catch (error) {
      console.error("Erro ao alterar foto:", error);
      setMessage("Erro ao tentar alterar foto.");
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      <Link to="/home">
        <button
          className="absolute left-4 top-4 rounded-full bg-[#29C5FD] p-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => navigate("/")}
        >
          <FaArrowLeft className="w-4 h-4" />
        </button>
      </Link>

      <img
        src={usuario?.foto || perfilIcon}
        className="w-32 h-32 mt-12 border-2 border-gray-300 rounded-full shadow-lg"
      />

      {showInput ? (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Insira a URL da nova foto"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg"
          />

          <button
            onClick={handleAlterarFoto}
            className="mt-2 rounded-lg bg-[#29C5FD] px-4 py-2 text-sm text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Ok
          </button>
        </div>
      ) : (
        <button
          className="mt-4 rounded-lg bg-[#29C5FD] px-4 py-2 text-sm text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setShowInput(true)}
        >
          Alterar Foto
        </button>
      )}

      {message && <div className="mt-4 text-red-500">{message}</div>}
    </div>
  );
}
