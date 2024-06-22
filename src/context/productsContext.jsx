import { createContext, useState } from "react";
const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([]);

	return (
		<ProductsContext.Provider value={{ products, setProducts }}>
			{children}
		</ProductsContext.Provider>
	);
};
export { ProductsContext, ProductsProvider };
