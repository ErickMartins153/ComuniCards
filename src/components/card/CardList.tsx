import useCartoes from "../../hooks/useCartoes";
import { CardItem } from "./CardItem";
import Loading from "../Loading";

export default function CardList({ search }: { search: string }) {
  const { cartoes, isLoading } = useCartoes();

  const cartoesFiltrados = search.trim() === ''
    ? cartoes
    : cartoes.filter((cartao) =>
        cartao.titulo.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );

  return (
    <div className="grid auto-rows-[280px] grid-cols-5 gap-16 mt-5">
      {!isLoading ? (
        cartoesFiltrados.map((cartao) => (
          <CardItem {...cartao} key={cartao.id} />
        ))
      ) : (
        <Loading texto="Carregando" />
      )}
      
      {cartoesFiltrados.length < 1 && !isLoading && (
        <p>Nenhum cartão foi encontrado</p>
      )}
    </div>
  );
}
