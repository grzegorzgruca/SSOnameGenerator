import DefaultButtons from "./DefaultButtons"
import TextForm from "./TextForm"
import SelectCategory from './SelectCategory'

export default function FormCointainer() {
    return (<>
        <form action={handleForm}>
            <DefaultButtons />
            <SelectCategory />
            <TextForm />
        </form>
    </>)
}
function handleForm(args) {
    console.log("handled!");

}