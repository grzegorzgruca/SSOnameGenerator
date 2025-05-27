import DefaultButtons from "./DefaultButtons"
import TextForm from "./TextForm"
import SelectCategory from './SelectCategory'

// test
import askGemini from '../../services/gemini'
import GetNames from "../../data/getNames"

export default function FormCointainer() {
    return (<>
        <form className="flex flex-col w-[65rem]" action={handleForm}>
            <DefaultButtons />
            <SelectCategory />
            <TextForm />
        </form>
    </>)
}
function handleForm(args) {
    console.log("handled!");
    askGemini().then(e => console.log(e))
    console.log(GetNames());
}