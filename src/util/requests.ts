import { Cartao } from "../model/Cartao";

const BASE_URL = "http://localhost:8081/api";

export async function getAudio(audioId: string) {
  const url = `${BASE_URL}/audios/${audioId}`;
  const response = await fetch(url);
  const audioBlob = await response.blob();

  return URL.createObjectURL(audioBlob);
}

export async function getCartoes() {
  const url = `${BASE_URL}/cartoes`;
  const response = await fetch(url);
  const data = (await response.json()) as Cartao[];
  return data || [];
}

export async function createCartao(cartao: Cartao) {
  const url = `${BASE_URL}/cartoes`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartao),
  });

  if (!response.ok) {
    throw new Error(`Erro ao criar cartão: ${response.statusText}`);
  }
}

export async function deleteCartaoById(id: string, usuarioId: string) {
  const url = `${BASE_URL}/cartoes/${id}`;

  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Usuario-Id": usuarioId,
    },
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`Erro ao deletar cartão: ${errorMessage}`);
  }
}
