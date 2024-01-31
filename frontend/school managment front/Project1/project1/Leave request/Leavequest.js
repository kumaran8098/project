
import { useState } from "react";
import "./Leavequest.css"





function LeaveRequest(){
    const [Leave, Leaverequest]=useState({
        
    });

    



   

    return<div className="play8" >
        <div className="play4">
        <h1 className="play2" >Leave Request</h1>
        <div className="play3">
        <h3 className="play5" >Name:</h3>
        <input  type="text" placeholder="Enter Your Name"  className="play7"> 
        
            
        </input>
        <h3 className="play5">Leave Reason:</h3>
        <textarea placeholder="Enter Your Reason "  id="play1" >
           
        </textarea><br></br>
        <button className="play6">send</button>
        </div></div>

    </div>

}
export default LeaveRequest;