import InputField from "../components/InputField";  
import LoginButton from "../components/Button";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center gap-y-4">
            <h3 className="text-3xl font-semibold text-gray-800 mb-2">
                Register
            </h3>
            <h1 className="text-base text-gray-600">
                Already have an account?{" "}
                <span onClick={() => navigate("/login")} className="font-bold text-blue-600 cursor-pointer hover:underline">
                    Sign In
                </span>
            </h1>
            <InputField type="text" placeholder="Name" />
            <InputField type="email" placeholder="Email address" />
            <InputField type="password" placeholder="Password" />
            <InputField type="password" placeholder="Confirm Password" />
            <LoginButton onClick={() => navigate("/home")} >Register</LoginButton>
        </div>
    );
}

export default RegisterPage;