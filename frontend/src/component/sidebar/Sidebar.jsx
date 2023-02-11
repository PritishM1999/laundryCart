import React from "react";
import { FaHome , FaPlus , FaList} from "react-icons/fa";
import "../sidebar/SideBar.css"
const SideBar = () =>{
    return (
        <>
            <aside className="sidebar">
                <div className="home-icon">
                    <FaHome />
                </div>
                <div className="create-icon">
                    <FaPlus />
                </div>
                <div className="option-icon">
                   <FaList />
                </div>
            </aside>
        </>
    )
}

export default SideBar