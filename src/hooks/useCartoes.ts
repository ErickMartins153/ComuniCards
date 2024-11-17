import { useEffect, useState } from "react";
import { Cartao } from "../model/Cartao";
import { getCartoes, deleteCartaoById } from "../util/requests";

export default function useCartoes() {
  const [cartoes, setCartoes] = useState<Cartao[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCartoes() {
      try {
        setIsLoading(true);
        const fetchedCartoes = await getCartoes();
        setCartoes(fetchedCartoes);
      } catch (error) {
        console.error("Erro ao buscar cartões:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCartoes();
  }, []);

  async function deleteCartao(cartaoId: string, usuarioId: string) {
    try {
      await deleteCartaoById(cartaoId, usuarioId);
      setCartoes((prevCartoes) =>
        prevCartoes.filter((cartao) => cartao.id !== cartaoId),
      );
    } catch (error) {
      console.error("Erro ao deletar cartão:", error);
    }
  }

  return { cartoes, isLoading, deleteCartao };
}
