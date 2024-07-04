import './Navbar.css'
import React, { useState } from 'react'
import {assets} from '../../assets/assets'

const Navbar=()=>{

  const[menu,setMenu]= useState("home")

  return(
<div className='navbar'>
<img src={assets.logo} alt='' className='logo'></img>
<ul className='navbar-menu'>
  <li onClick={()=>setMenu("home")} className={menu === "home"?"active":""}>home</li>
  <li onClick={()=>setMenu("menu")} className={menu === "menu"? "active":""}>menu</li>
  <li onClick={()=>setMenu("offers")} className={menu === "offers"? "active":""}>offers%
    <div className='new'>new</div>
  </li>
  <li onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app"?"active":""}>mobile-app</li>
  <li onClick={()=>setMenu("contact-us")} className={menu === "contact-us"?"active":""}>contact us</li>
</ul>
<div className="navbar-right">
  <img src={assets.search_icon} alt=''></img>
  <div className="navbar-search-icon">
  <img src={assets.basket_icon} alt=''></img>
  
  <div className="dot"></div>
  </div>
  <button>Sign in</button>
 
</div>
</div>
  );
}

export default Navbar