import React, { useState } from "react";
import { UserEmail } from "./ApiService";
import { city } from "./Export";
import { Button } from "react-bootstrap";

function ReadMoreLessCity({name,address,localAddress,phoneNumber,latitude,longitude,
  sun,mon,tue,wed,thu,fri,sat,keywordImgUrl,id,arrive_time,depart_time,move_time}) {
  const [isShowMore, setIsShowMore] = useState(false);

  const [emailName, setEmailName] = useState({
    email: localStorage.getItem(UserEmail),
    name: name,
    city: city[0]
  });

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
    fetch('http://letstrip.shop:5000/to_update', {  // <-- Change the URL here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify(emailName)
      })
      .then(response => response.json())
  };

  return (
    <div>
      {isShowMore && (
        <div style={{}}>
        <div style={{display:"flex", padding:"0px 20px"}} className="setcenter">
        <div style={{fontSize:"26px"}}>
          <div>
            {name==="간사이 공항"||name==="오사카 국제공항"?
              null
            :
            <div className="result-info" style={{paddingRight:'20px'}}>
              <img src={keywordImgUrl} style={{height:"350px"}} alt="도쿄"/>
            </div>
            }
          </div>
          <br/>
            <div style={{marginRight:"20px", textAlign:"left", fontFamily:"Arial, sans-serif"}}>
            <br/>
              <div style={{fontWeight: "bold", paddingBottom: "10px"}}>주소</div> <div>: {address}</div>
              <br/>
              <div style={{fontWeight: "bold", paddingBottom: "10px"}}>현지주소</div><div> : {localAddress}</div>
              <br/>
              <div style={{fontWeight: "bold", paddingBottom: "10px"}}>전화번호</div><div> : {phoneNumber}</div>
            </div>
            <br/>
        </div>
            <div style={{fontSize: "40px", padding:"25px",fontFamily:"Arial, sans-serif", border: "1px solid grey",borderRadius:"5px"}}>
              <div style={{fontWeight:"bold"}}>운영시간</div>
              <br/>
              <div>일요일 : {sun}</div>
              <br/>
              <div>월요일 : {mon}</div>
              <br/>
              <div>화요일 : {tue}</div>
              <br/>
              <div>수요일 : {wed}</div>
              <br/>
              <div>목요일 : {thu}</div>
              <br/>
              <div>토요일 : {fri}</div>
              <br/>
              <div>금요일 : {sat}</div>
            </div>
        </div>
        <br/>
      </div>
      )}
      <div className="setcenter" style={{marginTop:"-30px"}}>
        <Button className="button" onClick={toggleReadMoreLess}>
          {isShowMore ? "접기" : "더보기"}
        </Button>
      </div>
    </div>
  );
}

export default ReadMoreLessCity;