import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { FaHome , FaPlus , FaList} from "react-icons/fa";
import "../sidebar/SideBar.css"
const SideBar = () =>{

const navigate=useNavigate();

   const [create, SetCreate]=useState(false);
   const [past, SetPast]=useState(false);
    const orderCreate=()=>{
        SetCreate(!create);
        navigate('/createOrder');
    }

    const orderPast=()=>{
        SetPast(!past);
        navigate('/pastOrder');
    }
    return (
        <>
            <aside className="sidebar">
                <div className="home-icon">
                    <FaHome />
                </div>
                <div onClick={()=> orderCreate()} className="create-icon" style={{"backgroundColor": create? "#FFFFFF":"", "color": create? "#5861AE":"#FFFFFF"}}>
                    <FaPlus />
                </div>
                <div onClick={()=> orderPast()} className="option-icon" style={{"backgroundColor": past? "#FFFFFF":"",  "color": past? "#5861AE":"#FFFFFF"}}>
                   <FaList />
                </div>
            </aside>
        </>
    )
}

export default SideBar