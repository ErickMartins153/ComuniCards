import CardList from "../components/card/CardList";
import { NavBar } from "../components/NavBar";
import { SearchBar } from "../components/SearchBar";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 bg-[#EEF8FF]">
      <NavBar />
      <div className="flex mx-auto my-5 text-4xl">
        <h1>Bem vindo ao ComuniCards</h1>
      </div>
      <div className="mx-20 flex max-w-full flex-col gap-5 rounded bg-[#B1D8FF] p-12">
        <div>
          <SearchBar />
        </div>
        <CardList />
      </div>
    </div>
  );
}
