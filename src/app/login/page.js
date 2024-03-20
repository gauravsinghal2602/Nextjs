"use client"

import {useRouter} from "next/navigation"
import Link from "next/link";

const Login = () =>{
    const router = useRouter();
    const navigate = (page)=>{
        router.push("/login/"+page);
    }
    return(

        <div>
            <h1 className="heading">Login Page</h1>
            <Link href="/">Go to Home Page</Link>
            <br/> <br/>

            <button onClick={()=>navigate("loginstudent")}>Student Login</button>
            <br/> <br/>
            <button onClick={()=>navigate("loginteacher")}>Teacher Login</button>
        </div>

    )
}

export default Login;