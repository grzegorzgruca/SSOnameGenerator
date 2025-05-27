export default function TextForm(props) {
    return (<div className="flex flex-col ">
        <label htmlFor="wishText">Type what mood you want to create set of beatiful names!</label>
        <input id="wishText" type="text" placeholder="Eg. Cute"></input>
    </div>)
}