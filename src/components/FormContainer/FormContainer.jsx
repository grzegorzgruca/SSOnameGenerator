import DefaultButtons from "./DefaultButtons"
import TextForm from "./TextForm"
import SelectCategory from './SelectCategory'
import { useState } from "react"
import ResponseContainer from "./ResponseContainer"

// test
import askGemini from '../../services/gemini'
import GetNames from "../../data/getNames"

export default function FormCointainer() {
    const [style, setStyle] = useState({ id: 999, isActive: false })
    const [defaultStyle, setDefaultStyle] = useState({ id: 999, isActive: true })
    const [question, setQuestion] = useState("")
    const [data, setData] = useState({})

    function handleForm(e) {
        e.preventDefault();
        if (!style.isActive) {
            alert("Wybierz prefix.")
            return
        }
        if (!question) {
            alert("Zanim wygenerujesz imiona wpisz coś w pole tekstowe.")
            return
        }
        console.log(defaultStyle);
        askGemini(question, style, defaultStyle).then(e => setData(e))
    }
    
    return (<>
        <form className="flex flex-col gap-2" onSubmit={handleForm}>
            <SelectCategory style={style} setStyle={setStyle} />
            <DefaultButtons style={defaultStyle} setStyle={setDefaultStyle} />
            <TextForm inputVal={question} setInputVal={setQuestion} style={style} />
            <ResponseContainer data={data} />
        </form>
    </>)
}
