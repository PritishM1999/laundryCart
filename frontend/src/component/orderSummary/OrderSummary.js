import React, { useEffect, useState } from "react";

import next from "../../media/next.svg";
import tick from "../../media/tick.svg";

import "./orderSummary.css";

const OrderSummary = ({ orderedProduct, setIsSummary, isSummary, orderConfirmation, setOrderConfirmation }) => {
  const [storeAddress, setStoreAddress] = useState("Store Location");
  const [grandTotal, setGrantTotal] = useState(0);


  useEffect(() => {
    setGrantTotal(0);
    for (let i = 0; i < orderedProduct.length; i++) {
      setGrantTotal((prevValue) => prevValue + orderedProduct[i].totalPrice);
    }
  }, []);

  const confirmClick = async () => {
    console.log(JSON.parse(localStorage.getItem("user")).token);
   const check= fetch(" https://localhost:4000/order/create", {
      method: "POST",
      body: JSON.stringify({
        price: grandTotal + 90,
        // userId: {localStorage.getItem("user")? req. },
        orderItems: orderedProduct,
        shippingAddress: "#223, 10th road, Jp Nagar, Bangalore",
        pincode: 560078,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "authorization":`Bearer ${JSON.parse(localStorage.getItem("user")).token}`
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    if(check.message="Success"){
      setOrderConfirmation(!orderConfirmation);
      setIsSummary(!isSummary)
    }
  };

  return (
   <div className="orderSummaryContainer">
   <div className="headerContainer">
     <h3>Order Summary</h3>
     <button onClick={() => setIsSummary(!isSummary)}>X</button>
   </div>
   <div className="subHeaderContainer">
     <div className="dropDownContainer">
       {storeAddress == "Store Location" ? (
         <img src={next} alt="Drop Icon" />
       ) : null}
       <input
         value={storeAddress}
         style={{ opacity: storeAddress == "Store Location" ? "0.5" : "1" }}
         onClick={() => setStoreAddress("Jp Nagar")}
         className="dropDown"
         readOnly
       />
     </div>
     <div className="storeAddressContainer min-width-m">
       <span>Store Address:</span>
       <span>
         {storeAddress == "Store Location"
           ? "--"
           : "Near Phone booth,10th road,Bangalore"}
       </span>
     </div>
     <div className="storeAddressContainer min-width-s">
       <span>Phone:</span>
       <span>
         {storeAddress == "Store Location" ? "--" : "+91 9999999999"}
       </span>
     </div>
   </div>
   <div className="orderDetailContainer">
     <h3>Order Details</h3>
     <table className="orderDetailTableContainer">
       {orderedProduct.map((item) => (
         <tr className="orderDetailRow">
           <td className="orderDeatilColumn">{item.name}</td>
           <td className="orderDeatilColumn">
             {item.operationType.join(",")}
           </td>
           <td className="orderDeatilColumn">
             <span>{item.quantity}</span>
             <span>X</span>
             <span>{item.price}</span>
             <span>=</span>
           </td>
           <td style={{ fontSize: "1.2rem" }} className="orderDeatilColumn">
             {item.totalPrice}
           </td>
         </tr>
       ))}
       <tr className="orderDetailRow">
         <td></td>
         <td></td>
         <td className="orderDeatilColumn">Sub Total:</td>
         <td style={{ fontSize: "1.2rem" }} className="orderDeatilColumn">
           {grandTotal}
         </td>
       </tr>
       <tr className="orderDetailRow">
         <td className="orderDeatilColumn"></td>
         <td className="orderDeatilColumn"></td>
         <td className="orderDeatilColumn">Pickup Charges:</td>
         <td style={{ fontSize: "1.2rem" }} className="orderDeatilColumn">
           90
         </td>
       </tr>
       <tr className="orderDetailRow" style={{ backgroundColor: "#5861AE" }}>
         <td className="orderDeatilColumn"></td>
         <td className="orderDeatilColumn"></td>
         <td
           style={{ fontSize: "1.2rem", color: "#FFFFFF" }}
           className="orderDeatilColumn"
         >
           Total:
         </td>
         <td
           style={{ fontSize: "1.2rem", color: "#FFFFFF" }}
           className="orderDeatilColumn"
         >
           Rs {grandTotal + 90}
         </td>
       </tr>
     </table>
   </div>
   <div className="userAddressContainer">
     <h4>Address</h4>
     <div className="AdressWrapper">
       <div className="AddressContainer">
         <div className="cardHeader">
           <span>Home</span>
           <img src={tick} alt="Tick Icon" />
         </div>
         <div className="cardBody">
           <p>#223, 10th road, Jp Nagar, Bangalore</p>
         </div>
       </div>
       <div className="AddressContainer">
         <div className="cardHeader">
           <span>Other</span>
         </div>
         <div className="cardBody">
           <p>#223, 10th road, Jp Nagar, Bangalore</p>
         </div>
       </div>
       <h3>ADD NEW</h3>
     </div>
   </div>
   <button
     onClick={() => confirmClick()}
     disabled={storeAddress == "Store Location" ? true : false}
     style={{ opacity: storeAddress == "Store Location" ? "0.5" : "1" }}
     className="confirmBtn"
   >
     Confirm
   </button>
 </div> 
  );
};

export default OrderSummary;
