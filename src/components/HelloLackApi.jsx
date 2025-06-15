import { useState } from 'react';
import { setApiKeyCookie } from '../utilis/cookies';

export default function HelloLackApi() {
    const [apiKeyInput, setApiKeyInput] = useState('');

    const handleInputChange = (event) => {
        setApiKeyInput(event.target.value);
    };

    const handleSubmit = () => {
        if (apiKeyInput.trim() !== '') {
            setApiKeyCookie(apiKeyInput);
            // Odśwież stronę, aby App.jsx mógł ponownie sprawdzić cookie
            window.location.reload();
        } else {
            alert("Proszę wpisać klucz API.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-pink-100">
            <h1 className="text-3xl text-pink-500">Wpisz swój klucz API (Tylko raz!!!)</h1>
            <p className="text-pink-400 mt-2">Just spytaj Grzesia to ci da jest potrzebny do działania strony</p>
            <input
                type="text"
                value={apiKeyInput}
                onChange={handleInputChange}
                placeholder="Wpisz tutaj swój klucz API"
                className="mt-4 p-2 border border-pink-300 rounded-md w-1/3 focus:ring-pink-500 focus:border-pink-500"
            />
            <button
                onClick={handleSubmit}
                className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
            >
                Zapisz klucz API
            </button>
        </div>
    );
}