import React, { useEffect, useState } from "react";

import ironingOff from "../../media/ironing.svg";
import ironingOn from "../../media/ironing (1).svg";
import washingOn from "../../media/washing-machine (1).svg";
import washingOff from "../../media/washing-machine.svg";
import chemicalOn from "../../media/bleach (1).svg";
import chemicalOff from "../../media/bleach.svg";
import Dry from "../../media/towel.svg";


import tshirts from "../../media/tshirts.png"
import shirts from "../../media/shirts.png"
import trouser from "../../media/trouser.png"
import jeans from "../../media/jeans.png"
import boxers from "../../media/boxers.png"
import joggers from "../../media/joggers.png"
import others from "../../media/others.png"



import "./productTable.css";

const RowTable = ({ product, setOrderedProduct, orderedProduct }) => {
  const [quantity, setQuantity] = useState(0);

  const [ironing, setIroning] = useState(false);
  const [washing, setWashing] = useState(false);
  const [dry, setDry] = useState(false);
  const [chemical, setChemical] = useState(false);
  const [price, setPrice] = useState(0);
  const [updatedObject, setUpdatedObject] = useState({
    id: product._id,
    name: product.name,
    quantity: "",
    price: "",
    totalPrice: "",
    operationType: [],
  });

  useEffect(() => {
    setUpdatedObject({
      ...updatedObject,
      price: price,
      quantity: quantity,
      totalPrice: quantity * price,
    });
    if (quantity * price > 0) {
      const index = orderedProduct.findIndex(
        (item) => item.id == updatedObject.id
      );
      if (index !== -1) {
        setOrderedProduct(
          orderedProduct.map((item) =>
            {
              if(item.id==updatedObject.id){
                 return {...item, price:price, quantity:quantity, totalPrice:price*quantity}
              }else{
                return item;
              }
            }
          )
        );
      } else {
        orderedProduct.push({
          ...updatedObject,
          price: price,
          quantity: quantity,
          totalPrice: quantity * price,
        });
      }
    }
  }, [quantity, ironing, chemical, dry, washing, price,orderedProduct]);

  useEffect(() => {
    if (ironing) {
      setOrderedProduct(
        orderedProduct.map((item) =>
          item.id == updatedObject.id
            ? { ...item, item: item.operationType.push("Ironing") }
            : item
        )
      );
    } else {
      setOrderedProduct(
        orderedProduct.map((item) =>
          item.id == updatedObject.id
            ? {
                ...item,
                operationType: item.operationType.filter(
                  (washItem) => washItem != "Ironing"
                ),
              }
            : item
        )
      );
    }
  }, [ironing]);

  useEffect(() => {
    if (washing) {
      setOrderedProduct(
        orderedProduct.map((item) =>
          item.id == updatedObject.id
            ? { ...item, item: item.operationType.push("Washing") }
            : item
        )
      );
    } else {
      setOrderedProduct(
        orderedProduct.map((item) =>
          item.id == updatedObject.id
            ? {
                ...item,
                operationType: item.operationType.filter(
                  (washItem) => washItem != "Washing"
                ),
                item: item.operationType.length,
              }
            : item
        )
      );
    }
  }, [washing]);

  useEffect(() => {
    if (dry) {
      setOrderedProduct(
        orderedProduct.map((item) =>
          item.id == updatedObject.id
            ? { ...item, item: item.operationType.push("Dry Cleaning") }
            : item
        )
      );
    } else {
      setOrderedProduct(
        orderedProduct.map((item) =>
          item.id == updatedObject.id
            ? {
                ...item,
                operationType: item.operationType.filter(
                  (washItem) => washItem != "Dry Cleaning"
                ),
              }
            : item
        )
      );
    }
  }, [dry]);

  useEffect(() => {
    if (chemical) {
      setOrderedProduct(
        orderedProduct.map((item) =>
          item.id == updatedObject.id
            ? { ...item, item: item.operationType.push("Chemical Wash") }
            : item
        )
      );
    } else {
      setOrderedProduct(
        orderedProduct.map((item) =>
          item.id == updatedObject.id
            ? {
                ...item,
                operationType: item.operationType.filter(
                  (washItem) => washItem != "Chemical Wash"
                ),
              }
            : item
        )
      );
    }
  }, [chemical]);

  const addPrice = (type) => {
    switch (type) {
      case "Washing":
        return product.operation.filter((item) => item.operationName == type)[0]
          .operationPrice;
      case "Ironing":
        return product.operation.filter((item) => item.operationName == type)[0]
          .operationPrice;
      case "Dry Cleaning":
        return product.operation.filter((item) => item.operationName == type)[0]
          .operationPrice;
      case "Chemical Wash":
        return product.operation.filter((item) => item.operationName == type)[0]
          .operationPrice;
      default:
        return setPrice(price);
    }
  };

  const resetOrder = () => {
    setQuantity(0);
    setPrice(0);
    setChemical(false);
    setWashing(false);
    setDry(false);
    setIroning(false);
    setOrderedProduct(
      orderedProduct.filter((item) => item.id != updatedObject.id)
    );
    setUpdatedObject({
      id: product._id,
      name: product.name,
      quantity: "",
      price: "",
      totalPrice: "",
      operationType: [],
    });
  };



  const imgSetter=()=>{
    switch(product.name){
       case 'T Shirts':
          return tshirts;
       case 'Shirts':
          return shirts;   
       case 'Trouser':
          return trouser;
       case 'Jeans':
          return jeans;
       case 'Boxers':
          return boxers;
       case 'Joggers':
          return joggers;
       default:
          return others;       

    }
  }

  return (
    <tr className="rowContainer">
      <td className="TypeColumn">
        <div className="productTypeContainer">
           <img src={imgSetter()} alt="Product Icon" width="45px" height="45px"/>
        <div className="productTypeNameDescription">
            <span
              style={{"color": washing||ironing||dry||chemical||quantity!=0? "#5861AE":"#1D2022" }}
              >{product.name}
            </span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel mattis purus</span>
        </div>
        </div>
      </td>
      <td className="QuantityColumn">
        <input
          className="QuantityColumnRow"
          value={quantity}
          onChange={(e) => {
            {
              e.target.value == ""
                ? setQuantity(0)
                : setQuantity(parseInt(e.target.value));
            }
          }}
        />
      </td>
      <td className="WashColumn WashColumnRow">
        <img
          src={!washing ? washingOff : washingOn}
          onClick={() => {
            setWashing(!washing);
            {
              washing && quantity !== 0
                ? setPrice(price - addPrice("Washing"))
                : setPrice(price + addPrice("Washing"));
            }
          }}
        />
        <img
          src={!ironing ? ironingOff : ironingOn}
          onClick={() => {
            setIroning(!ironing);
            {
              ironing
                ? setPrice(price - addPrice("Ironing"))
                : setPrice(price + addPrice("Ironing"));
            }
          }}
        />
        <img
          src={!dry ? Dry : Dry}
          onClick={() => {
            setDry(!dry);
            {
              dry
                ? setPrice(price - addPrice("Dry Cleaning"))
                : setPrice(price + addPrice("Dry Cleaning"));
            }
          }}
        />
        <img
          src={!chemical ? chemicalOff : chemicalOn}
          onClick={() => {
            setChemical(!chemical);
            {
              chemical
                ? setPrice(price - addPrice("Chemical Wash"))
                : setPrice(price + addPrice("Chemical Wash"));
            }
          }}
        />
      </td>
      <td className="PriceColumn PriceColumnRow">
        {!quantity == 0 && (ironing || washing || dry || chemical) ? (
          <div style={{"display":"flex", "justifyContent":"space-between"}}>
            <div style={{"width":"70%","display":"flex", "justifyContent":"space-evenly", "alignItems":"center" }}>
            <span style={{"color":"#221919","fontSize":"18px"}}>{quantity}</span>
            <span style={{"color":"#221919","fontSize":"18px"}}>X</span>
            <span style={{"color":"#221919","fontSize":"18px"}}>{price}</span>
            <span  style={{"color":"#221919","fontSize":"18px"}}>=</span>
            <span  style={{"color":"#5861AE","fontSize":"24px"}}>{quantity * price}</span>
            </div>
            <button className="resetPriceBtn" onClick={() => resetOrder()}>Reset</button>
          </div>
        ) : (
          "--"
        )}
      </td>
    </tr>
  );
};

export default RowTable;
