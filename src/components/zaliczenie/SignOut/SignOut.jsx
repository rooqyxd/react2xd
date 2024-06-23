import { useNavigate } from "react-router-dom";
import { useState } from "react";
const SignOut = () => {
	const [username, setUsername] = useState("");
	const navigate = useNavigate();

	const handleRegisterAndSignIn = () => {
		let availableUsers = JSON.parse(localStorage.getItem("availableUsers")) || [];
		if (!availableUsers.includes(username)) {
			availableUsers.push(username);
			localStorage.setItem("availableUsers", JSON.stringify(availableUsers));
		}
		localStorage.setItem("username", username);
		navigate("/dashboard");
	};
	const handleGoToSignIn = () => {
		navigate("/signIn");
	};
	return (
		<div>
			<p>rejestracja i logowanie</p>
			<input
				type="text"
				placeholder="Enter your name"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<button onClick={handleRegisterAndSignIn}>zarejestruj i zaloguj</button>
			<button onClick={handleGoToSignIn}>do logowania</button>
		</div>
	);
};

export default SignOut;
