import Button from "../button";

export default function TextForm(props) {
    return (<div className="flex flex-col items-center mt-4">
        <div>
            <p className="text-center text-2xl text-pink-300 mt-4">✨Masz jakieś dodatkowe uwagi? Wpisz je poniżej!✨</p>
        </div>
        <input value={props.inputVal} onChange={(e) => props.setInputVal(e.target.value)} className="w-3/5 mx-auto text-pink-300 my-4 border outline-pink-600 rounded-3xl indent-2 text-xl" id="wishText" type="text" placeholder="Np. dla białej maści"></input>
        <Button additionalStyle="w-30 mx-auto hover:bg-pink-400" type="submit" text="Submit" />
    </div>)
}