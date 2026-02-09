import { useState } from "react";

function Basic4(){
// --------------- State ------------------
        const [name, setName] = useState("");
        const [password, setPassword] = useState("");
        const [skills, setSkills] = useState([]);
        const [gender, setGender] = useState("");
        const [city, setCity] = useState("");
        


// --------------- arrofunction ------------------

//  function greet () {
    const greet = () => {
        alert(`Thank You ${name}\nPassword: ${password}\nSkills: ${skills.join(", ")} \nGender : ${gender} \nCity : ${city}`);
    }
    // function reset () {
    const reset = () => {
        if (confirm("Reset All?")) {
            setName("");
            setPassword("");
            setSkills([]);
            setGender("");
            setCity("");

    }
    };
    
    // function handleCheckbox (e) {
    const handleCheckbox = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;

        if (checked) {
        setSkills([...skills, value]);
        } else {
            setSkills(skills.filter(skill => skill !== value));
        }
    };

    
    
    
// --------------- JSX ( UI )  ------------------

    return(
    <>
    <h1>Basic 4 : Controlled Component</h1>
    <h4>Get Input Fields Value : {name}</h4>

    <input onChange={(e)=>{setName(e.target.value)}} value={name} type="text" name="name" id="name" placeholder="Enter Your name"/> <br />
    <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" name="password" id="password" placeholder="Create Your Password"/> <br />
    
    <h1>Handle CheckBox</h1>

    <p>Select Skills : - </p>
    {["Java", "C++", "C", "Python"].map(skill => (
        <div key={skill}>
            <input type="checkbox" id={skill} value={skill} checked={skills.includes(skill)} onChange={handleCheckbox} />
            <label htmlFor={skill}>{skill}</label>
        </div>
    ))}

    <p><strong>Selected Skills:</strong> {skills.join(", ")}</p>

    <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} id="male" />
    <label htmlFor="male">Male</label>
    <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} id="female" />
    <label htmlFor="female">Female</label> <br />

    <h1>Drop List</h1>

    <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">Select City</option>
        <option value="patna">Patna</option>
        <option value="Vrindavan">Vrindavan</option>
    </select> <br />

    <button  onClick={greet}>Submit</button>
    <button  onClick={reset}>Reset</button>

        </>
    );
    

  

}
    
export default Basic4; 


// ✅ Correct mental model
// Think of a React component like this:
    // 1️⃣ Declare state
    // 2️⃣ Declare functions
    // 3️⃣ Return JSX (UI)
    


// why arrow function is preferred in React?

// ✅ Reason 1: Arrow functions don’t rebind this
//     In React (especially class components), this causes bugs.
//     Arrow functions inherit this automatically.
// ✅ Reason 2: Consistency
//     React codebase usually follows: const handler = () => {}
//     because: Event handlers, Inline callbacks, Hooks logic, all follow same style.
// ✅ Reason 3: Readability
//     Your brain immediately knows 👉 “this is a handler”.
//     📌 Conclusion: Arrow function = style + safety, not a fix for an error.