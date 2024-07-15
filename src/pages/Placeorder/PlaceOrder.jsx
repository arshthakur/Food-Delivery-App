import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = ()=>{
const{getTotalCartAmount} = useContext(StoreContext)

  return(
   <form action="" className="place-order">
    <div className="place-order-left">
      <p className="title">Delivery Information</p>
      <div className="multi-fields">
        <input type='text' placeholder='First name'></input>
        <input type='text' placeholder='Second name'></input>
      </div>
      <input type="email" placeholder='Email address' />
      <input type="email" placeholder='Street' />
      <div className="multi-fields">
        <input type='text' placeholder='City'></input>
        <input type='text' placeholder='State'></input>
      </div>
      <div className="multi-fields">
        <input type='text' placeholder='Pin code'></input>
        <input type='text' placeholder='Country'></input>
      </div>
      <input type="text" placeholder='Mobile no.' />
      <button>Save</button>
    </div>
    <div className="place-order-right">
    <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>₹{getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery fee</p>
            <p>₹{getTotalCartAmount()===0?0:50}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>₹{getTotalCartAmount()==0?0:getTotalCartAmount() + 50}</b>
          </div>
          <button >Proceed to Payment</button>
        </div>
    </div>
   </form>
  );
}

export default PlaceOrder;