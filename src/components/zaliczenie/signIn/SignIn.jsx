import { useNavigate } from "react-router-dom";
import { useState } from "react";
const SignIn = () => {
	const [username, setUsername] = useState("");
	const navigate = useNavigate();

	const handleSignIn = (e) => {
		e.preventDefault();
		if (!username) {
			alert("Please enter your name");
			return;
		}
		localStorage.setItem("username", username);
		navigate("/dashboard");
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
		</div>
	);
};

export default SignIn;
