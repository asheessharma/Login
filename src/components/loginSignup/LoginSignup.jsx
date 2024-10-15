import React, { useState } from 'react'
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import '../LoginSignup.css'
import { IconContext } from "react-icons";



export default function
    () {
        const [action, setaction] = useState("Login");
    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> :<div className="input">
                    <IconContext.Provider value={{ className: "icons" }}><MdOutlinePersonOutline /></IconContext.Provider>
                    <input type='text' placeholder='Name' />
                </div>}
                
                <div className="input">
                    <IconContext.Provider value={{ className: "icons" }}><MdEmail />  </IconContext.Provider>
                    <input type='email' placeholder='Email Id' />
                </div>
                <div className="input">
                    <IconContext.Provider value={{ className: "icons" }}><RiLockPasswordFill /></IconContext.Provider>
                    <input type='password' placeholder='Password' />
                </div>
            </div>
            {action === "Sign Up" ?  <div></div> : <div className="forget-password"> Forgot Password? {<span>Click Here! </span>}</div>}
            
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={()=>{setaction("Sign Up")}}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={()=>{setaction("Login")}}>Login</div>
            </div>

        </div>
    )
}
