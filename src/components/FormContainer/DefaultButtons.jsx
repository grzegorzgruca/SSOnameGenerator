import Button from "../Button"
import TextHeader from "../TextHeader"

export default function DefaultButtons({ selected, onSelect }) {
    const moods = [
        { id: 0, name: "Słodki" },
        { id: 1, name: "Zabawny" },
        { id: 2, name: "Poważny" }
    ];

    return (
        <div className="flex flex-col items-center">
            <TextHeader text="✨ Wybierz nastrój (mood) ✨" />
            <div className="flex flex-wrap justify-center gap-2">
                {moods.map(mood => (
                    <Button 
                        key={mood.id}
                        id={mood.id}
                        isSelected={selected?.id === mood.id}
                        onClick={() => onSelect(mood)} 
                        text={mood.name} 
                    />
                ))}
            </div>
        </div>
    );
}
