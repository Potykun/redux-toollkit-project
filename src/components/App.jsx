import Header from "./header/Header"
import RecipeItem from "./recipe-item/RecipeItem"

function App() {
	return (
		<section>
			<Header></Header>
			<div>
				<RecipeItem
					recipe={{
						id: 1,
						name: "Fries",
					}}
				></RecipeItem>
				<RecipeItem
					recipe={{
						id: 2,
						name: "Burger",
					}}
				></RecipeItem>
				<RecipeItem
					recipe={{
						id: 3,
						name: "Pizza Peperoni",
					}}
				></RecipeItem>
			</div>
		</section>
	)
}

export default App
