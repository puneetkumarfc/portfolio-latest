import InputField from "../components/InputField";
import LoginButton from "../components/Button";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center gap-y-4">
            <h3 className="text-3xl font-semibold text-gray-800 mb-2">
                Welcome Back
            </h3>
            <h1 className="text-base text-gray-600">
                Don’t have an account?{" "}
                <span onClick={() => navigate("/register")} className="font-bold text-blue-600 cursor-pointer hover:underline">
                        Sign Up
                </span>
            </h1>
            <InputField type="text" placeholder="Email address" />
            <InputField type="password" placeholder="Password" />
            <LoginButton onClick={() => navigate("/home")} >Login</LoginButton>
        </div>
    );
}

export default LoginPage;