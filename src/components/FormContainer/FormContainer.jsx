import DefaultButtons from "./DefaultButtons"
import TextForm from "./TextForm"
import SelectCategory from './SelectCategory'
import { useState } from "react"

// test
import askGemini from '../../services/gemini'
import GetNames from "../../data/getNames"

export default function FormCointainer() {
    const [style, setStyle] = useState({ id: 999, isActive: false })
    const [question, setQuestion] = useState("")

    function handleForm(e) {
        e.preventDefault();
        if (!style.isActive) {
            alert("Select name style MIŚKU")
            return
        }
        if (!question) {
            alert("Zanim wygenerujesz imiona wpisz coś w pole tekstowe.")
            return
        }
        console.log("handled!");
        askGemini().then(e => console.log(e))
        console.log(GetNames());
    }

    return (<>
        <form className="flex flex-col gap-2" onSubmit={handleForm}>
            <SelectCategory style={style} setStyle={setStyle} />
            <DefaultButtons style={style} setStyle={setStyle} />
            <TextForm inputVal={question} setInputVal={setQuestion} style={style} />
        </form>
    </>)
}
