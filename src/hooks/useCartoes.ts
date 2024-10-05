import { useEffect, useState } from "react";
import { Cartao } from "../util/cartoes";
import { getCartoes } from "../util/requests";

export default function useCartoes() {
  const [cartoes, setCartoes] = useState<Cartao[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      getCartoes().then((fetchedCartoes) => setCartoes(fetchedCartoes));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { cartoes, isLoading };
}
