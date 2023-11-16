import React from "react";
import { useNavigate } from "react-router-dom";
import Header from './Header';
import HotelMap from './HotelMap';
import { Button } from 'react-bootstrap';

function MyHotelPage(){

  const navigate = useNavigate();

  const gomyresultlpage = () => {
    navigate("/resultpage");
  };

  return (
    <div>
      <Header/>
      <div className="main-title">당신의 숙소를 알려주세요!</div>
      <HotelMap/>
      <div className="setcenter">
        <Button className="button" variant="primary" type="submit" onClick={gomyresultlpage}>
          결과 보러 가기
        </Button>
      </div>
    </div>
  );
}

export default MyHotelPage;