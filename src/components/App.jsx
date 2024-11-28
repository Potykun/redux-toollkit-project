import { useGetRecipesQuery } from "../store/api/api"
import Header from "./header/Header"
import RecipeItem from "./recipe-item/RecipeItem"
import User from "./user/User"

function App() {
	const { isLoading, data } = useGetRecipesQuery()
	console.log("data", data)

	return (
		<section>
			<Header></Header>
			<div>
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
