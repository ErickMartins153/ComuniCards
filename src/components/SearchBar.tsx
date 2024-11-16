import { ChangeEvent } from "react";

export function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 input-group">
        <input
          type="text"
          className="form-control h-10 max-w-md rounded-md border border-black bg-[#EEF8FF] p-2 text-xl"
          placeholder="Pesquisar por..."
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onSearch(e.target.value)
          }
        />
      </div>
    </div>
  );
}
