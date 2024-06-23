import React, { useContext, useState } from "react";

import { ProductsContext } from "../../../context/productsContext";
import CircularProgress from "@mui/material/CircularProgress";
import "./ProductsList.css";
const ProductsList = () => {
	const {
		products,
		setProducts,
		loadProducts,
		addToShoppingList,
		isLoading,
		filteredProducts,
		test,
	} = useContext(ProductsContext);

	return (
		<div>
			{/* <CircularProgress /> */}
			<button disabled={isLoading} onClick={loadProducts} className="loading-btn">
				{isLoading ? <CircularProgress /> : "Zaladuj"}
			</button>
			<ul>
				{filteredProducts.map((product) => (
					<li key={product.id} onClick={() => addToShoppingList(product)}>
						{product.name}
					</li>
				))}
			</ul>
			{test}
		</div>
	);
};

export default ProductsList;
