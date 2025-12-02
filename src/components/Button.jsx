function LoginButton({ children, onClick, type = "button", variant = "primary", disabled = false }) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`block max-w-xs cursor-pointer w-full px-4 py-2 text-sm font-medium text-white rounded-lg focus:outline-none ${
                variant === "primary"
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-600 hover:bg-gray-700"
            }`}
        >
            {children}
        </button>
    );
}

export default LoginButton;