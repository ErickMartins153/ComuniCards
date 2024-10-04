const BASE_URL = "http://localhost:8081/api";

export async function getAudio(texto: string) {
  const url = `${BASE_URL}/audios/${encodeURIComponent(texto)}`;
  const response = await fetch(url);
  const audioBlob = await response.blob();
  console.log(URL.createObjectURL(audioBlob));

  return URL.createObjectURL(audioBlob);
}
