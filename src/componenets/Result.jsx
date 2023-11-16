import React from "react";
import ReadMoreLess from "./page/ReadMoreLess";
import HeartButton from "./page/HeartButton";
import { useState } from "react";
import { UserEmail } from "./page/ApiService";
import { city } from "./page/Export";

export default function Result({index,name,imgUrl,overview,address,localAddress,phoneNumber,latitude,longitude,
    sun,mon,tue,wed,thu,fri,sat,keywordImgUrl,id,arrive_time,depart_time,move_time,star}) {

    const [like, setLike] = useState(false)

    const [emailName, setEmailName] = useState({
        email: localStorage.getItem(UserEmail),
        name: name,
        city: city[0]
    });

    const toggleLike = (name) => {
        setLike(!like)
        const accessToken = localStorage.getItem("ACCESS_TOKEN");
        if(like) {
            let options = {
            headers: {"Content-Type":"application/json",
            "Authorization":"Bearer "+accessToken
            },
            url:'http://letstrip.shop:8080/scrap/spot/delete',
            method:"DELETE",
            }
            const favoritename=[]
            favoritename.push({"name": name})
            options.body = JSON.stringify(favoritename[0]);
            fetch(options.url,options)
            .then(response => response.json())
            .then(response => console.log('좋아요 취소 결과',options.body))
            .then(response => {alert("해당 여행지가 취소되었습니다!")});
        }
        else {
            let options = {
            headers: {"Content-Type":"application/json",
            "Authorization":"Bearer "+accessToken
            },
            url:'http://letstrip.shop:8080/scrap/spot/save',
            method:"POST",
            }
            const favoritename=[]
            favoritename.push({"name": name})
            options.body = JSON.stringify(favoritename[0]);
            fetch(options.url,options)
            .then(response => response.json())
            .then(response => {
                if(response.error==='already exist')
                    {alert("이미 저장된 여행지 입니다!")}
                else
                    {alert("해당 여행지가 저장되었습니다!")}
            })
            fetch('http://letstrip.shop:5000/to_update_scrap', {  // <-- Change the URL here
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(emailName)
            })
            .then(response => response.json())
        }
    }
    
    return (
        <div className="setcenter" style={{width:"1450px"}}>
            <div style={{display: 'flex', paddingLeft:'20px', paddingRight:'20px'}}>
                <div style={{paddingRight:'20px',paddingTop:"195px"}}>
                    <HeartButton like={like} onClick={(e)=>{toggleLike(name)}}/>
                </div>
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