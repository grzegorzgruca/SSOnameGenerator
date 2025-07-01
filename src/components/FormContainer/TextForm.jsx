import Button from "../Button";

export default function TextForm({ inputVal, setInputVal, isLoading }) {
    return (<div className="flex flex-col items-center mt-4">
        <div>
            <label className="text-center text-1xl text-pink-300 mt-4" htmlFor="wishText">✨Masz jakieś dodatkowe uwagi? Wpisz je poniżej!✨</label>
        </div>
        <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} className="w-96 mx-auto text-pink-300 my-4 border outline-pink-600 rounded-3xl indent-2 text-xl" id="wishText" type="text" placeholder="Np. dla białej maści"></input>
        <Button additionalStyle="w-30 mx-auto hover:bg-pink-400" type="submit" text={isLoading ? "Generating..." : "Submit"} disabled={isLoading} />
    </div>)
}
