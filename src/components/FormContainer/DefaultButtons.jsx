import Button from "../button"
import TextHeader from "../TextHeader"

export default function DefaultButtons(props) {
    return (
        <div className="flex flex-col items-center">
            <TextHeader text="Choice your mood or type somenthing..." />
            <div className="gap-2 flex">
                <Button style={props.style} setStyle={props.setStyle} text="Funny" />
                <Button style={props.style} setStyle={props.setStyle} text="Cute" />
                <Button style={props.style} setStyle={props.setStyle} text="Suprising" />
                <Button style={props.style} setStyle={props.setStyle} text="For white-coat horses" />
            </div>
        </div>)
}