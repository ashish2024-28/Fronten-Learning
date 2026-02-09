import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); // ✅ loading state


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            setError("All fields are required");
            return;
        }

        if (!email.includes("@")) {
            setError("Enter a valid email");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setError("");
        setLoading(true); // 🔄 start loading

        // ✅ DATA READY FOR BACKEND
        const signupData = {
            email,
            password,
        };
        console.log("Signup Data:", signupData);
        alert("Signup Data:", signupData);


        try {
            const response = await fetch(`http://localhost:8080/derp/a1/${domain}/signup/create_SubAdmin`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Signup failed");
                return;
            }

            alert("Signup successful 🎉 Please login");
        } catch (err) {
            setError("Server error. Try again later.");
        } finally {
            setLoading(false); // ✅ stop loading
        }
    };

    return (
        <div className="container">
            <h1 className="title">Digital Education Platform</h1>

            <div className="logo">LOGO</div>

            <form onSubmit={handleSubmit} className="card">
                {error && <p className="error">{error}</p>}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button className="disableBtn" type="submit"> {loading ? "Processing..." : "Signup"} </button>

                <p className="link">
                    Already have an account? <Link to="/">Login</Link>
                </p>
            </form>
        </div>
    );
}
