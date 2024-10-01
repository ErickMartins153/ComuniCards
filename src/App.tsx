import "./App.css";
import { Card } from "./components/Card";
import { NavBar } from "./components/NavBar";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <div className="flex flex-col gap-5 bg-[#EEF8FF]">
    <NavBar />
  <div className="flex text-4xl mx-auto my-5">
    <h1>Bem vindo ao ComuniCards</h1>
  </div>
  <div className="flex flex-col p-12 gap-5 bg-[#B1D8FF] max-w-full mx-20 rounded">
    <div>
      <SearchBar />
    </div>
    <div className="grid grid-cols-5 gap-16 auto-rows-[280px] mt-5">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
    </div>
  );
}

export default App;
