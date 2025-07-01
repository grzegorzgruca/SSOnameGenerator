import TextForm from "./TextForm"
import SelectCategory from './SelectCategory'
import { useState } from "react"
import ResponseContainer from "./ResponseContainer"

// test
import askGemini from '../../services/gemini'

export default function FormCointainer() {
    const [selectedPrefix, setSelectedPrefix] = useState(null);
    const [selectedMood, setSelectedMood] = useState(null);
    const [question, setQuestion] = useState("");
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    function handleForm(e) {
        e.preventDefault();
        if (!selectedPrefix) {
            alert("Wybierz prefix.");
            return;
        }
        if (!selectedMood) {
            alert("Wybierz nastrój (mood).");
            return;
        }
        if (!question) {
            alert("Zanim wygenerujesz imiona wpisz coś w pole tekstowe.");
            return;
        }
        setIsLoading(true);
        askGemini(question, selectedPrefix, selectedMood).then(e => {
            setData(e);
            setIsLoading(false);
        });
    }
    
    return (
        <form className="flex flex-col gap-4" onSubmit={handleForm}>
            <SelectCategory 
                selectedPrefix={selectedPrefix} 
                onSelectPrefix={setSelectedPrefix} 
                selectedMood={selectedMood} 
                onSelectMood={setSelectedMood} 
            />
            <TextForm inputVal={question} setInputVal={setQuestion} isLoading={isLoading} />
            <ResponseContainer data={data} />
        </form>
    );
}
