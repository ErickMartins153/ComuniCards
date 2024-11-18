import { useAuth } from "../../hooks/useAuth";
import useCartoes from "../../hooks/useCartoes";
import { Cartao } from "../../model/Cartao";
import { Categoria, CategoriaLabel } from "../../model/categorias";
import { CardItem } from "./CardItem";

interface CardListProps {
  cartoes: Cartao[];
  search: string;
  filtros: string[];
  tipo: "todos" | "favoritos";
  onRefresh: () => void;
}

export default function CardList({
  cartoes,
  search,
  filtros,
  tipo,
  onRefresh,
}: CardListProps) {
  const { usuario } = useAuth();
  const { deleteCartao } = useCartoes(tipo);
  const cartoesFiltrados =
    search.trim() === ""
      ? cartoes
      : cartoes.filter((cartao) =>
          cartao.titulo
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()),
        );

  const cartoesComFiltro =
    filtros.length > 0
      ? cartoesFiltrados.filter((cartao) => filtros.includes(cartao.categoria!))
      : cartoesFiltrados;

  const cartoesPorCategoria = cartoesComFiltro.reduce(
    (acc, cartao) => {
      const categoria = cartao.categoria!;
      if (!acc[categoria]) {
        acc[categoria] = [];
      }
      acc[categoria].push(cartao);
      return acc;
    },
    {} as Record<string, typeof cartoes>,
  );

  return (
    <div className="mt-5 space-y-8">
      {Object.keys(cartoesPorCategoria).length > 0 ? (
        Object.entries(cartoesPorCategoria).map(([categoria, cartoes]) => (
          <div key={categoria}>
            <h2 className="mb-4 text-xl font-bold">
              {CategoriaLabel[categoria as Categoria]}
            </h2>
            <div className="grid auto-rows-[280px] grid-cols-5 gap-16">
              {cartoes.map((cartao) => (
                <CardItem
                  {...cartao}
                  key={cartao.id}
                  onDelete={() => deleteCartao(cartao.id, usuario!.id)}
                  onRefresh={onRefresh}
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>Nenhum cartão encontrado</p>
      )}
    </div>
  );
}
