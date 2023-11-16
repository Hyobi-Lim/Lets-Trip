import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { saveCity } from "./Header";
import { saveCourse } from "./Header";
import { SaveCourses } from "./NewMypage";
import { useNavigate } from "react-router";

const DeleteCoureseButton = ( id ) => {
    console.log('코스',id)
    const navigate = useNavigate();

    const DeleteCourse = async (e) => {
        const accessToken = localStorage.getItem("ACCESS_TOKEN");
        let options = {
            headers: {"Content-Type":"application/json",
            "Authorization":"Bearer "+accessToken
            },
            url:'http://letstrip.shop:8080/scrap/delete',
            method:"DELETE",
        }
        const favoritecourse=[]
        favoritecourse.push({id})
        options.body = JSON.stringify(favoritecourse[0].id);
        console.log('오류',favoritecourse)
        fetch(options.url,options)
        .then(response => response.json())
        .then(response => console.log('코스 취소 결과',options.body))
        .then(response => {alert("해당 코스가 삭제되었습니다!")})
        
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
        .then(response => console.log('저장 여행지 불러: ',saveCity))
        .then(response => navigate("/mypage"));
    };

    return (
        <div  className="setcenter">
            <Button className="button" variant="primary" type="submit" onClick={DeleteCourse}>
                여행코스 삭제하기
            </Button>
        </div>
    );
};

export default DeleteCoureseButton;