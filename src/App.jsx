import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer.jsx'
import AppStore from './components/AppStore/AppStore.jsx';
import PlaceOrder from './pages/Placeorder/PlaceOrder.jsx';

const App =()=>{
  return(
    <>
<Navbar></Navbar>
<div className='app'>
<Routes>
 < Route path='/' element={<Home/>}/>
 < Route path='/cart' element={<Cart/>}/>
 < Route path='/order' element={<PlaceOrder/>}/>
</Routes>
</div>
<AppStore></AppStore>
<Footer></Footer>
</>
  );
}

export default App