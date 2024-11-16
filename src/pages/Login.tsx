import LoginBox from "../components/login/LoginBox";
import NavBarLogin from "../components/NavBarLogin";
 
export default function Login() {
    return (
        <div className="bg-[#EEF8FF]">
            <NavBarLogin />
            <div className="flex items-center justify-center h-screen">
                <LoginBox />
            </div>
        </div>

    );
}