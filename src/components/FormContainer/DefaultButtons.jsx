import Button from "../Button"
import TextHeader from "../TextHeader"

export default function DefaultButtons(props) {
    return (
        <div className="flex flex-col items-center">
            <TextHeader text="✨Opcjonalnie: wybierz sugerowany styl✨" />
            <div className="gap-2 flex">
                <Button id={0} style={props.style} onClick={() => props.setStyle({ id: 0, isActive: true })} text="Zabawne" />
                <Button id={1} style={props.style} onClick={() => props.setStyle({ id: 1, isActive: true })} text="Słodkie" />
                <Button id={2} style={props.style} onClick={() => props.setStyle({ id: 2, isActive: true })} text="Pieszczoliwe" />
                <Button id={3} style={props.style} onClick={() => props.setStyle({ id: 3, isActive: true })} text="Poważna Sigma" />
            </div>
        </div>)
}
