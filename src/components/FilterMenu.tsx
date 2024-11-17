import { useState, useEffect, useRef } from "react";
import { CategoriaLabel } from "../model/categorias";

interface FilterMenuProps {
  filtros: string[];
  setFiltros: (filtros: string[]) => void;
}

export default function FilterMenu({ filtros, setFiltros }: FilterMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleFiltro = (categoria: string) => {
    if (filtros.includes(categoria)) {
      setFiltros(filtros.filter((f) => f !== categoria));
    } else {
      setFiltros([...filtros, categoria]);
    }
  };

  const removerFiltros = () => {
    setFiltros([]);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Filtrar
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 w-48 rounded border bg-white p-4 shadow">
          {Object.entries(CategoriaLabel).map(([key, label]) => (
            <div key={key} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={`filter-${key}`}
                checked={filtros.includes(key)}
                onChange={() => toggleFiltro(key)}
              />
              <label htmlFor={`filter-${key}`}>{label}</label>
            </div>
          ))}
          <button
            onClick={removerFiltros}
            className="mt-4 w-full rounded bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600"
          >
            Remover Filtros
          </button>
        </div>
      )}
    </div>
  );
}
