import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./Signup.css";


export default function Signup() {

    const API_BASE = "http://localhost:8080";
    const { domain } = useParams();
    const navigate = useNavigate();
    // university name and logo
    const [universityNameLogo, setUniversityNameLogo] = useState({});

    
    const [error, setError] = useState("");
    const [role, setRole] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        mobileNumber: "",
        facultyId: "",  //faculty
        teachingBatch: "", //faculty
        subAdminId: "", //subAdmin
        course: "",
        //student
        rollNumber: "",
        branch: "", 
        batch: "", 
        fatherName: "",
        fatherMobNo: ""
    });
    

    useEffect(() => {
        fetch(`${API_BASE}/${domain}/signup`)
            .then(res => res.json())
            .then(data => setUniversityNameLogo(data))
            .catch(() => setUniversityNameLogo("University"));
    }, [domain]);

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!userData.email || !userData.password || !confirmPassword) {
            return setError("All required fields must be filled");
        }

        if (!userData.email.includes("@")) {
            return setError("Invalid email format");
        }

        if (userData.password.length < 8) {
            return setError("Password must be at least 8 characters");
        }

        if (userData.password !== confirmPassword) {
            return setError("Passwords do not match");
        }

        if (!role) {
            return setError("Please select a role");
        }

        setError("");

        navigate(`/${domain}/signup/confirm`, {
            state: { userData, role }
        });
    };

    return (
        <div className="container">
            <h1>Digital Education Records ↔️ {universityNameLogo.universityName}</h1>
            <h2>Signup</h2>
{/* 
            <div className="logo">
                 <img src={platformLogo} alt="Platform Logo" />
            </div> */}
            {/* <div className="logo" id="universityLogo">
                 <img src={universityLogo} alt="University Logo" />{universityLogo}
            </div> */}

            {error && <p style={{ color: "red" }}>{error}</p>}

            <form onSubmit={handleSubmit} className="card">

                <input name="name" placeholder="Name" onChange={handleChange} required />
                <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
                <input name="mobileNumber" placeholder="Mobile Number" onChange={handleChange} required />
                <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
                <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} required />

                <select value={role} onChange={(e) => setRole(e.target.value)} required>
                    <option value="">Select Role</option>
                    <option value="STUDENT">Student</option>
                    <option value="FACULTY">Faculty</option>
                    <option value="SUB_ADMIN">Sub Admin</option>
                </select>

                {/* STUDENT FIELDS */}
                {role === "STUDENT" && (
                    <>
                        <input name="rollNumber" placeholder="Roll Number" onChange={handleChange} required />
                        <input name="course" placeholder="Course (B.Tech, BCA, MBA...)" onChange={handleChange} required />
                        <input name="branch" placeholder="Branch" onChange={handleChange} />
                        <input name="batch" placeholder="Batch (2021-25)" onChange={handleChange} required />
                        <input name="fatherName" placeholder="Father Name" onChange={handleChange} required />
                        <input name="fatherMobNo" placeholder="Father Mobile No" onChange={handleChange} required />
                    </>
                )}

                {/* FACULTY FIELDS */}
                {role === "FACULTY" && (
                    <>
                        <input name="facultyId" placeholder="Faculty ID" onChange={handleChange} required />
                        <input name="course" placeholder="Teaching Course" onChange={handleChange} required />
                        <input name="teachingBatch" placeholder="Teaching Batch" onChange={handleChange} required />
                    </>
                )}

                {/* SUB ADMIN FIELDS */}
                {role === "SUB_ADMIN" && (
                    <>
                        <input name="subAdminId" placeholder="Sub Admin ID" onChange={handleChange} required />
                        <input name="course" placeholder="Department" onChange={handleChange} required />
                    </>
                )}

                <button type="submit" onClick={()=>local.state}>Signup</button>

                <p>
                    Already have account? <Link to={`/${domain}/login`}>Login</Link>
                </p>
            </form>
        </div>
    );
}




