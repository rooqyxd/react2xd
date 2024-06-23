import "./Header.css";
import { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";
const Header = () => {
	const { filterProducts, test } = useContext(ProductsContext);

	return (
		<div
			style={{
				height: "100px", // wysokość 100px
				width: "100%", // szerokość 100%
				backgroundColor: "#f8d7da", // kolor tła
				display: "flex", // flexbox
				justifyContent: "center", // wyśrodkowanie w poziomie
				alignItems: "center", // wyśrodkowanie w pionie
				gap: "100px", // odstęp między elementami
			}}
		>
			Header xD {test}
			<label>search:</label>
			<input
				type="text"
				placeholder="search products"
				onChange={(e) => filterProducts(e.target.value)}
			/>
		</div>
	);
};

export default Header;
