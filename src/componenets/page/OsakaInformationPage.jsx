import React from "react";
import { Link } from "react-router-dom";
import City from "../City";
import Header from './Header';
import { OsakaCitydummy } from "../../OsakaCitydummy";

function OsakaInformationPage(){
    return (
        <div>
          <Header/>
          <div className="main-title">오사카</div>
          <br/>
          <div className="city-explanation-container" style={{display: 'flex'}}>
            <img src="travel_img/osaka.jpg" alt="오사카" style={{borderRadius:"5px"}}/>
            <div style={{whiteSpace:'pre-wrap', borderRadius:"5px", boxShadow:"3px 3px 5px rgba(0, 0, 0, 0.1)"}}>일본 오사카부에 있는 도시로 부청 소재지다. 혼슈 긴키 지방의 요도가와 강 하구 오사카 만에 위치해 있으며, 일본에서 도쿄 다음으로 규모가 크다.
            4세기에 나니와 궁이 놓여진 이후 약 1600년 이상의 역사를 가지고 있으며 현재는 상업과 해외여행 등이 활발하고 있으며 주간 인구는 도쿄 23구 다음으로 일본 전국에서 2위, 야간 인구는 요코하마시 다음으로 3위이다. 1956년에 일본에서 처음으로 정령지정도시로 지정되었다. 간토 지방이 아닌 지방에서는 제일 많으며, 재일 한국인들이 많이 모여사는 곳이다.
            </div>
          </div>
          <div className="main-title" style={{backgroundColor:"#f5f5f7"}}>인기 여행지</div>
          <div className="app-container">
            {
              OsakaCitydummy.map((item)=>{
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

export default OsakaInformationPage;