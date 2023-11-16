import React from "react";
import Header from './Header';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { myResult } from "./SurveyPage";
import { UserEmail } from "./ApiService";
import { useState } from "react";
import Loading from "./Loading";
import { city } from "./Export";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import Result from "../Result";
import ShowMap from "./ShowMap";
import { resultdummy } from "../../resultdummy";

SwiperCore.use([Navigation, Pagination])

const otherLocations = [];
  for (let i = 0; i < resultdummy.length; i++) {
    const locations = [];
    for (let j = 0; j < resultdummy[i].length; j++) {
      locations.push({
        latitude: resultdummy[i][j].latitude,
        longitude: resultdummy[i][j].longitude
      });
    }
  otherLocations.push(locations);
}

const myFavorite = [];
  for (let i = 0; i < resultdummy.length; i++) {
    const favorites = [];
    for (let j = 0; j < resultdummy[i].length; j++) {
      favorites.push({
        id: resultdummy[i][j].id,
        arrive_time: resultdummy[i][j].arrive_time,
        depart_time: resultdummy[i][j].depart_time,
        move_time: resultdummy[i][j].move_time
      });
    }
    myFavorite.push(favorites);
}

export default function ResultPage() {
  if(myResult[0]) {
    otherLocations.length=0;
    for (let i = 0; i < myResult[0].length; i++) {
      const locations = [];
      for (let j = 0; j < myResult[0][i].length; j++) {
        locations.push({
          latitude: myResult[0][i][j].latitude,
          longitude: myResult[0][i][j].longitude
        });
      }
      otherLocations.push(locations);
    }
  
    for (let i = 0; i < myResult[0].length; i++) {
      const favorites = [];
      for (let j = 0; j < myResult[0][i].length; j++) {
        favorites.push({
          id: myResult[0][i][j].id,
          arrive_time: myResult[0][i][j].arrive_time,
          depart_time: myResult[0][i][j].depart_time,
          move_time: myResult[0][i][j].move_time
        });
      }
      myFavorite.push(favorites);
    }
  }

  console.log('제발',myResult[0]);
  console.log('위경',otherLocations);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [answers, setAnswers] = useState({
    email: localStorage.getItem(UserEmail),
    city: city[0]
  });
  

  const gomainpage = () => {
    navigate("/");
  };

  const sendFavorite = (index) => {
    console.log('MyFavorite:', myFavorite);
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    let options = {
      headers: {"Content-Type":"application/json",
        "Authorization":"Bearer "+accessToken
      },
      url:'http://letstrip.shop:8080/scrap/save',
      method:"POST",
    }
    options.body = JSON.stringify(myFavorite[index]);
    console.log('헤더:', options);
    fetch(options.url,options)
    .then(response => response)
    .then(response => {alert("해당 코스가 저장되었습니다!")});
  };

  const rehandleSubmit = async (e) => {
    console.log('재조회 시작')
    myResult.length=0;
    setLoading(true);
    e.preventDefault();
    console.log('Answers:', answers);
    await fetch('http://letstrip.shop:5000/test_re_final', {  // <-- Change the URL here
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(answers)
    })
    .then(response => response.json())
    .then(response => myResult.push(response))
    .then(response => console.log('재조회 전부',myResult))
    .then(response => console.log('재조회',myResult[0]))
    .catch(error => console.error('Error:', error));
    setLoading(false);
    navigate("/resultpage")
  };

  return (
    <div className="App">
      <Header/>
      <div className="main-title">여행 일정을 확인해주세요!</div> 
      {/*{loading ? (<Loading/>) : (
        <div style={{backgroundColor:"#f5f5f7", position:"relative"}}>
          <Slider>
            {
              myResult[0].map((items,index) => {
                return(
                  <div className="setcenter">
                    <br/>
                    <div style={{fontSize:"40px", fontStyle:"oblique", fontWeight:"bold"}}>
                      {index+1}일차 여행코스
                    </div>
                    <br/>
                    <div className="setcenter" style={{display:"", alignItems:"flex-start"}}>
                      <div style={{padding:"0px 20px", paddingBottom:"20px"}}>
                        <ShowMap SO={otherLocations[index]}/>
                      </div>
                      <br/>
                      <div>
                        {
                          items.map((item,index) => {
                            return(
                              <Result
                                index={index}
                                name={item.name}
                                imgUrl={item.imgUrl}
                                overview={item.overview}
                                address={item.address}
                                localAddress={item.localAddress}
                                phoneNumber={item.phoneNumber}
                                latitude={item.latitude}
                                longitude={item.longitude}
                                sun={item.sun}
                                mon={item.mon}
                                tue={item.tue}
                                wed={item.wed}
                                thu={item.thu}
                                fri={item.fri}
                                sat={item.sat}
                                keywordImgUrl={item.keywordImgUrl}
                                id={item.id}
                                arrive_time={item.arrive_time}
                                depart_time={item.depart_time}
                                move_time={item.move_time}
                                star={item.star}
                              />
                            )
                          })
                        }
                      </div>
                    </div>
                    <div style={{display:"flex", width:"550px", align:"center"}} className="setcenter">
                      <div className="setcenter" style={{marginTop:""}}>
                        <Button className="button" variant="primary" type="submit" onClick={(e)=>{sendFavorite(index)}}>
                          코스 저장하기
                        </Button>
                      </div>
                      <div className="setcenter">
                        <Button className="button" variant="primary" type="submit" onClick={rehandleSubmit}>
                          경로 재검색
                        </Button>
                      </div>
                      <div className="setcenter">
                        <Button className="button" variant="primary" type="submit" onClick={gomainpage}>
                          메인 페이지
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </Slider>
        </div>
      )}*/}
      <div style={{backgroundColor:"#f5f5f7", position:"relative"}}>
        <Slider>
          {
            resultdummy.map((items,index) => {
              return(
                <div className="setcenter">
                  <br/>
                  <div style={{fontSize:"40px", fontStyle:"oblique", fontWeight:"bold"}}>
                    {index+1}일차 여행코스
                  </div>
                  <br/>
                  <div className="setcenter" style={{display:"", alignItems:"flex-start"}}>
                    <div style={{padding:"0px 20px", paddingBottom:"20px"}}>
                      <ShowMap SO={otherLocations[index]}/>
                    </div>
                    <br/>
                    <div>
                      {
                        items.map((item,index) => {
                          let location = {latitude: item.latitude, longitude : item.longitude}
                          otherLocations.push(location)
                          return(
                            <Result
                              index={index}
                              name={item.name}
                              imgUrl={item.imgUrl}
                              overview={item.overview}
                              address={item.address}
                              localAddress={item.localAddress}
                              phoneNumber={item.phoneNumber}
                              latitude={item.latitude}
                              longitude={item.longitude}
                              sun={item.sun}
                              mon={item.mon}
                              tue={item.tue}
                              wed={item.wed}
                              thu={item.thu}
                              fri={item.fri}
                              sat={item.sat}
                              keywordImgUrl={item.keywordImgUrl}
                              id={item.id}
                              arrive_time={item.arrive_time}
                              depart_time={item.depart_time}
                              move_time={item.move_time}
                              star={item.star}
                            />
                          )
                        })
                      }
                    </div>
                  </div>
                  <div style={{display:"flex", width:"550px", align:"center"}} className="setcenter">
                    <div className="setcenter" style={{marginTop:""}}>
                      <Button className="button" variant="primary" type="submit" onClick={(e)=>{sendFavorite(index)}}>
                        코스 저장하기
                      </Button>
                    </div>
                    <div className="setcenter">
                      <Button className="button" variant="primary" type="submit" onClick={rehandleSubmit}>
                        경로 재검색
                      </Button>
                    </div>
                    <div className="setcenter">
                      <Button className="button" variant="primary" type="submit" onClick={gomainpage}>
                        메인 페이지
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  );
}