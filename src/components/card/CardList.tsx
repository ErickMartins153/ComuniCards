import useCartoes from "../../hooks/useCartoes";
import { CardItem } from "./CardItem";
import Loading from "../Loading";
import { Categoria, CategoriaLabel } from "../../model/categorias";
import { useAuth } from "../../hooks/useAuth";

interface CardListProps {
  search: string;
  filtros: string[];
}

export default function CardList({ search, filtros }: CardListProps) {
  const { usuario } = useAuth();
  const { cartoes, isLoading, deleteCartao } = useCartoes();

  function handleDelete(id: string) {
    deleteCartao(id, usuario!.id);
  }

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
      {!isLoading ? (
        Object.keys(cartoesPorCategoria).length > 0 ? (
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
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum cartão foi encontrado</p>
        )
      ) : (
        <Loading texto="Carregando" />
      )}
    </div>
  );
}
