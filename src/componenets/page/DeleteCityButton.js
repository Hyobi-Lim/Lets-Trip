import React from "react";
import { Button } from "react-bootstrap";
import { saveCity } from "./Header";
import { saveCourse } from "./Header";
import { SaveCourses } from "./NewMypage";
import { useNavigate } from "react-router";

const DeleteCityButton = ( name, closeModal ) => {

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
    .then(response => console.log('저장 여행지 불러: ',saveCity))
    .then(response => navigate("/mypage"));
  };

  console.log('마이페이지 코스 불러: ',saveCourse);

    const DeleteCity = async (e) => {
        const accessToken = localStorage.getItem("ACCESS_TOKEN");
        let options = {
            headers: {"Content-Type":"application/json",
            "Authorization":"Bearer "+accessToken
            },
            url:'http://letstrip.shop:8080/scrap/spot/delete',
            method:"DELETE",
        }
        const favoritename=[]
        favoritename.push({name})
        options.body = JSON.stringify(favoritename[0].name);
        fetch(options.url,options)
        .then(response => response.json())
        .then(response => console.log('좋아요 취소 결과',favoritename))
        .then(response => {alert("해당 여행지가 삭제되었습니다!")})
        
        console.log('저장코스 함수 실행');
        e.preventDefault();
        saveCourse.length = 0;
        saveCity.length = 0;
        options.method="GET";
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

    return (
        <div className="setcenter" style={{marginTop:"-30px", marginBottom:"30px"}}>
            <Button className="button" variant="primary" type="submit" onClick={DeleteCity}>
                여행지 삭제하기
            </Button>
        </div>
    );
};

export default DeleteCityButton;