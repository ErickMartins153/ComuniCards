import useCartoes from "../../hooks/useCartoes";
import { CardItem } from "./CardItem";
import Loading from "../Loading";

export default function CardList() {
  const { cartoes, isLoading } = useCartoes();

  return (
    <div className="mt-5 grid auto-rows-[280px] grid-cols-5 gap-16">
      {!isLoading ? (
        cartoes.map((cartao) => <CardItem {...cartao} key={cartao.id} />)
      ) : (
        <Loading texto="Carregando" />
      )}
      {cartoes.length < 1 && !isLoading && <p>Nenhum cartão foi encontrado</p>}
    </div>
  );
}
