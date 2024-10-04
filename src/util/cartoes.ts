export interface Cartao {
  id: string;
  titulo: string;
  categoria?: string;
  frase: string;
  urlImagem?: string;
}

export const cartoes: Cartao[] = [
  { id: "1", titulo: "felicidade", frase: "Estou me sentindo feliz!" },
  { id: "2", titulo: "tristeza", frase: "Estou me sentindo triste." },
  { id: "3", titulo: "fome", frase: "Estou com fome." },
  { id: "4", titulo: "sede", frase: "Estou com sede." },
  { id: "5", titulo: "raiva", frase: "Estou com raiva." },
];
