export enum Categoria {
  EMOCAO = "EMOCAO",
  NECESSIDADE = "NECESSIDADE",
  INTERACAO_SOCIAL = "INTERACAO_SOCIAL",
  ATIVIDADE_DIARIA = "ATIVIDADE_DIARIA",
  SITUACAO_ESPECIFICA = "SITUACAO_ESPECIFICA",
}

export const CategoriaLabel: { [key in Categoria]: string } = {
  [Categoria.EMOCAO]: "Emoção",
  [Categoria.NECESSIDADE]: "Necessidade",
  [Categoria.INTERACAO_SOCIAL]: "Interação Social",
  [Categoria.ATIVIDADE_DIARIA]: "Atividade Diária",
  [Categoria.SITUACAO_ESPECIFICA]: "Situação Específica",
};
