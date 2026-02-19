import { useState } from "react";


function Basic2(){
    const [name, setName] = useState("radha");
    return(<>
    <h4>Get Input Fields Value : {name}</h4>
    <input type="text" onChange={(e)=>{setName(e.target.value)}} name="name" id="name" placeholder="Enter Your name"/>
    <button  onClick={greet}>Clck Me</button>
        </>
    );
    

    function greet(){
        return alert(`Function greet Calling Me. ThankYou ${name}. hava a good day`);
    }


}
    
export default Basic2; 