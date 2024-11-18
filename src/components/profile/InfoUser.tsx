import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Cartao } from "../../model/Cartao";

export default function InfoUser() {
  const { deslogar } = useAuth();
  const { id } = useParams(); // Captura o ID da URL
  const [userData, setUserData] = useState({
    nome: "",
    email: "",
    senha: "",
  });
  const [favoritos, setFavoritos] = useState<Cartao[]>([]);
  const { usuario } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  async function handleDelete() {
    try {
      await fetch(`http://localhost:8081/api/usuarios/${usuario?.id}`, {
        method: "DELETE",
      });
      alert("Usuário deletado com sucesso!");
      deslogar();
    } catch (error) {
      console.error("Erro ao deletar o usuário:", error);
      alert("Erro ao tentar deletar o usuário.");
    }
  }

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:8081/api/usuarios/${usuario?.id}`,
        );
        const data = await response.json();
        setUserData({
          nome: data.nome,
          email: data.email,
          senha: data.senha,
        });
      } catch (error) {
        console.error("Erro ao buscar os dados do usuário:", error);
      }
    }

    fetchData();
  }, [id, usuario?.id]);

  useEffect(() => {
    async function fetchFavoritos() {
      try {
        const response = await fetch(
          `http://localhost:8081/api/usuarios/${usuario?.id}/favoritos`,
        );
        const data = await response.json();
        setFavoritos(data);
      } catch (error) {
        console.error("Erro ao buscar os favoritos:", error);
      }
    }

    fetchFavoritos();
  }, [usuario?.id]);

  return (
    <div className="flex flex-col items-center w-full h-screen mt-6">
      <div className="w-4/5 max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">
          Informações do Usuário
        </h2>
        <label className="block mb-2">
          <input
            type="text"
            value={userData.nome}
            placeholder="Nome"
            disabled
            className="block w-full p-2 border border-gray-300 rounded-lg"
          />
        </label>
        <label className="block mb-2">
          <input
            type="text"
            value={userData.email}
            placeholder="Email"
            disabled
            className="block w-full p-2 border border-gray-300 rounded-lg"
          />
        </label>
        <label className="relative block mb-4">
          <input
            type={showPassword ? "text" : "password"}
            value={usuario?.senha}
            placeholder="Senha"
            disabled
            className="block w-full p-2 border border-gray-300 rounded-lg"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute text-gray-500 transform right-3 top-2/4 -translate-y-2/4"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </label>

        <h3 className="mb-2 text-xl font-medium text-gray-600">Favoritos</h3>
        <div className="p-4 mb-4 rounded-lg bg-gray-50">
          {favoritos.length > 0 ? (
            <ul className="list-disc list-inside">
              {favoritos.map((favorito) => (
                <li key={favorito.id} className="text-gray-700">
                  {favorito.titulo}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Você ainda não tem favoritos.</p>
          )}
        </div>

        <button
          className="w-full p-2 text-white transition-all bg-red-600 rounded-lg hover:bg-red-700"
          onClick={handleDelete}
        >
          Deletar conta
        </button>
      </div>
    </div>
  );
}
