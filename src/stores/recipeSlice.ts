import type { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"
import type { Categories } from "../types"

export type RecipesSliceType = {
    categories: Categories
    fetchjCategories: () => Promise<void>
}

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks:[]
    },
    fetchjCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
        
    }
})