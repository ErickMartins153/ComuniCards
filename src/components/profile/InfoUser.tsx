import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";

export default function InfoUser() {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };
    const [favoritos, setFavoritos] = useState<string[]>([]);
    const { usuario } = useAuth();

    async function handleDelete() {
        if (!usuario?.id) {
            alert("ID do usuário inválido!");
            return;
        }
    
        try {
            const response = await fetch(`http://localhost:8081/api/usuarios/${usuario.id}`, {
                method: "DELETE",
            });
    
            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`Erro: ${response.status} - ${errorMessage}`);
            }
    
            alert("Usuário deletado com sucesso!");
            window.location.href = "/";
        } catch (error) {
            if (error instanceof Error) {
                console.error("Erro ao deletar o usuário:", error.message);
            } else {
                console.error("Erro ao deletar o usuário:", error);
            }
            alert("Erro ao tentar deletar o usuário. Verifique o console para mais detalhes.");
        }
    }


    useEffect(() => {
        async function fetchFavoritos() {
            try {
                const response = await fetch(`http://localhost:8081/api/usuarios/${usuario?.id}/favoritos`);
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
                        value={usuario?.nome}
                        placeholder="Nome"
                        disabled
                        className="block w-full p-2 rounded-lg border border-gray-300"
                    />
                </label>
                <label className="block mb-2">
                    <input
                        type="text"
                        value={usuario?.email}
                        placeholder="Email"
                        disabled
                        className="block w-full p-2 rounded-lg border border-gray-300"
                    />
                </label>
                <label className="block mb-4 relative">
            <input
                type={showPassword ? "text" : "password"}
                value={usuario?.senha}
                placeholder="Senha"
                disabled
                className="block w-full p-2 rounded-lg border border-gray-300"
            />
            <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-500"
            >
                {showPassword ? "🙈" : "👁️"}
            </button>
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
