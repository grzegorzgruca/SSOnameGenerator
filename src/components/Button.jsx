export default function Button(props) {
    const type = props.type ?? "button";

    return (
        <>
            <button
                type={type}
                onClick={props.onClick}
                disabled={props.disabled}
                className={`
                    px-6 py-2 font-semibold text-white rounded-full shadow-md
                    bg-gradient-to-r from-pink-400 to-purple-400 
                    hover:from-pink-500 hover:to-purple-500
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
                    transition-all duration-300 ease-in-out
                    transform hover:scale-105
                    ${props.additionalStyle}
                    ${props.isSelected ? "ring-2 ring-white bg-gradient-to-r from-pink-500 to-purple-500 scale-105" : ""}
                    ${props.disabled ? "bg-gray-400 cursor-not-allowed opacity-50" : ""}
                `}>
                {props.text}
            </button>
        </>)
}
