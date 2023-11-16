import React, { useState } from "react";
import HeartFull from "./HeartFull.png";
import HeartEmpty from "./HeartEmpty.png";

const HeartButton = ({ like, onClick }) => {
    return (
        <img style={{width:"30px"}} src={like?HeartFull:HeartEmpty} onClick={onClick} />
    );
};

export default HeartButton;