import Button from "../button";

export default function TextForm(props) {
    return (<div className="flex flex-col items-center mt-4">
        <div>
            <label className="text-center text-2xl text-pink-300 mt-4" htmlFor="wishText">Type what mood you want to create set of beatiful names!</label>
        </div>
        <input value={props.inputVal} onChange={(e) => props.setInputVal(e.target.value)} className="w-96 mx-auto text-pink-300 my-4 border outline-pink-600 rounded-3xl indent-2 text-xl" id="wishText" type="text" placeholder="Eg. Daj cute imiona do czarnego konia"></input>
        <Button additionalStyle="w-30 mx-auto" type="submit" text="Submit" />
    </div>)
}