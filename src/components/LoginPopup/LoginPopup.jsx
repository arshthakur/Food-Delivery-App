import React from 'react'
import './LoginPopup.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin})=>{
const[currState, setCurrState] = useState("Login")

  return(
    <div className='login-popup'>
  <form className="login-popup-container">
    <div className="login-popup-title">
      <h2 className='active'>{currState}</h2>
      <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
    </div>
    <div className="login-popup-inputs">
      {currState==="Login"?<></>: <input type='text' placeholder='Enter your Name' required />}
     
      <input type='text' placeholder='Enter your Email' required />
     <input type="text" placeholder='Enter your Password' />
    </div>
    <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
    <div className="login-popup-condition">
    <input type='checkbox' required />
      {currState==="Sign Up"?  <p>By continuing, I agree to the terms of use and privacy policy.</p>
      :<p>Remember me </p>
       }
      </div>
    
    {currState==="Login"?<p>Create an account?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
    :  <p>Already have an account<span onClick={()=>setCurrState("Login")}>Login here</span></p>}
    
  
  </form>
    </div>
  );
}

export default LoginPopup;