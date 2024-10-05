import { Cartao } from "./cartoes";

const BASE_URL = "http://localhost:8081/api";

export async function getAudio(audioId: string) {
  const url = `${BASE_URL}/audios/${audioId}`;
  const response = await fetch(url);
  const audioBlob = await response.blob();

  return URL.createObjectURL(audioBlob);
}

export async function getCartoes() {
  const url = `${BASE_URL}/cartoes/all`;
  const response = await fetch(url);
  const data = (await response.json()) as Cartao[];
  return data || [];
}
