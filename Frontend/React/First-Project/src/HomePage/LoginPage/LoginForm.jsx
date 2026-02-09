import { BrowserRouter, Link, Router } from "react-router";

export default function LoginForm() {
    return( <>
  
    <form action="">
        <input type="text" name="username" id="username"/>
        <input type="password" name="userpassword" id="userpassword" />
        <input type="button" value="Login" />
        <p>
            {/* Don't have an account? <Link to= "/SignupForm">Signup</Link> */}
        </p>
        <span><a href="#">Signup</a></span>
    </form>

    
    </>

    );
}

// export default LoginForm;