export function SearchBar() {
    return (
        <div className="">
            <div className="input-group flex gap-10 ">
                <input type="text" className="form-control w-80 h-10 text-xl rounded-md border border-black p-2 bg-[#EEF8FF]" placeholder="Pesquisar por..." />
                <button className="btn btn-primary w-16 border border-black rounded-md bg-[#EEF8FF]" type="button">Filtrar</button>
            </div>
        </div>
    );
}