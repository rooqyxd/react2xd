import "../commonStyles.css";
import axios from "axios";
import { useState, useEffect } from "react";
const ShopingList = () => {
	const [shoppingList, setShoppingList] = useState([]);
	const loadList = async () => {
		try {
			const response = await axios.get("http://localhost:4000/api/shoppingList");
			setShoppingList(response.data);
			console.log(shoppingList);
		} catch (error) {
			console.error("error loading shopping list ", error);
		} finally {
		}
	};
	useEffect(() => {
		loadList();
	}, [shoppingList]);
	return (
		<div className="App">
			<header className="AppHeader">
				<p>Shoping List</p>
				<ul>
					{shoppingList.map((product) => (
						<li key={product.id}>{product.name}</li>
					))}
				</ul>
			</header>
		</div>
	);
};
export default ShopingList;
