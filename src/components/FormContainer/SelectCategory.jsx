import Button from "../Button"
import TextHeader from "../TextHeader"

export default function SelectCategory({ selectedPrefix, onSelectPrefix, selectedMood, onSelectMood }) {
    const prefixes = [
        { id: 0, name: "Domyślny" },
        { id: 1, name: "Old prefix" }
    ];

    const moods = [
        { id: 0, name: "Słodki" },
        { id: 1, name: "Zabawny" },
        { id: 2, name: "Poważny" }
    ];

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center">
                <TextHeader text="⚙️ Wybierz prefix imienia ⚙️" />
                <div className="flex gap-2">
                    {prefixes.map(prefix => (
                        <Button 
                            key={prefix.id}
                            id={prefix.id}
                            isSelected={selectedPrefix?.id === prefix.id}
                            onClick={() => onSelectPrefix(prefix)} 
                            text={prefix.name} 
                        />
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-center">
                <TextHeader text="✨ Wybierz nastrój ✨" />
                <div className="flex gap-2">
                    {moods.map(mood => (
                        <Button 
                            key={mood.id}
                            id={mood.id}
                            isSelected={selectedMood?.id === mood.id}
                            onClick={() => onSelectMood(mood)} 
                            text={mood.name} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
