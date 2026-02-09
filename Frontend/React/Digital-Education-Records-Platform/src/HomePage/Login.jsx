import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); // ✅ loading state



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
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

        setError("");
        setLoading(true); // 🔄 start loading

        // ✅ DATA READY FOR BACKEND
        const Data = {
            email,
            password,
        };
        alert("Login Success:", Data.email, Data.password);
        console.log("Login Success:", Data);


        try {
            const response = await fetch("http://localhost:8080/api/auth/login", {
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
                setError(data.message || "Login failed");
                return;
            }

            console.log("Login Success:", data);

            // 🔐 save token if backend sends one
            localStorage.setItem("token", data.token);

            alert("Login successful 🎉");
        } catch (err) {
            setError("Server error. Try again later.");
        } finally {
            setLoading(false); // ✅ stop loading
        }
    };

    return (
        <div className="container">
            <h1 className="title">Digital Education Records Platform</h1>

            <div className="logo">LOGO</div>

            <form onSubmit={handleSubmit} className="card">
                {error && <p className="error">{error}</p>}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div className="password-wrapper">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <span
                        className="eye-icon"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label="Toggle password visibility"
                    >
                        {showPassword ? (
                            /* Eye Off */
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20C7 20 2.73 16.11 1 12c.74-1.79 2.03-3.58 3.76-5.06" />
                                <path d="M1 1l22 22" />
                                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c5 0 9.27 3.89 11 8-.53 1.27-1.37 2.58-2.44 3.79" />
                                <path d="M14.12 14.12A3 3 0 0 1 9.88 9.88" />
                            </svg>
                        ) : (
                            /* Eye On */
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                        )}
                    </span>
                </div>

                <button className="disableBtn" type="submit" disabled={loading}> {loading ? "Processing..." : "Login"} </button>

                <p className="link">
                    Don't have an account? <Link to="/signup">Signup</Link>
                </p>
            </form>
        </div>
    );
}
