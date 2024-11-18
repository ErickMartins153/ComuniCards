import { useCallback, useEffect, useState } from "react";
import { Cartao } from "../model/Cartao";
import {
  getCartoes,
  deleteCartaoById,
  getFavoritos,
  favoritarCartao,
} from "../util/requests";
import { useAuth } from "./useAuth";

export default function useCartoes(
  tipo: "todos" | "favoritos",
  favorito?: boolean,
) {
  const { usuario } = useAuth();
  const [cartoes, setCartoes] = useState<Cartao[]>([]);
  const [isFavorito, setIsFavorito] = useState(favorito || false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCartoes = useCallback(async () => {
    try {
      setIsLoading(true);
      if (tipo === "todos") {
        const fetchedCartoes = await getCartoes(usuario!.id);
        setCartoes(fetchedCartoes);
      } else {
        const fetchedCartoes = await getFavoritos(usuario!.id);
        setCartoes(fetchedCartoes);
      }
    } catch (error) {
      console.error("Erro ao buscar cartões:", error);
    } finally {
      setIsLoading(false);
    }
  }, [tipo, usuario]);

  useEffect(() => {
    fetchCartoes();
  }, [fetchCartoes]);

  async function deleteCartao(cartaoId: string, usuarioId: string) {
    try {
      setIsLoading(true);
      await deleteCartaoById(cartaoId, usuarioId);
      setCartoes((prevCartoes) =>
        prevCartoes.filter((cartao) => cartao.id !== cartaoId),
      );
      window.location.reload();
    } catch (error) {
      console.error("Erro ao deletar cartão:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function toggleFavorito(cartaoId: string, usuarioId: string) {
    try {
      setIsLoading(true);
      await favoritarCartao(cartaoId, usuarioId);
      setCartoes((prevCartoes) =>
        prevCartoes.filter((cartao) => cartao.id !== cartaoId),
      );
      setIsFavorito((prev) => !prev);
    } catch (error) {
      console.error("Erro ao favoritar cartão:", error);
      alert("Não foi possível favoritar o cartão.");
    } finally {
      setIsLoading(false);
    }
  }

  return {
    cartoes,
    isLoading,
    deleteCartao,
    toggleFavorito,
    fetchCartoes,
    isFavorito,
  };
}
