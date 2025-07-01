import { useState } from 'react';
import { setApiKeyCookie } from '../utilis/cookies';
import Button from './Button'; // Import nowego przycisku

export default function HelloLackApi() {
    const [apiKeyInput, setApiKeyInput] = useState('');

    const handleInputChange = (event) => {
        setApiKeyInput(event.target.value);
    };

    const handleSubmit = () => {
        if (apiKeyInput.trim() !== '') {
            setApiKeyCookie(apiKeyInput);
            window.location.reload();
        } else {
            alert("Proszę wpisać klucz API.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className='w-1/2 mx-auto p-12 text-center'>
                <h1 className="text-3xl font-bold text-gray-800">Wpisz swój klucz API (Tylko raz!!!)</h1>
                <p className="text-gray-600 mt-2">Spytaj Grzesia o klucz potrzebny do działania strony</p>
                <input
                    type="text"
                    value={apiKeyInput}
                    onChange={handleInputChange}
                    placeholder="Wpisz tutaj swój klucz API"
                    className="
                        mt-6 w-full max-w-md px-4 py-2 rounded-full border-2 border-transparent 
                        bg-white/50 text-gray-800 placeholder-gray-500
                        focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent
                        transition-all duration-300
                    "
                />
                <div className="mt-6">
                    <Button
                        onClick={handleSubmit}
                        text="Zapisz klucz API"
                    />
                </div>
            </div>
        </div>
    );
}
