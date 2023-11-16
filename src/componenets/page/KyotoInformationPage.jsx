import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import City from "../City";
import { citydummy } from "../../citydummy";
import Header from './Header';

function KyotoInformationPage(){
    return (
        <div>
          <Header/>
          <div className="main-title">교토</div>
          <div className="city-explanation-container" style={{display: 'flex'}}>
                <img src="travel_img/kyoto.jpg" alt="도쿄"/>
                <div style={{whiteSpace:'pre-wrap'}}>교토는 수백 개의 신사와 사찰, 봄이면 만개하는 벚꽃으로 관광객의 사랑을 한몸에 받고 있는 도시입니다. 교토의 3면을 둘러싼 산맥과 도시를 가로질러 흐르는 가모가와 강에서는 아름다운 자연경관을 감상하실 수 있죠. 동쪽으로는 자갈길을 따라 수백 년의 세월이 그대로 녹아든 건물이 자리해 있어 옛 교토의 모습을 가늠해 보실 수도 있어요.
                정갈하고 맛있는 요리와 계절에 따라 변하는 풍경, 그리고 옛 전통문화를 체험해 보세요. 인기 명소인 기온에서는 이른 저녁 오차야로 발걸음을 재촉하는 게이샤와 전통복을 차려입고 일터로 향하는 현지 주민들의 모습을 쉽게 볼 수 있죠. 교토는 아름다운 일본식 정원으로도 유명한데요. 많은 정원에 식당이 딸려 있어 다도에서 내오는 전통 교요리를 맛보실 수 있어요.
                </div>
          </div>
          <div className="main-title">인기 여행지</div>
          <div className="app-container">
            {
              citydummy.map((item)=>{
                return(
                  <City
                    destination={item.destination}
                    travel_pic={item.travel_pic}
                  />
                )
              })
            }
          </div>
          <Link to="/surveypage" style={{textDecoration:"none", color:"black"}}><div className="city-decision">코스 짜러 가기</div></Link>
        </div>
      );
}

export default KyotoInformationPage;