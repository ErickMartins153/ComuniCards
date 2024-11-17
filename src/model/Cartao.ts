export interface Cartao {
  id: string;
  titulo: string;
  categoria?: string;
  frase: string;
  urlImagem?: string;
  isBase: boolean;
  criadorId: string;
  isFavorito: boolean;
}
