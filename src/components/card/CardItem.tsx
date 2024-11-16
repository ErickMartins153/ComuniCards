import { useState } from "react";
import perfilIcon from "../../assets/perfilIcon.svg";
import favoriteIcon from "../../assets/favoriteIcon.svg";
import favoriteIconYellow from "../../assets/favoriteIconYellow.svg";
import { type Cartao } from "../../util/Cartao";
import { useAudio } from "../../hooks/useAudio";

interface CardItemProps extends Cartao {
  onDelete: (id: string) => void;
}

export function CardItem({
  titulo,
  urlImagem: imagemURL,
  id,
  base,
  onDelete,
}: CardItemProps) {
  const { playAudio } = useAudio();
  const [isFavorited, setIsFavorited] = useState(false);

  const favorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="relative w-[200px] rounded-md border-2 border-black bg-[#EEF8FF] text-center">
      {!base && (
        <button
          className="absolute text-red-500 right-2 top-2"
          onClick={() => onDelete(id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
      <button className="flex m-2" onClick={favorite}>
        <img
          src={isFavorited ? favoriteIconYellow : favoriteIcon}
          alt="Favoritar"
        />
      </button>
      <div className="flex flex-col items-center border-b-2 border-black">
        <img
          src={imagemURL !== "placeholder" ? imagemURL : perfilIcon}
          className="size-36"
          alt="Imagem do cartão"
        />
        <h2 className="text-2xl font-bold">{titulo}</h2>
      </div>
      <button
        className="btn btn-primary my-3 size-10 w-16 rounded-md border border-black bg-[#EEF8FF]"
        type="button"
        onClick={playAudio.bind(null, id)}
      >
        Ouvir
      </button>
    </div>
  );
}
