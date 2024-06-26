import './Navbar.css'
import React from 'react'
import {assets} from '../../assets/assets'

const Navbar=()=>{
  return(
<div className='navbar'>
<img src={assets.logo} alt='' className='logo'></img>
<ul className='navbar-menu'>
  <li>Home</li>
  <li>Menu</li>
  <li>Mobile-app</li>
  <li>Contact us</li>
</ul>
<div className="navbar-right">
  <img src={assets.search_icon} alt=''></img>
  <div className="navbar-search-icon">
  <img src={assets.basket_icon} alt=''></img>
  <div className="dot"></div>
  <button>Sign in</button>
  </div>
</div>
</div>
  );
}

export default Navbar