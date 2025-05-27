import { GoogleGenAI, Type } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

export default async function askGemini() {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents:
            "List a few popular cookie recipes, and include the amounts of ingredients.",
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        recipeName: {
                            type: Type.STRING,
                        },
                        ingredients: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.STRING,
                            },
                        },
                    },
                    propertyOrdering: ["recipeName", "ingredients"],
                },
            },
        },
    })
    return JSON.parse(response.text);

}