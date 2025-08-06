import type { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipies } from "../services/RecipeService"
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types"

export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    selectedRecipe: Recipe
    modal: boolean
    fetchjCategories: () => Promise<void>
    searchRecipies: ( serchFilter: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
    closeModal: () => void

}

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks:[]
    },
    drinks:{
        drinks: []
    },
    selectedRecipe: {} as Recipe,
    modal: false,
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
    },
    selectRecipe: async (id) => {
       const selectedRecipe = await getRecipeById(id)
       set({
        selectedRecipe,
        modal: true
       })
    }, 
    closeModal: () => {
        set({
            modal: false,
            selectedRecipe: {} as Recipe
        })
    }
})