import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function InfoUser() {
    const { id } = useParams(); // Captura o ID da URL
    const [userData, setUserData] = useState({
        nome: "",
        email: "",
        senha: "",
    });
    const [favoritos, setFavoritos] = useState<string[]>([]);
    const { usuario } = useAuth();

    async function handleDelete() {
        try {
            await fetch(`https://localhost:8081/api/usuarios/${usuario?.id}`, {
                method: "DELETE",
            });
            alert("Usuário deletado com sucesso!");
        } catch (error) {
            console.error("Erro ao deletar o usuário:", error);
            alert("Erro ao tentar deletar o usuário.");
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://localhost:8081/api/usuarios/${usuario?.id}`);
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
    }, [id]);

    useEffect(() => {
        async function fetchFavoritos() {
            try {
                const response = await fetch(`https://localhost:8081/api/usuarios/${usuario?.id}/favoritos`);
                const data = await response.json();
                setFavoritos(data);
            } catch (error) {
                console.error("Erro ao buscar os favoritos:", error);
            }
        }

        fetchFavoritos();
    }, [usuario?.id]);

    return (
        <div className="flex flex-col items-center mt-6 w-full h-screen">
            <div className="bg-white shadow-md rounded-lg w-4/5 max-w-md p-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Informações do Usuário</h2>
                <label className="block mb-2">
                    <input
                        type="text"
                        value={userData.nome}
                        placeholder="Nome"
                        disabled
                        className="block w-full p-2 rounded-lg border border-gray-300"
                    />
                </label>
                <label className="block mb-2">
                    <input
                        type="text"
                        value={userData.email}
                        placeholder="Email"
                        disabled
                        className="block w-full p-2 rounded-lg border border-gray-300"
                    />
                </label>
                <label className="block mb-4">
                    <input
                        type="text"
                        value={userData.senha}
                        placeholder="Senha"
                        disabled
                        className="block w-full p-2 rounded-lg border border-gray-300"
                    />
                </label>

                <h3 className="text-xl font-medium text-gray-600 mb-2">Favoritos</h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    {favoritos.length > 0 ? (
                        <ul className="list-disc list-inside">
                            {favoritos.map((favorito, index) => (
                                <li key={index} className="text-gray-700">{favorito}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">Você ainda não tem favoritos.</p>
                    )}
                </div>

                <button
                    className="w-full bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-all"
                    onClick={handleDelete}
                >
                    Deletar conta
                </button>
            </div>
        </div>
    );
}
