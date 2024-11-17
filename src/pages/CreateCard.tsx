import { useState } from "react";
import { createCartao } from "../util/requests";
import { useNavigate } from "react-router-dom";
import { Categoria, CategoriaLabel } from "../model/categorias";
import { Cartao } from "../model/Cartao";
import { NavBar } from "../components/NavBar";
import { useAuth } from "../hooks/useAuth";

export default function CreateCartao() {
  const { usuario } = useAuth();
  const navigate = useNavigate();

  const [cartao, setCartao] = useState<Cartao>({
    frase: "",
    id: "",
    titulo: "",
    categoria: "",
    urlImagem: "",
    base: false,
    criadorId: usuario!.id,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setCartao((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createCartao(cartao);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-4 bg-white rounded shadow-lg"
      >
        <label>
          Título:
          <input
            type="text"
            name="titulo"
            value={cartao.titulo}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </label>

        <label>
          Categoria:
          <select
            name="categoria"
            value={cartao.categoria}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Selecione uma categoria</option>
            {Object.values(Categoria).map((categoria) => (
              <option key={categoria as string} value={categoria as string}>
                {CategoriaLabel[categoria as Categoria]}
              </option>
            ))}
          </select>
        </label>

        <label>
          Frase:
          <input
            type="text"
            name="frase"
            value={cartao.frase}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </label>

        <label>
          URL da Imagem:
          <input
            type="url"
            name="urlImagem"
            value={cartao.urlImagem}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </label>

        <button type="submit" className="p-2 text-white bg-blue-500 rounded">
          Criar Cartão
        </button>
      </form>
    </>
  );
}
