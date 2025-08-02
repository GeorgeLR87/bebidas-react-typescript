import type { StateCreator } from "zustand"
import { getCategories, getRecipies } from "../services/RecipeService"
import type { Categories, Drinks, SearchFilter } from "../types"

export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    fetchjCategories: () => Promise<void>
    searchRecipies: ( serchFilter: SearchFilter) => Promise<void>

}

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks:[]
    },
    drinks:{
        drinks: []
    },
    fetchjCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
        
    },
    searchRecipies: async (filters) => {
       const drinks = await getRecipies(filters)
       set({
        drinks
       })
       
    }
})