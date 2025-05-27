import Button from "../button"
import TextHeader from "../TextHeader"

export default function SelectCategory() {
    return (<div className="flex flex-col items-center">
        <TextHeader text="Select name style convention" />
        <div className="flex gap-2">
            <Button text="Default" />
            <Button text="Old prefix" />
        </div>
    </div>)
}