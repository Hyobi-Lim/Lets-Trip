import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Travels({index,destination,travel_pic,overview,site}) {
    return (
        <div className="travel-container">
            {index>2?
                <Link to={site} style={{textDecoration:"none", color:"black"}}>
                    <div style={{position:"relative"}}>
                        <img src={travel_pic} alt="여행지 사진" style={{borderRadius:"5px"}}/>
                    </div>
                    <div className="travel-info">
                        <div style={{fontWeight:"bold", fontSize:"30px"}}>{destination}</div>
                        <br/>
                        <div>{overview}</div>
                    </div>
                </Link>
            :
                <div style={{textDecoration:"none", color:"black"}}>
                    <div style={{position:"relative"}}>
                        <img src={travel_pic} alt="여행지 사진" style={{opacity:"0.5", borderRadius:"5px"}}/>
                        <div style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:"200px", fontSize:"24px", fontWeight:"bold", color:"white"}}>COMING SOON...</div>
                    </div>
                    <div className="travel-info">                        
                        <div style={{fontWeight:"bold", fontSize:"30px"}}>{destination}</div>
                        <br/>
                        <div>{overview}</div>
                    </div>
                </div>
            }
        </div>
        
    )
}