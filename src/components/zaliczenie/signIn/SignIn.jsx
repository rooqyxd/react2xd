import { useNavigate } from "react-router-dom";
import { useState } from "react";
const SignIn = () => {
	const [username, setUsername] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleSignIn = (e) => {
		e.preventDefault();
		const availableUsers = JSON.parse(localStorage.getItem("availableUsers")) || [];
		if (availableUsers.includes(username)) {
			localStorage.setItem("username", username);
			navigate("/dashboard");
		} else {
			setError("nie ma takiego usera!!!!!!!");
		}
	};

	return (
		<div>
			<form onSubmit={handleSignIn}>
				<input
					type="text"
					placeholder="Enter your name"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<button type="submit">zalogj</button>
			</form>
			{error && <p>{error}</p>}
			{error && <button onClick={() => navigate("/signOut")}>cofnij do rejestracji</button>}
		</div>
	);
};

export default SignIn;
