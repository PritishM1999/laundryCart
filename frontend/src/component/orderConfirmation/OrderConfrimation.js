import React from 'react'
import {useNavigate} from "react-router-dom";



import "./orderConfirmation.css"

const OrderConfrimation = () => {
   const navigate=useNavigate();

  return (
    <div className='orderConfirmationWrapper'>
     <div className="orderConfirmationContainer">
        <div className='orderTickContainer'>
        <div class="check"></div>
        </div>
        <h3>Your order is successfully Placed.</h3>
        <p>You can track the delivery in the "Orders" section.</p>
        <button onClick={()=> navigate("/pastOrder")}>Go to Orders</button>
    </div>
    </div>
    
  )
}

export default OrderConfrimation