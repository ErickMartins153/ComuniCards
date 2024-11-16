import NavBarLogin from "../components/NavBarLogin";
import RegisterBanner from "../components/register/RegisterBanner";
import RegisterBox from "../components/register/RegisterBox";

export default function Register() {
    return (
        <div className="h-screen">
        <div>
            <NavBarLogin />
        </div>
        <div className="flex items-center justify-center h-screen bg-[#EEF8FF] shadow-[0_10px_50px_rgba(0,0,0,0.25)]">
            <RegisterBox />
            <RegisterBanner />

        </div>
        </div>
    );
}