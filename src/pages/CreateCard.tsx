import { useState } from "react";
import { createCartao } from "../util/requests";
import { useNavigate } from "react-router-dom";
import { Categoria, CategoriaLabel } from "../model/categorias";
import { Cartao } from "../model/Cartao";
import { NavBar } from "../components/NavBar";

export default function CreateCartao() {
  const navigate = useNavigate();

  const [cartao, setCartao] = useState<Cartao>({
    frase: "",
    id: "",
    titulo: "",
    categoria: "",
    urlImagem: "",
    base: false,
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
        className="flex flex-col gap-4 rounded bg-white p-4 shadow-lg"
      >
        <label>
          Título:
          <input
            type="text"
            name="titulo"
            value={cartao.titulo}
            onChange={handleInputChange}
            className="w-full rounded border p-2"
            required
          />
        </label>

        <label>
          Categoria:
          <select
            name="categoria"
            value={cartao.categoria}
            onChange={handleInputChange}
            className="w-full rounded border p-2"
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
            className="w-full rounded border p-2"
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
            className="w-full rounded border p-2"
            required
          />
        </label>

        <button type="submit" className="rounded bg-blue-500 p-2 text-white">
          Criar Cartão
        </button>
      </form>
    </>
  );
}
