import Button from "../button"
import TextHeader from "../TextHeader"

export default function SelectCategory(props) {
    return (<div className="flex flex-col items-center">
        <TextHeader text="⚙️Wybierz prefix imienia⚙️" />
        <div className="flex gap-2">
            <Button style={props.style} id={0} onClick={() => props.setStyle({ id: 0, isActive: true })} text="Domyślny" />
            <Button style={props.style} id={1} onClick={() => props.setStyle({ id: 1, isActive: true })} text="Old prefix" />
        </div>
    </div>)
}