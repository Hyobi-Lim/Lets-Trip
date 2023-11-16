import React from "react";
import { Link } from "react-router-dom";
import City from "../City";
import { citydummy } from "../../citydummy";
import Header from './Header';

function SapporoInformationPage(){
    return (
        <div>
          <Header/>
          <div className="main-title">삿포로</div>
          <div className="city-explanation-container" style={{display: 'flex'}}>
                <img src="travel_img/sapporo.jpg" alt="도쿄"/>
                <div style={{whiteSpace:'pre-wrap'}}>홋카이도는 일본에서 유일하게 냉대습윤 기후에 속하는 지역이다. 3월이 되어도 곳곳에 눈이 쌓여 있으며, 골든위크인 4월 말~5월 초에 벚꽃이 피기 시작한다. 삿포로의 여름은 사계절 중 가장 짧다. 7월이 되어야 라일락이 피기 시작하는 반면, 8월 중순이 지나면 선선한 가을 기운이 느껴진다. 9월이 되면 온도가 순식간에 떨어지며 가을이 온다. 10월에 단풍이 들기 시작해 10월 중순이 넘어가면 겨울이 찾아온다. 11월에 첫눈이 내리는 경우도 있다. 12월에 접어들면 본격적으로 눈이 내리기 시작하고 스키장이 개장한다. 12월부터 2월까지 지속되는 겨울은 삿포로에서 가장 긴 계절로 눈과 얼음을 즐기기 위한 다양한 행사가 연일 열린다.
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

export default SapporoInformationPage;