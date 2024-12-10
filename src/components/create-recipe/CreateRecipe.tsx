import { FormEvent, useState } from "react"
import { useCreateRecipesMutation } from "../../store/api/recipes.api"
import { IRecipeData } from "../../types/recipe.types"

const CreateRecipe = () => {
	const defaultValue: IRecipeData = {
		name: "",
		image: "",
	}
	const [recipe, setRecipe] = useState(defaultValue)
	const [createRecipe] = useCreateRecipesMutation()
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		createRecipe(recipe).then(() => setRecipe(defaultValue))
		console.log("get recipe", recipe)
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<p>Create new Recipe:</p>
				<label>
					{" "}
					<input
						placeholder="Name"
						value={recipe.name}
						type="text"
						onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
					/>
				</label>
				<label>
					{" "}
					<input
						placeholder="Image"
						value={recipe.image}
						type="text"
						onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
					/>
				</label>
				<button type="submit">Create</button>
			</form>
		</div>
	)
}
export default CreateRecipe
