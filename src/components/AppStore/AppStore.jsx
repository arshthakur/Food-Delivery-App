import React from 'react'
import './AppStore.css'
import { assets } from '../../assets/assets';

const AppStore = ()=>{
  return(
    <>
    <div className='app-store'>

      <div className="para">
      <h3>For better experience, download <br></br>the Nibble app now</h3>
      </div>
    
    <div className='playstore'>
      <img src={assets.play_store} alt=""/>
      <img src={assets.app_store} alt="" />
    </div>
    </div>
    </>
  );
}

export default AppStore;