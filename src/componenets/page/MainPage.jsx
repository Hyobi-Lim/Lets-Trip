import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Travel from "../Travel";
import Travels from "../Travels";
import { traveldummy } from "../../traveldummy";
import { traveldummys } from "../../traveldummys";
import Header from './Header';
import ShowMap from "./ShowMap";

export const CityName=[];

const otherLocations = [
];

function MainPage(){
  return (
    <div>
      <Header/>
      <div className="main-title">당신의 여행지를 골라주세요!</div>
      <div className="app-container">
        {
          traveldummy.map((item,index)=>{
            return(
              <Travel
                index={index}
                destination={item.destination}
                site={item.site}
                travel_pic={item.travel_pic}
                overview={item.overview}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default MainPage;