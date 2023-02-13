import React, { useEffect, useState } from "react";

import search from "../../media/search.svg";
import OrderSummary from "../orderSummary/OrderSummary";
import OrderConfrimation from "../orderConfirmation/OrderConfrimation";

import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

import "./productTable.css";
import RowTable from "./RowTable";
import Footer from "../Footer/Footer";

const ProductTable = () => {
  const [products, setProduct] = useState([]);
  const [orderedProduct, setOrderedProduct] = useState([]);
  const [isSummary, setIsSummary] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState(false);
  const [searchBar, SetSearchBar] = useState("");

  const fetchProducts = async (id = "") => {
    const res = await fetch(` https://laundry-service-cart.onrender.com/product/products`, {
      method: "Get",
      mode: "cors",
    });

    const newproducts = await res.json();
    console.log(newproducts);
    setProduct(newproducts.products);
  };
  useEffect(() => {
    fetchProducts(searchBar);
  }, [searchBar]);

  // useEffect(() => {
  //     if(products && searchBar!==""){
  //       setProduct(products.filter((item)=> item.name===searchBar))
  //     }
  // }, [searchBar, products])

  // useEffect(()=>{
  //     console.log(orderedProduct);
  // },[orderedProduct]);

  const proceesClick = () => {
    if (orderedProduct.length == 0) {
      alert("Please Select Product To Order");
    } else {
      setIsSummary(!isSummary);
    }
  };

  return (
    <>
      <Header />
      <Sidebar />
      {isSummary ? (
        <OrderSummary
          orderedProduct={orderedProduct}
          setIsSummary={setIsSummary}
          isSummary={isSummary}
          setOrderConfirmation={setOrderConfirmation}
          OrderConfirmation={orderConfirmation}
        />
      ) : null}
      <div className="createOrderWrapper">
          <div className="createOrderHeader">
            <h4>Create Order</h4>
            <div className="searchBarContainer">
              <img src={search} alt="Search Icon" />
              <input
                value={searchBar}
                onChange={(e) => SetSearchBar(e.target.value)}
              />
            </div>
          </div>
          <div className="productTableWrapper">
            <table className="table">
              <thead>
                <tr>
                  <th className="TypeColumn">Product Types</th>
                  <th className="QuantityColumn">Quantity</th>
                  <th className="WashColumn">Wash Type</th>
                  <th className="PriceColumn">Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  return (
                    <RowTable
                      key={product?._id}
                      product={product}
                      setOrderedProduct={setOrderedProduct}
                      orderedProduct={orderedProduct}
                    />
                  );
                })}
              </tbody>
            </table>
            <div className="actionBtnContainer">
              <button>Cancel</button>
              <button onClick={() => proceesClick()}>Proceed</button>
            </div>
            {orderConfirmation ? <OrderConfrimation /> : null}
          </div>
        </div>
        <Footer/>
    </>
  );
};

export default ProductTable;
