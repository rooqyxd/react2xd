import React, { useContext, useState } from "react";
import axios from "axios";
import { ProductsContext } from "../../../context/productsContext";
import CircularProgress from "@mui/material/CircularProgress";
import "./ProductsList.css";
const ProductsList = () => {
	const { products, setProducts } = useContext(ProductsContext);
	const [isLoading, setIsLoading] = useState(false);

	const loadProducts = async () => {
		setIsLoading(true);
		try {
			const response = await axios.get("http://localhost:4000/api/productsList");
			setProducts(response.data);
		} catch (error) {
			console.error("error loading products", error);
		} finally {
			setIsLoading(false);
		}
	};
	const addToShoppingList = async (product) => {
		try {
			await axios.post("http://localhost:4000/api/shoppingList", product);
			console.log(`dodano produkt ${product.name}`);
		} catch (error) {
			console.error("error adding product to shopping list", error);
		}
	};
	return (
		<div>
			{/* <CircularProgress /> */}
			<button disabled={isLoading} onClick={loadProducts} className="loading-btn">
				{isLoading ? <CircularProgress /> : "Zaladuj"}
			</button>
			<ul>
				{products.map((product) => (
					<li key={product.id} onClick={() => addToShoppingList(product)}>
						{product.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ProductsList;
