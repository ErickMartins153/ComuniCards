import banner from '../../assets/autismo.png';

export default function RegisterBanner() {
    return (
        <div className="bg-white flex flex-col items-center justify-between rounded-r-xl py-8 px-4 w-[60%] h-[400px] bg-cover bg-center text-white font-sour-gummy">
            <label className="text-[#29C5FD] text-center text-2xl font-bold font-roboto leading-normal ">Seja bem vindo ao Comunicards</label>
            <div>
            <img src={banner} width={"250px"} />
            
            </div>
            
            <label className="text-[#29C5FD] text-center text-2xl font-bold font-roboto leading-normal ">Facilitando a Comunicação Para Quem Precisa...</label>
        </div>
    );
}