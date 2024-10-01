import perfilIcon from '../assets/perfilIcon.svg';
import favoriteIcon from '../assets/favoriteIcon.svg';

interface CardProps {
    titulo: string;
    urlAudio: string;
    urlImagem: string;
}

export function Card() {
    return (
        <div className="rounded-md w-[200px] border-2 border-black text-center bg-slate-600 space-y-3 ">
            <img src={favoriteIcon}/>
            <div className='flex flex-col items-center border-b-2 border-black'>
            <img src={perfilIcon} className='size-36'/>
            <p>Nome do card</p>
            </div>
            <button className="btn btn-primary w-16 border border-black rounded-md bg-[#EEF8FF] size-10" type="button">Ouvir</button>
        </div>  
    );
}