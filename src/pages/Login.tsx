import LoginBox from "../components/login/LoginBox";
import logo from "../assets/logo.png";
 
export default function Login() {
    return (
        <div className="bg-[#9fe0ea]">
            <div className="flex flex-col items-center justify-center h-screen">
                <img src={logo} className="mb-16" />
                <LoginBox />
            </div>
        </div>

    );
}