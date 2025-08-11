import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { createRecipesSlice, type RecipesSliceType } from "./recipeSlice"
import { createFavoritesSlice, type FavoriteSliceType } from "./favoritesSlices"
import { createNotificationSlice, type NotificationSliceTypes } from "./notificationSlice"

export const useAppStore = create<RecipesSliceType & FavoriteSliceType & NotificationSliceTypes>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
})))