import { useState } from "react";
import perfilIcon from "../../assets/perfilIcon.svg";
import favoriteIcon from "../../assets/favoriteIcon.svg";
import favoriteIconYellow from "../../assets/favoriteIconYellow.svg";
import { type Cartao } from "../../util/cartoes";
import { useAudio } from "../../hooks/useAudio";

export function CardItem({ titulo, urlImagem: imagemURL, id }: Cartao) {
  const { playAudio } = useAudio();

  const [isFavorited, setIsFavorited] = useState(false);
  const favorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="w-[200px] rounded-md border-2 border-black bg-[#EEF8FF] text-center">
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
