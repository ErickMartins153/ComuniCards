import banner from "../../assets/autismo.png";

export default function RegisterBanner() {
  return (
    <div className="flex h-[400px] w-[60%] flex-col items-center justify-between rounded-r-xl bg-white bg-cover bg-center px-4 py-8 font-sour-gummy text-white">
      <label className="font-roboto text-center text-2xl font-bold leading-normal text-[#29C5FD]">
        Seja bem vindo ao Comunicards
      </label>
      <div>
        <img src={banner} width={"250px"} />
      </div>

      <label className="font-roboto text-center text-2xl font-bold leading-normal text-[#29C5FD]">
        Facilitando a Comunicação Para Quem Precisa...
      </label>
    </div>
  );
}
