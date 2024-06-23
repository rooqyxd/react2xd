import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import "./index.css";
import DashboardContent from "./components/DashboardContent/DashboardContent.jsx";
import { useEffect } from "react";
import SignIn from "./components/zaliczenie/signIn/signIn.jsx";
// const RedirectToDashboard = () => {
// 	const navigate = useNavigate();
// 	useEffect(() => {
// 		navigate("/dashboard");
// 	}, [navigate]);

// 	return null;
// };
const ProtectedRoute = () => {
	const navigate = useNavigate();
	const username = localStorage.getItem("username");
	useEffect(() => {
		if (!username) {
			navigate("/signIn");
		}
	}, [username, navigate]);
	return username ? <DashboardContent /> : null;
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <ProtectedRoute />,
	},
	{
		path: "/signIn",
		element: <SignIn />,
	},
	{
		path: "/dashboard",
		element: <App />,
		children: [
			{
				path: "",
				element: <ProtectedRoute />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<RouterProvider router={router} />
	</>,
);
