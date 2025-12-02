function InputField(props){
    return (
        <input type={props.type} placeholder={props.placeholder} className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 border border-gray-300 rounded-lg bg-transparent focus:outline-none" />
    );
}

export default InputField;