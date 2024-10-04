import barraIcon from "../assets/options.svg";
import perfilIcon from "../assets/perfilIcon.svg";

export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b-2 border-gray-300 bg-[#B1D8FF] px-10 pt-2 shadow-xl">
      <div className="flex items-center gap-5">
        <button>
          <img src={barraIcon} alt="Menu" className="size-16" />
        </button>
        <h1 className="text-4xl">CC</h1>
      </div>
      <div>
        <img src={perfilIcon} alt="Perfil" className="size-16" />
      </div>
    </nav>
  );
}
