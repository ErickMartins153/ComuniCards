import { useState } from "react";
import CardList from "../components/card/CardList";
import { NavBar } from "../components/NavBar";
import { SearchBar } from "../components/SearchBar";
import FilterMenu from "../components/FilterMenu";
import useCartoes from "../hooks/useCartoes";
import Loading from "../components/Loading";

export default function Home() {
  const { cartoes, isLoading } = useCartoes("todos");
  const [search, setSearch] = useState("");
  const [filtros, setFiltros] = useState<string[]>([]);

  function filtrosHandler(novosFiltros: string[]) {
    setFiltros(novosFiltros);
  }

  return (
    <div className="flex flex-col gap-5 bg-[#EEF8FF]">
      <NavBar />
      <div className="flex mx-auto my-5 text-4xl">
        <h1>Bem vindo ao ComuniCards</h1>
      </div>
      <div className="mx-20 flex flex-col gap-5 rounded bg-[#B1D8FF] p-12">
        <div className="flex flex-row items-center gap-2">
          <SearchBar onSearch={setSearch} />
          <FilterMenu filtros={filtros} setFiltros={filtrosHandler} />
        </div>
        {isLoading ? (
          <Loading texto="Carregando" />
        ) : (
          <CardList
            cartoes={cartoes}
            search={search}
            filtros={filtros}
            tipo="todos"
            onRefresh={() => {}}
          />
        )}
      </div>
    </div>
  );
}
