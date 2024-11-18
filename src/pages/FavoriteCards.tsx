import { NavBar } from "../components/NavBar";
import { useAuth } from "../hooks/useAuth";

import Loading from "../components/Loading";
import CardList from "../components/card/CardList";
import useCartoes from "../hooks/useCartoes";

export default function FavoriteCards() {
  const { usuario } = useAuth();
  const { cartoes: favoritos, isLoading } = useCartoes("favoritos");

  if (!usuario) {
    return <p>Você precisa estar logado para ver seus favoritos.</p>;
  }

  function refreshHandler() {}

  return (
    <>
      <NavBar />
      <div className="mx-20 flex flex-col gap-5 rounded bg-[#B1D8FF] p-12">
        <h1 className="text-4xl font-bold text-center">Meus Favoritos</h1>
        {isLoading ? (
          <Loading texto="Carregando" />
        ) : (
          <CardList
            cartoes={favoritos}
            search=""
            filtros={[]}
            tipo="favoritos"
            onRefresh={refreshHandler}
          />
        )}
      </div>
    </>
  );
}
