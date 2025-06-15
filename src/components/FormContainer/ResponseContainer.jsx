export default function ResponseContainer (props) {
    const data = props.data
    const hasData = data && Array.isArray(data) && data.length > 0;

    return (
     <div className="flex flex-col items-center justify-center mt-4">
        {hasData ? (
            <ul className="bg-pink-100 p-4 rounded-lg flex flex-wrap items-center justify-center gap-8 list-none">
                {data.map((item, index) => (
                    <li key={index} className="text-pink-700 text-lg">{item.Name}</li>
                ))}
            </ul>
        ) : null}
     </div>
    )
}