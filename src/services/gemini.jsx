import { GoogleGenAI, Type } from "@google/genai";
import GetNames from "../data/getNames";
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

export default async function askGemini() {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents:
            "Dam ci zestaw imion podzielonych na człony dwa. Będą one łączone bez spacji i służyły jako imię dla konia będą one miały tylko pierwszą duża literę, czyt. będą jednym słowem. Poniżej dopisze dodatkowe instrukcje, jednak chcę abyś jako output dał mi kombinacji całkowitych imion które będą stworzony wg wymadań podanych na końcu wiadomości. Pamiętaj że odbiora to polak który zna też dośc dobrze angielski, nie rob banalnych przykładów dla dzieci, tylko przemyślane. Imienie które łączone upperrcase ma byc tylko pierwszxa litera slowa i tak też będą czytane i rozumiane słowa wg poleceń - jako jedno słowo a nie zespół dwóch. Używaj słow popularnych, któych kombinacje będą fajne i łatwe a nie skomplikowane po angielsku. IN OUTPUT ONLY FIRST LETTER OF NAME MUST BE UPPERCASE, NOT ANOTHER."
            + GetNames()
            + "Daj cute imiona do białego konia "
            + "Podaj mi maks 6 imion",
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