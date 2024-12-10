import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IRecipe } from "../../types/recipe.types"

const initialState: IRecipe[] = []

const favoritesSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {
		toggleFavorites: (state, action: PayloadAction<IRecipe>) => {
			const recipe = action.payload
			const isExist = state.some((r) => r.id === recipe.id)
			if (isExist) {
				const index = state.findIndex((item) => item.id === recipe.id)
				if (index !== -1) {
					state.splice(index, 1)
				}
				// state = state.filter((e) => e.id !== recipe.id)
			} else {
				state.push(recipe)
			}
		},
	},
})

export const { actions, reducer } = favoritesSlice
