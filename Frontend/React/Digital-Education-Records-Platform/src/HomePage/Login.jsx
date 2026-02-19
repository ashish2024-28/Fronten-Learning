import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import './Login.css'


export default function Login() {
    const API_BASE = import.meta.env.VITE_API_BASE_URL;

    const platformLogo = "src/assets/logo.jpg"

    const { domain } = useParams();
    const navigate = useNavigate();

    const [university, setUniversity] = useState({});

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    //   useEffect(() => {
    //     // Only fetch if domain actually exists in the URL
    //     if (domain) {
    //         async function fetchUniversity() {
    //             try {
    //                 const response = await fetch(`${API_BASE}/${domain}/login_profile`);
    //                 // const response = await fetch(`http://localhost:8080/rps/login_profile`);
    //                 if (!response.ok) throw new Error("University not found");

    //                 const data = await response.json();
    //                 // 
    //                 setUniversityName(data.universityName); 
    //             } catch (err) {
    //                 alert("Failed to fetch university info:", err);
    //                 console.error("Failed to fetch university info:", err);
    //             }
    //         }
    //         fetchUniversity();
    //     }
    //   }, [domain]);      
    useEffect(() => {
        fetch(`${API_BASE}/${domain}/signup`)
            .then(res => res.json())
            .then(data => setUniversity(data));
    }, [domain]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) { setError("All fields are required"); return; }
        if (!email.includes("@")) { setError("Enter a valid email"); return; }
        // if (password.length < 8) { setError("Password must be at least 8 characters"); return; }

        setError("");
        setLoading(true);

        try {
            const response = await fetch(`${API_BASE}/${domain}/login_profile/user_login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });


            if (!response.ok) {
                throw new Error(data.message || "Login failed");
            }

            const data = await response.json();
            // Save session
            localStorage.setItem("token", data.token);
            localStorage.setItem("role", data.role);
            console.log(data.token)
            alert("Login successful 🎉 token : " + localStorage.getItem("token") + " ,role : " + localStorage.getItem("role"));
            // alert(` Login successful 🎉 token: ${data.token}  ,role: ${data.role} `);

            // Redirect based on role
            const rolePath = data.role.toLowerCase().replace('_', '');
            navigate(`/${domain}/${rolePath}/dashboard`);

        } catch (err) {
            alert(`User Not Found. ${err.message}` || "Server error. Try again later.")
            setError(err.message || "Server error. Try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h1 className="title">Digital Education Records ↔️ {university.universityName} </h1>

            <img id="derp" src={"../../public/Logo.png"} alt="Platform Logo" />
            <div className="logo-container">
                    <img id="univlogo" src={(university.universityLogoUrl) ? university.universityLogoUrl : "../../public/defaultUniversity.png"} alt="University Logo" />
            </div>

            <h1>{university.universityLogoUrl}</h1>



            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="card">
                {error && <p className="error">{error}</p>}
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <div className="password-wrapper">
                    <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    {/* <button type="button" onClick={() => setShowPassword(!showPassword)}>Toggle</button> */}
                    <span

                        onClick={() => setShowPassword(!showPassword)}>

                        {showPassword ? <EyeOff size={30} /> : <Eye size={30} />}
                    </span>
                </div>
                <button className="btn" type="submit" disabled={loading}>
                    {loading ? "Processing..." : "Login"}
                </button>
                <p>Don't have an account? <Link to={`/${domain}/signup`}>Signup</Link></p>
            </form>
        </div>
    );
}





