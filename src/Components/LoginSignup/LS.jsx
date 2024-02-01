import React, { useState } from 'react'
import './LS.css'

import user_icon from '../Assets/username.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

export const LS = () => {
    const[action,Setaction]= useState("Sign Up");

  return (
    
    <div className='container'>
        <div className='Header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
         <div className="inputs">
           
           {action==="Login"?<div></div>: <div className="inpt">
                <img src={user_icon} alt="" />
                <input type="text"placeholder='Name'/>
            </div>}
            <div className="inpt">
                <img src={email_icon} alt="" />
                <input type="text"placeholder='Email' />
            </div>
            <div className="inpt">
                <img src={password_icon}alt="" />
                <input type="text"placeholder='Password' />
            </div>

            {action==="Sign Up"?<div></div>:<div className="forpass">Forget Password? <span>Click Here</span></div>}
            
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{Setaction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{Setaction("Login")}}>Login</div>
            </div>
         </div>
    </div>

    
  )
}
