import React from "react";
import ReadMoreLess from "./page/ReadMoreLess";
import ReadMoreLessCity from "./page/ReadMoreLessCity";

export default function Results({index,name,imgUrl,overview,address,localAddress,phoneNumber,latitude,longitude,
    sun,mon,tue,wed,thu,fri,sat,keywordImgUrl,id,arrive_time,depart_time,move_time,star}) {
    
    return (
        <div className="setcenter" style={{width:"1450px"}}>
            <div style={{display: 'flex', paddingLeft:'20px', paddingRight:'20px'}}>
                <div style={{paddingRight:'20px'}}>
                    <img src={imgUrl} style={{height:"420px"}} alt="도쿄"/>
                </div>
                <div className="result-info" style={{ border: '1px solid grey',textAlign:'left',backgroundColor: '#f7f7f7', borderRadius: '8px', padding: '20px' }}>
                    <div style={{ fontFamily: 'Helvetica', color: '#333' }}>
                        <div style={{ marginBottom: '', fontWeight: 'normal',fontSize: '28px', fontFamily: 'Arial'}}>0{index+1}.</div>
                        {index === 0 ? (
                        <div style={{ fontWeight: 'bold', fontSize: '32px', font: 'Arial'}}>{name}</div>
                        ) : (
                        <div style={{ fontWeight: 'bold', fontSize: '32px', font: 'Arial' }}>{name}</div>
                        )}
                        <br />
                        <div style={{ fontSize: '24px', font: 'Arial' }}>📍{address}</div>
                        <br />
                        {star===50 ? <div style={{ height: '24px', font: 'Arial', display:"flex" }}><img src="./travel_img/star.png" alt="별" /><img src="./travel_img/star.png" alt="별" /><img src="./travel_img/star.png" alt="별" /><img src="./travel_img/star.png" alt="별" /><img src="./travel_img/star.png" alt="별" /></div> : null}
                        {star===45 ? <div style={{ height: '24px', font: 'Arial', display:"flex" }}><img src="./travel_img/star.png" alt="별" /><img src="./travel_img/star.png" alt="별" /><img src="./travel_img/star.png" alt="별" /><img src="./travel_img/star.png" alt="별" /><img src="./travel_img/halfStar.png" alt="별" /></div> : null}
                        {star===40 ? <div style={{ height: '24px', font: 'Arial', display:"flex" }}><img src="./travel_img/star.png" alt="별" /><img src="./travel_img/star.png" alt="별" /><img src="./travel_img/star.png" alt="별" /><img src="./travel_img/star.png" alt="별" /></div> : null}
                        {star===35 ? <div style={{ height: '24px', font: 'Arial', display:"flex" }}><img src="./travel_img/star.png" alt="별" /><img src="./travel_img/star.png" alt="별" /><img src="./travel_img/star.png" alt="별" /><img src="./travel_img/halfStar.png" alt="별" /></div> : null}
                        {star===30 ? <div style={{ height: '24px', font: 'Arial', display:"flex" }}><img src="./travel_img/star.png" alt="별" /><img src="./travel_img/star.png" alt="별" /><img src="./travel_img/star.png" alt="별" /></div> : null}
                        {star===25 ? <div style={{ height: '24px', font: 'Arial', display:"flex" }}><img src="./travel_img/star.png" alt="별" /><img src="./travel_img/star.png" alt="별" /><img src="./travel_img/halfStar.png" alt="별" /></div> : null}
                        {star===20 ? <div style={{ height: '24px', font: 'Arial', display:"flex" }}><img src="./travel_img/star.png" alt="별" /><img src="./travel_img/star.png" alt="별" /></div> : null}
                        {star===15 ? <div style={{ height: '24px', font: 'Arial', display:"flex" }}><img src="./travel_img/star.png" alt="별" /><img src="./travel_img/halfStar.png" alt="별" /></div> : null}
                        {star===10 ? <div style={{ height: '24px', font: 'Arial', display:"flex" }}><img src="./travel_img/star.png" alt="별" /></div> : null}
                        {star===5 ? <div style={{ height: '24px', font: 'Arial', display:"flex" }}><img src="./travel_img/halfStar.png" alt="별" /></div> : null}
                        <br />
                        <div style={{ fontSize: '24px', font: 'Arial' }}>{overview}</div>
                        <br />
                    </div>
                </div>
            </div>
            <br/>
            <div style={{}}>
        <div style={{display:"flex", padding:"0px 20px"}} className="setcenter">
        <div style={{fontSize:"26px", width:"700px"}}>
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
            <br/>
        </div>
    )
}