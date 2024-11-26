import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./components/App.jsx"
import "./index.css"
import { store } from "./store/store.js"

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
)
