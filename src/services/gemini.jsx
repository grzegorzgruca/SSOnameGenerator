import { GoogleGenAI, Type } from "@google/genai";
import { getApiKeyCookie } from '../utilis/cookies.jsx';
import { SecondNames } from "../data/getNames.jsx";

export default async function askGemini(question, prefix, moodObj) {
    const apiKeyFromCookie = getApiKeyCookie();

    if (!apiKeyFromCookie) {
        return [];
    }
    
    const ai = new GoogleGenAI({ apiKey: apiKeyFromCookie });

    let mood = "";
    if (moodObj) {
        if (moodObj.id === 0) mood = "sweet";
        if (moodObj.id === 1) mood = "funny";
        if (moodObj.id === 2) mood = "serious";
    }

    const userRequest = question || "a beautiful horse";
    let prompt;

    if (prefix && prefix.id === 1) {
        // "OLD" style is active
        prompt = `You are an expert horse name generator. Your primary task is to create names based on the user's request, which is the highest priority.
        
        USER REQUEST: "${userRequest}"
        DESIRED MOOD: "${mood}"

        You must follow a specific naming pattern:
        1. The name must start with the prefix "Old".
        2. The second part of the name should be a creative word. This word MUST be inspired by the user's request and the desired mood.
        3. For inspiration for the second part, you can consider this list of words: ${SecondNames.join(", ")}. However, the user's request is more important than this list.

        RULES:
        - Generate 6 unique names.
        - All names must be in English.
        - Each name must be a single word, starting with "Old" (e.g., "Oldbreeze", "Oldglory").
        - Only the first letter of the complete name should be capitalized.
        - The final output must be in the specified JSON format.
        Whatever of above instruction, the response must be en default english words from data from prompt`;
    } else {
        // Default creative name generation
        prompt = `You are an expert horse name generator. Your task is to create creative and fitting names for horses.
        The user's request is your highest priority.
        
        USER REQUEST: "${userRequest}"
        DESIRED MOOD: "${mood}"

        RULES:
        - Generate a list of 6 unique, single-word horse names.
        - All names must be in English.
        - Each name must be a single word (no spaces).
        - Only the first letter of the name should be capitalized (e.g., "Starlight", not "StarLight").
        - The names must be creative and highly relevant to the user's request and the desired mood.
        - Provide the output in the specified JSON format.
        Whatever of above instruction, the response must be en default english words from data from prompt
        ALWAYS CREATE NAMES FROM TWO PARTS
        
        `;
    }
    
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        Name: {
                            type: Type.STRING,
                        },
                    },
                },
            },
        },
    })
    return JSON.parse(response.text);
}
