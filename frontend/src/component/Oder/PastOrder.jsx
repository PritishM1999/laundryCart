import React, {  useEffect, useState } from 'react'
import { FaSearch, FaEye } from 'react-icons/fa';
import "../Oder/PastOrder.css"
import Summary from '../summary/Summary';
import CancelConfirmation from '../cancleConfirmation/CancelConfirmation';
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import SideBar from '../sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
import moment from "moment";
const PastOrder = () => {
    const navigate = useNavigate()
    const [orderDetails, setOrderDetails] = useState([])
    const [summaryData , setSummaryData] = useState([])
    const [isSummary , setIsSummary] = useState(false)
    const [cancelStatus , setCancelStatus] = useState(true)
    const [cancelButton , setCancelButton] = useState(false); 
    const [cancelConfirmation , setCancelConfirmation] = useState(false)  
    const [statusCancelled , setStatusCancelled] = useState(false)
    const [id , setId] = useState("")
    const [queryId , setQueryId] = useState("")
    const fetchData = async () => {
        const res = await fetch('http://localhost:4000/order/orders', {
            method: "Get",
            mode: "cors",
        });

        const newproducts = await  res.json();
        setOrderDetails(newproducts.products)
    } 
    useEffect(() =>{
        fetchData()
    } ,[])
    // useEffect(() => {
    //     fetchData()
    // }, [])
    // 
    const handleView = (id) =>{
        const data = orderDetails.find((ele) =>{
            return ele._id === id
        })
            setSummaryData(data)
            setIsSummary(!isSummary)
    }

    const handleCancel = (id) =>{
        const cancelOrderDetails = orderDetails.find((ele) =>{
            return ele._id === id
        })
        
        setIsSummary(!isSummary)
        setSummaryData(cancelOrderDetails)
        setCancelButton(!cancelButton)
        setId(id)
    }

    const handleStatus = () =>{
        const updateStatus = orderDetails.find((ele) =>{
            return ele._id == id
        })
        updateStatus.status= "Cancelled"
        console.log(updateStatus.status)
    }
   const handleOnClickQuery = (query) =>{
    const newOrderDetails = orderDetails.find((item) =>{
        return item._id[item._id.length -1] === query[query.length-1]
    })
    setOrderDetails([newOrderDetails])
   }
   const handleCreateBtn = () =>{
    navigate("/createOrder")
   }
    return (
        <>
        <Header />
           <SideBar />
            <div className='container'>
                <div className='orders'>
                    Orders | {orderDetails?.length}
                </div>
                <div className='create-search'>
                    <div className='create'>
                        <button className='create-btn' onClick={handleCreateBtn}>create</button>
                    </div>
                    <div className='search'>
                        <input type="text" onChange={(e) =>{setQueryId(e.target.value)}} />
                        <button onClick={() =>{handleOnClickQuery(queryId)}}>
                            <FaSearch />
                        </button>
                    </div>
                </div>
                <div className='t'>
                    <table className='pastOrdertable'>
                        <thead>
                            <tr>
                                <th>Order Id</th>
                                <th>Order Date & Time</th>
                                <th>Store location</th>
                                <th>City</th>
                                <th>Store Phone</th>
                                <th>Total Items</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th></th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                                {orderDetails.map((item , index) =>{
                                  let date = moment(item.orderDate).format('DD-MMM-YYYY , hh:mm' );
                                    console.log(date)
                                    return(
                                        <tr key={index}>
                                            <td>ORD{item._id[item._id.length -1]}</td>
                                            <td>{date}</td>
                                            <td>{item.storeLocation}</td>
                                            <td>{item.storeCity}</td>
                                            <td>{item.storePhone}</td>
                                            <td>{item.orderItems.length}</td>
                                            <td>{item.price}</td>
                                            {item.status == "Cancelled" ? <td className='red'>{item.status}</td>:<td>{item.status}</td> }
                                            <td>{item.status === "Ready to pickup" ? <button className='link-cancel' onClick={() =>{handleCancel(item._id)}}>Cancel Order</button>: null}</td>
                                            <td>
                                                 <button onClick={() =>{handleView(item._id)}}>
                                                          <FaEye />
                                                 </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            
                        </tbody>
                    </table>
                </div>
                {isSummary ? <Summary summaryData={summaryData} setIsSummary={setIsSummary} isSummary={isSummary} cancelButton={cancelButton} setCancelButton={setCancelButton} setCancelConfirmation={setCancelConfirmation}  /> : null}
                {cancelConfirmation ? <CancelConfirmation cancelConfirmation={cancelConfirmation} setCancelConfirmation={setCancelConfirmation} cancelStatus={cancelStatus} setCancelStatus={setCancelStatus} statusCancelled={statusCancelled} setStatusCancelled={setStatusCancelled} handleStatus={handleStatus} /> : null}
            </div>
           <Footer />
        </>

    )
}

export default PastOrder