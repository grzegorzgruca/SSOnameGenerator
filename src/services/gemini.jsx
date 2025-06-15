import { GoogleGenAI, Type } from "@google/genai";
import GetNames from "../data/getNames";
import { getApiKeyCookie, deleteApiKeyCookie } from '../utilis/cookies.jsx';

export default async function askGemini(question, style, defaultStyle) {
    const apiKeyFromCookie = getApiKeyCookie();

    if (!apiKeyFromCookie) {
        return [];
    }
    // Inicjalizujemy klienta AI tylko jeśli klucz API jest dostępny
    const ai = new GoogleGenAI({ apiKey: apiKeyFromCookie });
    console.log(defaultStyle);
    let styleInstructions = "";
    let defaultStyleInstructions = "ADDITIONAL INSTRUCTION: Niech imię które wygenerujesz będzie z kategorii: ";
    if (style && style.isActive) {
        if (style.id === 0) {
            styleInstructions = "";
        } else if (style.id === 1) {
            styleInstructions = "UWAGA, ZMIANA STYLU - PIERWSZY WYBÓR JEST PREDEFINIOWANY JAKO `OLD`, A DRUGI BIERZESZ Z TABELI KTÓRĄ CI WYSŁAŁEM PONIŻEJ ALE Z TEGO DRUGIEGO ZBIORU";
        }
    }
    if (defaultStyle) {
        if (defaultStyle.id === 0) {
            defaultStyleInstructions += "ZABAWNE";
        }
        if (defaultStyle.id === 1) {
            defaultStyleInstructions += "SŁODKIE, CUTE, CUTIE";
        }
        if (defaultStyle.id === 2) {
            defaultStyleInstructions += "PIESZCZOTLIWE, BŁYSKOTLIWE";
        }
        if (defaultStyle.id === 3) {
            defaultStyleInstructions += "POWAŻNY TON, Z HONOREM, Z UNIESIENIEM";
        }
    }
    console.log("XD",defaultStyleInstructions);
    
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents:
            "Jesteś ekspertem do generowania imion dla koni. Dam ci zestaw imion podzielonych na dwa człony. Będą one łączone bez spacji i służyły jako imię dla konia będą one miały tylko pierwszą duża literę, czyt. będą jednym słowem. Poniżej dopisze dodatkowe instrukcje, jednak chcę abyś jako output dał mi kombinacji całkowitych imion które będą stworzony wg wymadań podanych na końcu wiadomości. IN OUTPUT ONLY FIRST LETTER OF NAME MUST BE UPPERCASE, NOT ANOTHER."
            + GetNames()
            + `Dostosuj się do próźb usera: ${question}`
            + styleInstructions
            + defaultStyleInstructions
            + "Podaj mi maks 6 imion"
            + "Pamiętaj, tylko pierwsza litera imienia masz dać jako dużą, reszta ma być mała.",
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