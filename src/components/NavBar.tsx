import { useState } from "react";
import { useNavigate } from "react-router-dom";
import barraIcon from "../assets/options.svg";
import perfilIcon from "../assets/perfilIcon.svg";
import { useAuth } from "../hooks/useAuth";

export function NavBar() {
  const { deslogar } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  function goTo(path: string) {
    toggleSidebar();
    navigate(path);
  }

  return (
    <>
      <nav className="sticky top-0 z-20 flex items-center justify-between border-b-2 border-gray-300 bg-[#B1D8FF] px-10 pt-2 shadow-xl">
        <div className="flex items-center gap-5">
          <button onClick={toggleSidebar}>
            <img src={barraIcon} alt="Menu" className="w-8 h-8" />
          </button>
          <h1 className="text-4xl">ComuniCards</h1>
        </div>
        <div>
          <img src={perfilIcon} alt="Perfil" className="w-8 h-8" />
        </div>
      </nav>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`fixed left-0 top-0 z-50 h-full w-64 transform bg-white shadow-lg ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6">
          <h2 className="mb-4 text-2xl font-semibold">Menu</h2>
          <ul className="space-y-4">
            <li>
              <button onClick={goTo.bind(null, "/")} className="text-lg">
                Página inicial
              </button>
            </li>
            <li>
              <button onClick={goTo.bind(null, "/create")} className="text-lg">
                Criar Novo Cartão
              </button>
            </li>
            <li>
              <button
                onClick={goTo.bind(null, "/favorites")}
                className="text-lg"
              >
                Ver Favoritos
              </button>
            </li>
            <li>
              <button onClick={deslogar} className="text-lg text-red-500">
                Deslogar
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
