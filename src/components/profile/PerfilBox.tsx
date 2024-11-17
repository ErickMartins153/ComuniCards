import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

export default function PerfilBox() {
  const [fotoUrl, setFotoUrl] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [message, setMessage] = useState(""); 
  const {usuario} = useAuth();

  const handleAlterarFoto = async () => {
    if (!fotoUrl) {
      setMessage("Por favor, insira a URL da foto.");
      return;
    }

    try {
      console.log("usuario?.id", usuario?.id);
      const response = await fetch(`https://localhost:8081/api/usuarios/${usuario?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fotoUrl }),
      });

      if (response.ok) {
        setMessage("Foto de perfil alterada com sucesso!");
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
        className="absolute top-4 left-4 bg-[#29C5FD] text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
        <FaArrowLeft className="w-4 h-4" />
      </button>
    </Link>

      <img
        src={fotoUrl || "https://www.doglife.com.br/blog/assets/post/gato-filhote-tudo-que-voce-precisa-saber-para-cuidar-bem-61aa5b4f5448461cf9e0a54b/filhote-capa.jpg.jpg"}
        className="w-32 h-32 rounded-full border-2 border-gray-300 shadow-lg mt-12"/>

      {showInput ? (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Insira a URL da nova foto"
            value={fotoUrl}
            onChange={(e) => setFotoUrl(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg"/>

          <button
            onClick={handleAlterarFoto}
            className="mt-2 px-4 py-2 bg-[#29C5FD] text-white text-sm rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Ok
          </button>
        </div>
      ) : (

        <button
          className="mt-4 px-4 py-2 bg-[#29C5FD] text-white text-sm rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setShowInput(true)}
        >
          Alterar Foto
        </button>
      )}

      {message && <div className="mt-4 text-red-500">{message}</div>}
    </div>
  );
}
