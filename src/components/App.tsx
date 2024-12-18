import { useGetRecipesQuery } from "../store/api/api"
import CreateRecipe from "./create-recipe/CreateRecipe"
import Header from "./header/Header"
import RecipeItem from "./recipe-item/RecipeItem"
import User from "./user/User"

const userId = 1

function App() {
	const { isLoading, data } = useGetRecipesQuery(
		null
		// undefined, {
		// skip: !userId,
		// }
	)
	// console.log("data", data)

	return (
		<section>
			<Header></Header>
			<div>
				<CreateRecipe></CreateRecipe>
				{isLoading ? (
					<div>Loading...</div>
				) : data ? (
					data.map((recipe) => (
						<RecipeItem
							key={recipe.id}
							recipe={recipe}
						></RecipeItem>
					))
				) : (
					"Not founded"
				)}
				<User></User>
			</div>
		</section>
	)
}

export default App
