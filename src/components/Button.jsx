export default function Button(props) {
    return (
        <>
            <button className="duration-400 ease-out bg-pink-200 hover:bg-pink-400 border hover:text-pink-200 border-pink-500 rounded-2xl py-1 px-3 text-pink-600">{props.text}</button>
        </>)
}