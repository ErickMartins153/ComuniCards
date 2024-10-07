import { ChangeEvent } from "react";

export function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  return (
    <div className="w-full">
      <div className="input-group flex gap-2 items-center">
        <input
          type="text"
          className="form-control max-w-md h-10 text-xl rounded-md border border-black p-2 bg-[#EEF8FF]"
          placeholder="Pesquisar por..."
          onChange={(e: ChangeEvent<HTMLInputElement>) => onSearch(e.target.value)}
        />
        <button
          className="btn btn-primary px-4 h-10 border border-black rounded-md bg-[#EEF8FF]"
          type="button"
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}
