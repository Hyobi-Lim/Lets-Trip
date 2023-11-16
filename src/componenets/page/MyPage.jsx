import React from "react";
import Header from './Header';
import { useState } from "react";
import FavoriteModal from './FavoriteModal';
import FavoriteModalCity from './FavoriteModalCity';
import { favoritecities } from "../../favoritecities";
import { saveCity } from "./Header";
import { saveCourse } from "./Header";
import { SaveCourses } from "./NewMypage";
import { useNavigate } from "react-router";

export const CityName=[];
export const CityId=[];

function MyPage(){
  const navigate = useNavigate();

  const SaveCourses = async (e) => {
    console.log('저장코스 함수 실행');
    e.preventDefault();
    saveCourse.length = 0;
    saveCity.length = 0;
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    let options = {
      headers: {"Content-Type":"application/json",
        "Authorization":"Bearer "+accessToken
      },
      method:"GET",
    }
    options.body = JSON.stringify();
    await fetch('http://letstrip.shop:8080/scrap/find/all',options)
    .then(response => response.json())
    .then(response => saveCourse.push(response))
    .then(response => console.log('저장 코스 불러: ',saveCourse));
    console.log('저장코스 함수2 실행');
    await fetch('http://letstrip.shop:8080/scrap/spot/find',options)
    .then(response => response.json())
    .then(response => saveCity.push(response))
    .then(response => console.log('저장 여행지 불러: ',saveCity));
    navigate("/mypage")
  };

  console.log('마이페이지 여행지 불러: ',saveCity);
  console.log('마이페이지 코스 불러: ',saveCourse);
  
  const [modalOpen, setModalOpen] = useState(false);

    // 모달창 노출
  const showModal = (items) => {
    CityId.length=0;
    CityId.push(items.id)
    console.log('누름',CityId[0])
    setModalOpen(true);
    console.log('누름2',items.id)
  };

  const [modalOpens, setModalOpens] = useState(false);

    // 모달창 노출
  const showModals = (itemss,index) => {
    CityName.length=0;
    CityName.push(itemss.name)
    console.log('누름',CityName[0])
    setModalOpens(true);
    console.log('누름2',itemss.name)
    };

  return (
    <div>
      <Header/>
      <div className="main-title">마이페이지</div>
        <div style={{display: 'flex', justifyContent: "center", textAlign: "center"}}>
          <div style={{marginRight:"100px"}}>
            <div className="main-title" style={{backgroundColor:"#f5f5f7", marginBottom:"-30px"}}>찜한 여행지</div>
            <div className="setcenter">
            {
              saveCity[0].map((itemss,index)=>{
                return(
                  <div>
                    <button className="button" onClick={(e)=>{showModals(itemss,index)}}>
                      {itemss.name}
                    </button>
                    {itemss.name===CityName[0]?
                      modalOpens && <FavoriteModalCity setModalOpens={setModalOpens} itemss={itemss} index={index}/>
                    :
                      null
                    }
                  </div>
                )
              })
            }
            </div>
          </div>
          <div style={{marginLeft:"100px"}}>
            <div className="main-title" style={{backgroundColor:"#f5f5f7", marginBottom:"-30px"}}>찜한 여행코스</div>
            <div className="setcenter">
            {
              saveCourse[0].map((items,index)=>{
                return(
                  <div>
                    <button className="button" onClick={(e)=>{showModal(items)}}>
                      {index+1}번쨰 여행코스
                    </button>
                    {items.id===CityId[0]?
                      modalOpen && <FavoriteModal setModalOpen={setModalOpen} id={items.id} items={items.tourSpotDtoList}/>                    :
                      null
                    }
                  </div>
                )
              })
            }
            </div>
          </div>
        </div>
    </div>
  );
}

export default MyPage;