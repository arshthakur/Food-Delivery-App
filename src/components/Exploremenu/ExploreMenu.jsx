import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({category,setCategory})=>{
  return(
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Discover a diverse selection of delicious dishes, crafted with premium ingredients and culinary expertise. From appetizers to desserts, every bite is designed to elevate your dining experience. Enjoy your culinary journey with us!</p>
     <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
          return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                  <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""></img>
                  <p>{item.menu_name}</p>
            </div>
          )
        })}
     </div>
     <hr></hr>
    </div>
  );
}

export default ExploreMenu;