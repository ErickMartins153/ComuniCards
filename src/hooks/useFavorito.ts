import { useState } from "react";
import { favoritarCartao } from "../util/requests";

export default function useFavorito(
  cartaoId: string,
  usuarioId: string,
  favorito: boolean,
) {
  const [isFavorited, setIsFavorited] = useState(favorito);

  const toggleFavorito = async () => {
    try {
      await favoritarCartao(cartaoId, usuarioId);
      setIsFavorited((prev) => !prev);
    } catch (error) {
      console.error("Erro ao favoritar cartão:", error);
      alert("Não foi possível favoritar o cartão.");
    }
  };

  return { isFavorited, toggleFavorito };
}
