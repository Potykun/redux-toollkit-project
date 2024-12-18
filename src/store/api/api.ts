import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { API_URL } from "./baseUrl"
import { IRecipe } from "../../types/recipe.types"

export const api = createApi({
	reducerPath: "api",
	tagTypes: ["Recipe"],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (builder) => ({
		getRecipes: builder.query<IRecipe[], null>({
			query: () => "/?_sort=id&order=desc",
			providesTags: () => [
				{
					type: "Recipe",
				},
			],
		}),
	}),
})

export const { useGetRecipesQuery } = api
