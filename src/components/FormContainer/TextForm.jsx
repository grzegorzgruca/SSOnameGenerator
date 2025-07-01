import Button from "../Button";

export default function TextForm({ inputVal, setInputVal, isLoading }) {
    return (<div className="flex flex-col items-center mt-4">
        <div className="text-center">
            <label className="text-center text-lg font-medium text-gray-700 text-center"  htmlFor="wishText">✨ Masz jakieś dodatkowe uwagi? Wpisz je poniżej! ✨</label>
        </div>
        <input 
            value={inputVal} 
            onChange={(e) => setInputVal(e.target.value)} 
            className="
                w-96 mx-auto my-4 px-4 py-2 rounded-full border-2 border-transparent 
                bg-white/50 text-gray-800 placeholder-gray-500
                focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent
                transition-all duration-300
            " 
            id="wishText" 
            type="text" 
            placeholder="Np. dla białej maści"
        />
        <Button additionalStyle="w-45 mx-auto hover:bg-pink-400" type="submit" text={isLoading ? "Generating..." : "Submit"} disabled={isLoading} />
    </div>)
}
