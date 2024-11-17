import { Cartao } from "../model/Cartao";

const BASE_URL = "http://localhost:8081/api";

export async function getAudio(audioId: string) {
  const url = `${BASE_URL}/audios/${audioId}`;
  const response = await fetch(url);
  const audioBlob = await response.blob();

  return URL.createObjectURL(audioBlob);
}

export async function getCartoes(usuarioId: string) {
  const url = `${BASE_URL}/cartoes`;
  const response = await fetch(url, {
    headers: {
      "Usuario-Id": usuarioId,
    },
  });
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

export async function favoritarCartao(cartaoId: string, usuarioId: string) {
  const url = `${BASE_URL}/cartoes/${cartaoId}/favoritar`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Usuario-Id": usuarioId,
    },
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`Erro ao favoritar cartão: ${errorMessage}`);
  }
}

export async function getFavoritos(usuarioId: string) {
  const url = `${BASE_URL}/usuarios/${usuarioId}/favoritos`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`Erro ao obter cartões favoritos: ${errorMessage}`);
  }

  const data = (await response.json()) as Cartao[];
  return data || [];
}
