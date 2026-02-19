import { useEffect, useState } from "react";

function Basic5(){
// --------------- State ------------------
        const [count, setCount] = useState(0);
        


// --------------- arrofunction  / function------------------

    function oneTmeCall(){ alert("i am function oneTimeCall..."); }
    // oneTmeCall();

    // useEffect(()=>oneTmeCall(),[]);
    
    
// --------------- JSX ( UI )  ------------------

    return(
    <>
    <h1>Basic 5 : Hooks </h1>
    <p>popular hook : useState, useEffect, useRef, useContext, ....etc common is (use )</p>
    <code>Syntex : useEffect(passFunction as parameter , dependendency)</code> <br />

    <button  onClick={()=> setCount(count+1)}>Count : {count}</button>

    <h3><mark>Problem: when click button (Count) then oneTimeCall function call 2 times and also call when page refresh.</mark></h3>
    <h3><mark>Because Count update (or when click count button) then componentrefresh so oneTimeCall function call .</mark></h3>
    <h3><mark>Solution: useEffect</mark></h3>
    <ol>
    <li>React component re-renders whenever state changes</li>
    <li>Any function called directly inside component body runs on every render</li>
    <li>Button click updates state using setCount()</li>
    <li>State update causes component re-render</li>
    <li>Function gets called again → problem</li>
    <li>useEffect controls when side-effects should run</li>
    <li>Empty dependency array [] means run only once</li>
    <li>So function is placed inside useEffect</li>
    </ol>


        </>
    );
    

  

}
    
export default Basic5; 
