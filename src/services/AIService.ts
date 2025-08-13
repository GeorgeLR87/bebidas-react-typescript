import { streamText } from 'ai'
import { openrouter } from '../lib/ai'


export default {
    async generateRecipe(prompt: string) {
        const result = streamText({
            model: openrouter('meta-llama/llama-3.3-70b-instruct:free'),
            prompt,
            system: 'Eres un bartender con 20 años de experiencia sirviendo tragos por todo el mundo'
        })
        return result.textStream
        
    }
}