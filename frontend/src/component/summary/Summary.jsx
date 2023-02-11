import React, { useEffect, useState } from "react";

import "../summary/Summary.css";

const Summary = ({ setIsSummary, isSummary, summaryData , cancelButton , setCancelButton , cancelConfirmation , setCancelConfirmation}) => {
  const [storeAddress, setStoreAddress] = useState("Banglore");
  const [grandTotal, setGrantTotal] = useState(0);


  useEffect(() => {
    setGrantTotal(0);
    for (let i = 0; i < summaryData.orderItems.length; i++) {
      setGrantTotal((prevValue) => prevValue + summaryData.orderItems[i].totalPrice);
    }
  }, []);
  const handle = () =>{
    setCancelConfirmation(!cancelConfirmation)
    setCancelButton(!cancelButton)
    setIsSummary(!isSummary)
  }

  return (
    <div className="summary-container">
      <div className="summary-header">
        <h3>Summary</h3>
        <button onClick={() => { setIsSummary(!isSummary) }}>X</button>
      </div>
      <div className="subHeader">
        <div className="subHeader-one">
          <div className="location">Store location</div>
          <div className="address">Store Address</div>
          <div className="phone">Phone</div>
        </div>
        <div className="subHeader-two">
          <div>{summaryData.storeLocation}</div>
          <div>{storeAddress}</div>
          <div>{summaryData.storePhone}</div>
        </div>
      </div>
      <div className="status">
        <div className="tick1">
          <img src={require("../images/1816356.png")} alt="tick" height="50px" width="50px" />
          <span>Picked up</span>
          <div className="stick"></div>
        </div>
        <div className="tick1">
          <img src={require("../images/1816356.png")} alt="tick" height="50px" width="50px" />
          <span>Washed</span>
          <div className="stick"></div>
        </div>
        <div className="tick1">
          <img src={require("../images/1816356.png")} alt="tick" height="50px" width="50px" />
          <span>Ironed</span>
          <div className="stick3"></div>
        </div>
        <div className="tick1">
          <img src={require("../images/1816356.png")} alt="tick" height="50px" width="50px" />
          <span>Delivered</span>
          
        </div>
      </div>
      <div className="order-details">
        <h4>Order Details</h4>
        <div className="orderDetails-table">
        <table className="postOrderDetailTableContainer">
         {summaryData.orderItems.map((item) => (
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
      </div>
      <p className="Add">Address</p>
      <div className="add">
        <h4>home</h4>
        <p>#233 , 10th road , JP nagar , Banglore</p>
      </div>
        {cancelButton ? <button className="cancel-btn" onClick={handle}>Cancel Order</button>:null}
     
    </div>
  );
};

export default Summary;
