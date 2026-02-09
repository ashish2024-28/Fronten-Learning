import { useState } from "react";
import Basic1 from "./basic1";
import Basic2 from "./Basic2";

function Basic3(){
    const [displayElement, setDisplayElement] = useState(true);
    const [displayComponent1, setDisplayComponent1] = useState(true);
    const [displayComponent2, setDisplayComponent2] = useState(true);
    return(<>
    <h1>Basic 1</h1>
    {   displayComponent1? <Basic1 /> : null    } <hr />

    <h1>Basic 2</h1>
    {   displayComponent2? <Basic2 /> : null    } <hr />    

    <h1>Toggle:- Elements, Components Show / hide / Toggle </h1>
    <button onClick={()=>{setDisplayElement(!displayElement)}}>Button Click Toggle Element</button>
    {   displayElement? <h2>Elements Display or Hide means Togggle</h2> : null  } <hr />

    <h1><b>Toggle or show/hide Component:- Basic 1</b></h1>
    <button onClick={()=>{setDisplayComponent1(!displayComponent1)}}>Button Ckick Toggle Componenet 1</button>
        
    <h1><b>Toggle or show/hide Component:- Basic 1</b></h1>
    <button onClick={()=>{setDisplayComponent2(!displayComponent2)}}>Button Ckick Toggle Componenet 2</button> <hr />
    </>
    );
    


}
    
export default Basic3; 