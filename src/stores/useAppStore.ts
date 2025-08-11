import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { createRecipesSlice, type RecipesSliceType } from "./recipeSlice"
import { createFavoritesSlice, type FavoriteSliceType } from "./favoritesSlices"
import { createNotificationSlice, type NotificationSliceTypes } from "./notificationSlice"
import { createAISlice, type AISlice } from "./aiSlice"

export const useAppStore = create<RecipesSliceType & FavoriteSliceType & NotificationSliceTypes & AISlice>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a)
})))