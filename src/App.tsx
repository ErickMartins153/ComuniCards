import "./App.css";
import { Card } from "./components/Card";
import { NavBar } from "./components/NavBar";
import { SearchBar } from "./components/SearchBar";
import { AudioContextProvider } from "./context/AudioContext";
import { cartoes } from "./util/cartoes";

function App() {
  return (
    <AudioContextProvider>
      <div className="flex flex-col gap-5 bg-[#EEF8FF]">
        <NavBar />
        <div className="flex mx-auto my-5 text-4xl">
          <h1>Bem vindo ao ComuniCards</h1>
        </div>
        <div className="mx-20 flex max-w-full flex-col gap-5 rounded bg-[#B1D8FF] p-12">
          <div>
            <SearchBar />
          </div>
          <div className="mt-5 grid auto-rows-[280px] grid-cols-5 gap-16">
            {cartoes.map((cartao) => (
              <Card {...cartao} key={cartao.id} />
            ))}
          </div>
        </div>
      </div>
    </AudioContextProvider>
  );
}

export default App;
