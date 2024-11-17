export default interface Usuario {
  id: string;
  nome: string;
  email: string;
  senha: string;
  foto: string;
}

export interface Credentials {
  email: string;
  senha: string;
}
