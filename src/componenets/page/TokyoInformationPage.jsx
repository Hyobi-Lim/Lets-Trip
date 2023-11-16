import React from "react";
import { Link } from "react-router-dom";
import City from "../City";
import Header from './Header';
import { TokyoCitydummy } from "../../TokyoCitydummy";

function TokyoInformationPage(){
    return (
        <div>
          <Header/>
          <div className="main-title">도쿄</div>
          <br/>
          <div className="city-explanation-container" style={{display: 'flex'}}>
            <img src="travel_img/tokyo.jpg" alt="도쿄" style={{borderRadius:"5px"}}/>
            <div style={{whiteSpace:'pre-wrap'}}>도쿄도 일본의 수도이다. 혼슈 동부에 있는 도쿄 광역권의 핵심 도시이자 일본의 중심지이다. 
              도쿄도만 놓고 보면 인구는 약 1,400만 명이며, 이 중 구 도쿄시 지역인 23개 특별구의 인구는 약 970만 명이다. 도쿄를 중심으로 일본 수도권이 형성되어 있으며, 수도권까지 포함하면 산출 기준에 따라 2020년대 기준 약 4,350만 명까지 올라간다. 도쿄를 중심으로 한 일본의 수도권은 세계 최대의 교통 인프라를 형성하고 있고, 세계에서 다국적 대기업의 본사가 가장 많은 도시이기도 하다. 또한 도쿄는 뉴욕, 런던과 함께 세계 3대 도시로 불리기도 한다.
              먼 과거에는 무사시노쿠니의 도시마군이었지만, 11세기 헤이안 시대 후반부터 에도라고 불렸다. 전국 시대까지는 작은 해안 마을이었으나 도쿠가와 이에야스가 에도 막부를 세우게 되었고, 간척과 함께 도시를 세우고 상업을 발전시키면서 일본의 핵심 도시가 되었다. 당대에는 계속 에도라는 이름으로 불렸다. 1868년 에도를 일컬어 도쿄라 한다는 조서를 내려 현재의 이름으로 바꾸었다.
            </div>
          </div>
          <div className="main-title" style={{backgroundColor:"#f5f5f7"}}>인기 여행지</div>
          <div className="app-container">
            {
              TokyoCitydummy.map((item)=>{
                return(
                  <City
                    destination={item.destination}
                    travel_pic={item.travel_pic}
                  />
                )
              })
            }
          </div>
          <Link to="/surveypagetokyo" style={{textDecoration:"none", color:"black", borderRadius:"5px", boxShadow:"3px 3px 5px rgba(0, 0, 0, 0.1)"}}><div className="city-decision">코스 짜러 가기</div></Link>
        </div>
      );
}

export default TokyoInformationPage;