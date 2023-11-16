import React from "react";

export default function City({destination,travel_pic,overview}) {
    return (
        <div className="travel-container">
            <img src={travel_pic} alt="여행지 사진"/>
            <div className="travel-info">
                <h4>{destination}</h4>
            </div>
        </div>
    )
}