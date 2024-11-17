import loogo from "../assets/logo.png";
import RegisterBanner from "../components/register/RegisterBanner";
import RegisterBox from "../components/register/RegisterBox";

export default function Register() {
    return (
            <div className="h-screen w-screen bg-[#9fe0ea] flex flex-col items-center justify-center ">
                <img src={loogo} className="mb-10"/>
                <div className="flex flex-row  justify-center shadow-2xl">
                <RegisterBox />
                <RegisterBanner />
                </div>

            </div>
    );
}