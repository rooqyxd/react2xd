import "../commonStyles.css";
import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../../../context/productsContext";
const ShopingList = () => {
	const { shoppingList, removeFromShoppingList } = useContext(ProductsContext);

	return (
		<div className="App">
			<header className="AppHeader">
				<p>Shoping List</p>
				<ul>
					{shoppingList?.map((product) => (
						<li key={product.id} onClick={() => removeFromShoppingList(product)}>
							{product.name}
						</li>
					))}
				</ul>
			</header>
		</div>
	);
};
export default ShopingList;
