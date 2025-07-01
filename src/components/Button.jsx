export default function Button(props) {
    const type = props.type ?? "button";
    const style = props.style ?? { id: null, name: null };

    return (
        <>
            <button
                type={type}
                onClick={props.onClick}
                disabled={props.disabled}
                className={`duration-400 ease-out hover:bg-pink-400 border hover:text-pink-200 border-pink-500 rounded-2xl py-1 px-3 
                ${props.additionalStyle}
                ${props.id === style.id ? "bg-pink-600 text-pink-200" : "bg-pink-200 text-pink-600"}
                ${props.disabled ? "bg-gray-400 cursor-not-allowed" : ""}`}>
                {props.text}
            </button>
        </>)
}
