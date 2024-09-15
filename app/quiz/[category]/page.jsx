"use client";
import { useParams } from 'next/navigation'
import { useState, useEffect, useCallback } from 'react';
import Groq from 'groq-sdk';


// The user should be brought to this page after choosing a category of food
export default function Quiz() {
    const params = useParams();
    const category = params.category;
    const [response, setResponse] = useState('');

    useEffect(() => {
        const groq = new Groq({apiKey: "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", dangerouslyAllowBrowser: true});
        
        async function fetchFoods() {
            let fullResponse = '';
            const chatCompletion = await groq.chat.completions.create({
                "messages": [
                    {
                        "role": "user",
                        "content": `Please give me a list of 10 ${category} foods. Say nothing else except the list of foods, comma separated.`,
                    }
                ],
                "model": "llama3-8b-8192",
                "temperature": 1,
                "max_tokens": 1024,
                "stream": true,
            });

            for await (const chunk of chatCompletion) {
                fullResponse += chunk.choices[0]?.delta?.content || '';
            }
            setResponse(fullResponse);
        }

        fetchFoods();
    }, [category]);

    return (
        <div>
            <h1>{response}</h1>
        </div>
    );
}