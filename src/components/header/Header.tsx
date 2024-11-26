import React, { FC } from "react"
import { FaHeart } from "react-icons/fa"
import { useFavorites } from "../../hooks/useFavorites"
import styles from "./Header.module.scss"

const Header: FC = () => {
	const favorites = useFavorites()
	return (
		<header className={styles.header}>
			<FaHeart style={{ fontSize: "20px" }}></FaHeart>
			<span>{favorites.length}</span>
		</header>
	)
}
export default Header
