import './Navbar.css'
import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar=({setShowLogin})=>{

  const[menu,setMenu]= useState("home")
  const{getTotalCartAmount}  = useContext(StoreContext)

  return(
<div className='navbar'>
<Link to='/'><img src={assets.logo} alt='' className='logo'></img></Link>
<ul className='navbar-menu'>
  <Link to='/' onClick={()=>setMenu("home")} className={menu === "home"?"active":""}>home</Link>
  <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu === "menu"? "active":""}>menu</a>
  
  <Link to='/offers' onClick={()=>setMenu("offers")} className={menu === "offers"?"active":""}>offers</Link>
  <a href='#app-store' onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app"?"active":""}>mobile-app</a>
  <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu === "contact-us"?"active":""}>contact us</a>
</ul>
<div className="navbar-right">
  <img src={assets.search_icon} alt=''></img>
  <div className="navbar-search-icon">
  <Link to='/cart'><img src={assets.basket_icon} alt=''></img></Link>
  
  <div className={getTotalCartAmount()===0?"":"dot"}></div>
  </div>
  <button onClick={()=>setShowLogin(true)}>Sign in</button>
 
</div>
</div>
  );
}

export default Navbar