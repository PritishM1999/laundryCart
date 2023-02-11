import React from 'react'
import "../cancleConfirmation/CancelConfimation.css"


const CancelConfirmation = ({ cancelConfirmation, setCancelConfirmation, cancelStatus, setCancelStatus , statusCancelled , setStatusCancelled , handleStatus }) => {
  const handleCancleOnClick = () => {
    setCancelStatus(!cancelStatus)
    setCancelConfirmation(!cancelConfirmation)
    setStatusCancelled(!statusCancelled)
    handleStatus()
  }
  return (
    <div className='container-two'>
      <div className='Alert-container'>
        <div className="alert-header">
          <h3>Alert</h3>
          <button onClick={() => { setCancelConfirmation(!cancelConfirmation) }}>X</button>
        </div>
        <div className='img-msg'>
          <div className='danger'>
            <img src={require("../images/warning.png")} alt="warning" />
          </div>
          <div className='msg'>
            Are you sure want to cancel the order: 
          </div>
        </div>
        <button className='proceed-btn' onClick={handleCancleOnClick}>Proceed</button>
      </div>
    </div>
  )
}

export default CancelConfirmation