import React from "react";
import ReadMoreLess from "./page/ReadMoreLess";

export default function ResultNoHeart({index,name,imgUrl,overview,address,localAddress,phoneNumber,latitude,longitude,
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
            <ReadMoreLess
                name={name} address={address} localAddress={localAddress} phoneNumber={phoneNumber}
                latitude={latitude} longitude={longitude} keywordImgUrl={keywordImgUrl}
                sun={sun} mon={mon} tue={tue} wed={wed} thu={thu} fri={fri} sat={sat}
                id={id} arrive_time={arrive_time} depart_time={depart_time} move_time={move_time}/>
            <br/>
        </div>
    )
}