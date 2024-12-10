import { useActions } from "../../hooks/useActions"
import { useFavorites } from "../../hooks/useFavorites"
import { IRecipe } from "../../types/recipe.types"
import styles from "./RecipeItem.module.scss"

interface IRecipeItem {
	recipe: IRecipe
}
const RecipeItem = ({ recipe }: IRecipeItem) => {
	// const favorites = useSelector((state) => state.favorites)
	const favorites = useFavorites()

	// console.log(favorites)
	const { toggleFavorites } = useActions()

	const isExists = favorites.some((r) => r.id === recipe.id)
	return (
		<div className={styles.item}>
			<img
				src={recipe.image}
				alt={recipe.name}
				width={100}
			/>
			<h2>{recipe.name}</h2>
			<button onClick={() => toggleFavorites(recipe)}>{isExists ? "Remove from favorites" : "Add to favorites"}</button>
		</div>
	)
}
export default RecipeItem
