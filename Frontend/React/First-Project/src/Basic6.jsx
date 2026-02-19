import { useRef } from "react";

function Basic6(){
// --------------- State ------------------
    const inputRef = useRef(null);
        


// --------------- arrofunction  / function------------------
    const inputHandle = ()=> {
        inputRef.current.focus();
        inputRef.current.style.color="red";
        inputRef.current.style.placeholder="Enter any thing an d clike Button";
    }
    
    const handleUser = (event)=>{
        event.preventDefault();
        const name = document.getElementById("name").value;
        const password = document.querySelector("#password");
    }
    
// --------------- JSX ( UI )  ------------------

    return(
    <><hr />
    <h1>Basic 6 : useRef Hook , use for controll input fields </h1>
        <input ref={inputRef} type="text" name="" id="" />
    <button  onClick={inputHandle}>Click Me</button>
    <br />

    <h1>Uncontrolled component</h1>
    <p>controlled : controll by useState.Get values of input fields ,By using useState </p>
    <p>uncontrolled = Get values of input fields ,By using DOM object </p>

    <form action="" method="post" onSubmit={handleUser}>
        <input type="text" id="name" placeholder="name" /> 
        <input type="password" id="password" placeholder="password" />
        <button >Submit</button>
    </form>

    </>
    );
    

  

}
    
export default Basic6; 
