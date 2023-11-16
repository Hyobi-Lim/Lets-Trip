import { useNavigate } from "react-router";
import { saveCourse } from "./Header";
import { saveCity } from "./Header";

export const SaveCourses = async (e) => {
  const navigate = useNavigate();

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