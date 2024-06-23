import { createContext, useState } from "react";
import axios from "axios";
const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [shoppingList, setShoppingList] = useState([]);
	const loadProducts = async () => {
		setIsLoading(true);
		console.log("api produkty");
		try {
			const response = await axios.get("http://localhost:4000/api/productsList");
			setProducts(response.data);
		} catch (error) {
			console.error("error loading products", error);
		} finally {
			setIsLoading(false);
		}
	};
	const loadShoppingList = async () => {
		console.log("api szoping list");
		try {
			const response = await axios.get("http://localhost:4000/api/shoppingList");
			setShoppingList(response.data);
		} catch (error) {
			console.error("error loading shopping list", error);
		} finally {
			setIsLoading(false);
		}
	};
	const addToShoppingList = async (product) => {
		console.log("api szoping dodac");
		try {
			await axios.post("http://localhost:4000/api/shoppingList", product);
			console.log(`dodano produkt ${product.name}`);
			loadShoppingList();
		} catch (error) {
			console.error("error adding product to shopping list", error);
		}
	};
	const removeFromShoppingList = async (product) => {
		console.log("api szoping usun");
		try {
			await axios.delete(`http://localhost:4000/api/shoppingList/${product.id}`);
			console.log(`usunieto produkt ${product.name}`);
			loadShoppingList();
		} catch (error) {
			console.error("error removing product from shopping list", error);
		}
	};
	return (
		<ProductsContext.Provider
			value={{
				products,
				setProducts,
				loadProducts,
				addToShoppingList,
				isLoading,
				shoppingList,
				removeFromShoppingList,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};
export { ProductsContext, ProductsProvider };
