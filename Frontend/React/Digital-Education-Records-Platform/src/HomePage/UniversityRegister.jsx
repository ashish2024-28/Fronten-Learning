import { AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function UniversityRegister() {
    const API_BASE = "http://localhost:8080/home_page";

    const navigate = useNavigate();
    const [university, setUniversity] = useState({
        permanentId: "",
        institutionName: "",
        universityName: "",
        institutionType: "",
        establishmentYear: "",
        address: "",
        state: "",
        email: "",
        mobileNumber: "",
        domain: "",
        universityLogoPath: ""
    });
    const [domainAdmin, setDomainAdmin] = useState({
        name:"",
        mobileNumber:"",
        email:"",
        password:""
    });
    const domain = university.domain;
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUniversityChange = (e) => {
        setUniversity({ ...university, [e.target.name]: e.target.value });
    };
    const handleDomainAdminChange = (e) => {
        setDomainAdmin({ ...domainAdmin, [e.target.name]: e.target.value });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (domainAdmin.password !== confirmPassword) return setError("Passwords do not match");
    //     setLoading(true);
    //     setError("");

    //     try {
    //         const formData = new FormData();// 

    //         const response = await fetch(`${API_BASE}/register_university`, {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON({university,domainAdmin})
    //         });

    //         if (!response.ok) {
    //             const data = await response.json();
    //             throw new Error(data.message || "Signup failed");
    //         }

    //         const message = await response.text();
    //         alert(message + " 🎉 Please login as DomainAdmin");

    //         navigate(`/${domain}/login`);

    //     } catch (err) {
    //         alert(error)
    //         setError(err.message);
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    const handleSubmit = async (e) => {
  e.preventDefault();

  if (domainAdmin.password !== confirmPassword) {
    return setError("Passwords do not match");
  }

  setLoading(true);
  setError("");

  try {
    const formData = new FormData();

        formData.append(
        "university",
        new Blob([JSON.stringify(university)], { type: "application/json" })
        );

        formData.append(
        "domainAdmin",
        new Blob([JSON.stringify(domainAdmin)], { type: "application/json" })
        );

        formData.append("logo", university.universityLogoPath);

        const response = await fetch(`${API_BASE}/register_university`, {
        method: "POST",
        body: formData
        });

        const message = await response.text();

        if (!response.ok) {
        throw new Error(message);
        }

        alert(message + " 🎉 Please login");
        navigate(`/${university.domain}/login`);

    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
    };



    return (<>
        {/* <div>
            <NavLink>Home</NavLink>
            <NavLink>Home</NavLink>
            <NavLink>Home</NavLink>
            <NavLink>Home</NavLink>
            </div> */}
            <h2>`${error}`</h2>
        <div className="container">
            <h2>Register University</h2>
            <form onSubmit={handleSubmit} className="card">
                {error && <p className="error">{error}</p>}
                <input type="text" name="permanentId" placeholder="PermanentId" onChange={handleUniversityChange} required />
                <input type="text" name="institutionName" placeholder="InstitutionName" onChange={handleUniversityChange} required />
                <input type="text" name="universityName" placeholder="UniversityName" onChange={handleUniversityChange} required />
                <input type="text" name="institutionType" placeholder="InstitutionType" onChange={handleUniversityChange} required />
                <input type="text" name="establishmentYear" placeholder="EstablishmentYear" onChange={handleUniversityChange} required />
                <input type="text" name="address" placeholder="Address" onChange={handleUniversityChange} required />
                <input type="text" name="state" placeholder="State" onChange={handleUniversityChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleUniversityChange} required />
                <input type="text" name="mobileNumber" placeholder="MobileNumber" onChange={handleUniversityChange} required />
                <input type="text" name="domain" placeholder="Unique Domain" onChange={handleUniversityChange} required />
                <input type="file" name="universityLogoPath" onChange={(e) =>
  setUniversity({
    ...university,
    universityLogoPath: e.target.files[0],
  })
}
 required/>

                {/* {/* DomainAdmin */}
                <input type="text" name="name" placeholder="Name" onChange={handleDomainAdminChange} required />
                <input type="text" name="mobileNumber" placeholder="MobileNumber" onChange={handleDomainAdminChange} required />
                <input type="email"  name="email" placeholder="Email" onChange={handleDomainAdminChange} required />
                <input type="password" name="password" onChange={handleDomainAdminChange} required />
                <input type="password" placeholder="Confirm Password" onChange={(e)=>{setConfirmPassword(e.target.value)}} required />

                <button type="submit" disabled={loading}>{loading ? "Saving..." : "Signup"}</button>
                <p>Already have an account? <Link to={`/${domain}/login`}>Login</Link></p>
            </form>
        </div>
    </>

    );
}



