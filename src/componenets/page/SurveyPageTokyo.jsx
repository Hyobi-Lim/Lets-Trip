import React from "react";
import Header from './Header';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router";
import { UserEmail } from "./ApiService";
import Loading from "./Loading";
import { city } from "./Export";
import { myResult } from "./SurveyPage";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

SwiperCore.use([Navigation, Pagination])

export default function SurveyPageTokyo() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [answers, setAnswers] = useState({
    inside_outside: '',
    mountain_ocean: '',
    activity_actrraction: '',
    aquarium: '',
    shopping: '',
    startDate: new Date(),
    endDate: new Date(),
    travel_start: new Date().toLocaleTimeString(),
    travel_end: new Date().toLocaleTimeString(),
    properties: [],
    email: localStorage.getItem(UserEmail),
    city: '도쿄'
  });

  const handleChange = (e) => {
      const { name, value, checked } = e.target;
      if (name === 'properties') {
          let newProperties = answers.properties.slice();
          if (checked) {
              newProperties.push(value);
          } else {
              newProperties = newProperties.filter(prop => prop !== value);
          }
          setAnswers(prev => ({ ...prev, properties: newProperties }));
      }
      else if (name === "startDate" || name === "endDate") { // 추가된 부분
          setAnswers((prev) => ({ ...prev, [name]: value }));
      }
      else if (name === "travel_start" || name === "travel_end") { // 추가된 부분
          setAnswers((prev) => ({ ...prev, [name]: value }));
      }
      else {
          setAnswers(prev => ({ ...prev, [name]: value }));
      }
  };

  const handleSubmit = async (e) => {
    myResult.length=0;
    city.length=0;
    city.push(answers.city);
    console.log('city:', city);
    setLoading(true);
    e.preventDefault();
    console.log('Answers:', answers);
    await fetch('http://letstrip.shop:5000/togo', {  // <-- Change the URL here
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(answers)
    })
    .then(response => response.json())
    .then(response => myResult.push(response))
    .then(response => console.log(myResult))
    .then(response => console.log('서베이마이리절트0',myResult[0]))
    .catch(error => console.error('Error:', error));
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    let options = {
      headers: {"Content-Type":"application/json",
        "Authorization":"Bearer "+accessToken
      },
      url:'http://letstrip.shop:8080/survey/save',
      method:"POST",
    }
    options.body = JSON.stringify(answers);
    console.log('헤더:', options.headers);
    console.log('헤더:', options.body);
    await fetch(options.url,options)
    .then(response => response.json())
    setLoading(false);
    navigate("/resultpagetokyo")
  };

  const hardCodingTokyo = () => {
    navigate("/resultpage");
  };

  return (
    <div>
      <Header/>
      <div className="main-title">당신의 취향을 알려주세요!</div>
      {loading ? (<Loading/>) : (
        <div style={{width:1120, margin: "Auto"}}>
          <br/>
          <Form onSubmit={handleSubmit} style={{backgroundColor:"#f5f5f7", borderRadius:"5px", boxShadow:"3px 3px 5px rgba(0, 0, 0, 0.1)", fontSize:"25px"}}>
          <Slider style={{backgroundColor:"#f5f5f7", margin:"10px"}}>
            <div>
              <br/>
              <div style={{display:"flex"}}>
                <div style={{marginRight:"10px"}}>
                  <Form.Group controlId="startDate" style={{marginBottom:"10px"}}>
                  <div style={{flexDirection:"column"}}>
                    <div style={{marginBottom:"20px"}}><Form.Label className="form-label" style={{marginRight:"30px"}}>출발날짜</Form.Label></div>
                    <div><Form.Control style={{width:"400px", height:"30px", fontSize:"16px", borderRadius:"5px", padding:"10px", border:"1px solid grey"}} type="datetime-local" name="startDate" onChange={handleChange} /></div>
                  </div>
                  </Form.Group>
                  <Form.Group controlId="endDate" style={{marginBottom:"10px"}}>
                  <div style={{flexDirection:"column"}}>
                    <div style={{marginBottom:"20px"}}><Form.Label style={{marginRight:"30px"}}>도착날짜</Form.Label></div>
                    <div><Form.Control style={{width:"400px", height:"30px", fontSize:"16px", borderRadius:"5px", padding:"10px", border:"1px solid grey"}} type="datetime-local" name="endDate" onChange={handleChange} /></div>
                  </div>
                  </Form.Group>
                  <Form.Group controlId="travel_start" style={{marginBottom:"10px"}}>
                  <div style={{flexDirection:"column"}}>
                    <div style={{marginBottom:"20px"}}><Form.Label style={{marginRight:"30px"}}>관광시작시간</Form.Label></div>
                    <div><Form.Control style={{width:"400px", height:"30px", fontSize:"16px", borderRadius:"5px", padding:"10px", border:"1px solid grey"}} type="time" name="travel_start" onChange={handleChange} /></div>
                  </div>
                  </Form.Group>
                  <Form.Group controlId="travel_end" style={{marginBottom:"10px"}}>
                  <div style={{flexDirection:"column"}}>
                    <div style={{marginBottom:"20px"}}><Form.Label style={{marginRight:"30px"}}>관광종료시간</Form.Label></div>
                    <div><Form.Control style={{width:"400px", height:"30px", fontSize:"16px", borderRadius:"5px", padding:"10px", border:"1px solid grey"}} type="time" name="travel_end" onChange={handleChange} /></div>
                  </div>
                  </Form.Group>
                </div>
                <div>
                  <Form.Group controlId="properties" style={{marginBottom:"30px"}}>
                    <Form.Label className="setcenter">Properties</Form.Label>
                    <div className="checkboxContainer">
                            <Form.Check type="checkbox" name="properties" value="쇼핑 / 옷" label="쇼핑 / 옷" onChange={handleChange} />
                            <Form.Check type="checkbox" name="properties" value="야경 / 전망대" label="야경 / 전망대" onChange={handleChange} />
                            <Form.Check type="checkbox" name="properties" value="사원 (절) / 신사 / 불상" label="사원 (절) / 신사 / 불상" onChange={handleChange} />
                            <Form.Check type="checkbox" name="properties" value="공원 / 광장" label="공원 / 광장" onChange={handleChange} />
                            <Form.Check type="checkbox" name="properties" value="어린이" label="어린이" onChange={handleChange} />
                            <Form.Check type="checkbox" name="properties" value="옛날" label="옛날" onChange={handleChange} />
                            <Form.Check type="checkbox" name="properties" value="성" label="성" onChange={handleChange} />
                            <Form.Check type="checkbox" name="properties" value="작품 / 전시회 / 박람회" label="작품 / 전시회 / 박람회" onChange={handleChange} />
                            <Form.Check type="checkbox" name="properties" value="관람차" label="관람차" onChange={handleChange} />
                            <Form.Check type="checkbox" name="properties" value="이색" label="이색" onChange={handleChange} />
                            <Form.Check type="checkbox" name="properties" value="먹거리 / 카페 / 음식 / 음식점 / 술" label="먹거리 / 카페 / 음식 / 음식점 / 술" onChange={handleChange} />
                            <Form.Check type="checkbox" name="properties" value="항구 / 배" label="항구 / 배" onChange={handleChange} />
                            <Form.Check type="checkbox" name="properties" value="온천 / 사우나 / 목욕탕 / 노천 / 스파 / 수영장" label="온천 / 사우나 / 목욕탕 / 노천 / 스파 / 수영장" onChange={handleChange} />
                            <Form.Check type="checkbox" name="properties" value="콘서트 / 오케스트라 / 공연 / 극장" label="콘서트 / 오케스트라 / 공연 / 극장" onChange={handleChange} />
                            <Form.Check type="checkbox" name="properties" value="전통옷체험(기모노/유카타)" label="전통옷체험(기모노/유카타)" onChange={handleChange} />
                            <Form.Check type="checkbox" name="properties" value="만화 / 애니메이션 /  게임 /  인형" label="만화 / 애니메이션 /  게임 /  인형" onChange={handleChange} />
                            <Form.Check type="checkbox" name="properties" value="드럭스토어 / 기념품 / 선물" label="드럭스토어 / 기념품 / 선물" onChange={handleChange} />
                            <Form.Check type="checkbox" name="properties" value="경기장 / 야구 /축구" label="경기장 / 야구 /축구" onChange={handleChange} />
                            <Form.Check type="checkbox" name="properties" value="무료" label="무료" onChange={handleChange} />
                            <Form.Check type="checkbox" name="properties" value="사진스팟(사진)" label="사진스팟(사진)" onChange={handleChange} />
                    </div>
                  </Form.Group>
                </div>
              </div>
              <div className="">
                <div style={{display:"flex"}}>
                  <Form.Group controlId="inside_outside" style={{marginBottom:"30px", marginRight:"100px"}}>
                    <Form.Label className="setcenter" style={{ marginRight: '150px', marginLeft: '30px' }}>실내 vs 실외 (야외)</Form.Label>
                    <div>
                      <Button className={answers.inside_outside === "'실내'" ? "selected-button" : "selected"} name="inside_outside" onClick={handleChange} value="'실내'">
                        실내
                      </Button>
                      vs
                      <Button className={answers.inside_outside === "'실외','야외'" ? "selected-button" : "selected"} name="inside_outside" onClick={handleChange} value="'실외','야외'">
                        실외 (야외)
                      </Button>
                    </div>
                  </Form.Group>
                  <Form.Group controlId="mountain_ocean" style={{marginBottom:"30px"}}>
                    <Form.Label style={{ marginRight: '150px', marginLeft: '30px' }}>산 vs 바다 vs 강</Form.Label>
                    <div>
                      <Button className={answers.mountain_ocean === "'산'" ? "selected-button" : "selected"} name="mountain_ocean" onClick={handleChange} value="'산'">
                        산
                      </Button>
                      vs
                      <Button className={answers.mountain_ocean === "'바다'" ? "selected-button" : "selected"} name="mountain_ocean" onClick={handleChange} value="'바다'">
                        바다
                      </Button>
                      vs
                      <Button className={answers.mountain_ocean === "'강'" ? "selected-button" : "selected"} name="mountain_ocean" onClick={handleChange} value="'강'">
                        강
                      </Button>
                    </div>
                  </Form.Group>
                </div>
                  <Form.Group controlId="activity_actrraction" style={{marginBottom:"30px"}}>
                    <Form.Label style={{ marginRight: '150px', marginLeft: '30px' }}>액티비티 / 체험 / 어트랙션 / 놀이기구 / 퍼레이드 vs 휴식 /산책 / 자전거 / 꽃</Form.Label>
                    <div>
                      <Button className={answers.activity_actrraction === "'액티비티', '체험', '어트랙션', '놀이기구', '퍼레이드'" ? "selected-button" : "selected"} name="activity_actrraction" onClick={handleChange} value="'액티비티', '체험', '어트랙션', '놀이기구', '퍼레이드'">
                        액티비티 / 체험 / 어트랙션 / 놀이기구 / 퍼레이드
                      </Button>
                      vs
                      <Button className={answers.activity_actrraction === "'휴식', '산책', '자전거', '꽃'" ? "selected-button" : "selected"} name="activity_actrraction" onClick={handleChange} value="'휴식', '산책', '자전거', '꽃'">
                        휴식 /산책 / 자전거 / 꽃
                      </Button>
                    </div>
                  </Form.Group>
                  <Form.Group controlId="aquarium" style={{marginBottom:"30px"}}>
                    <Form.Label style={{ marginRight: '150px', marginLeft: '30px' }}>수족관 / 아쿠아리움 vs 동물원 vs 식물원 vs 과학관 / 박물관 vs 미술관</Form.Label>
                    <div>
                      <Button className={answers.aquarium === "'수족관', '아쿠아리움'" ? "selected-button" : "selected"} name="aquarium" onClick={handleChange} value="'수족관', '아쿠아리움'">
                        수족관 / 아쿠아리움
                      </Button>
                      vs
                      <Button className={answers.aquarium === "'동물원'" ? "selected-button" : "selected"} name="aquarium" onClick={handleChange} value="'동물원'">
                        동물원
                      </Button>
                      vs
                      <Button className={answers.aquarium === "'식물원'" ? "selected-button" : "selected"} name="aquarium" onClick={handleChange} value="'식물원'">
                        식물원
                      </Button>
                      vs
                      <Button className={answers.aquarium === "'과학관', '박물관'" ? "selected-button" : "selected"} name="aquarium" onClick={handleChange} value="'과학관', '박물관'">
                        과학관 / 박물관
                      </Button>
                      vs
                      <Button className={answers.aquarium === "'그림'" ? "selected-button" : "selected"} name="aquarium" onClick={handleChange} value="'그림'">
                        미술관
                      </Button>
                    </div>
                  </Form.Group>
                  <Form.Group controlId="shopping" style={{marginBottom:"30px"}}>
                    <Form.Label style={{ marginRight: '150px', marginLeft: '30px' }}>시장/ 골목 vs 백화점 / 쇼핑몰 / 아울렛 / 지하상가</Form.Label>
                    <div>
                      <Button className={answers.shopping === "'시장', '골목'" ? "selected-button" : "selected"} name="shopping" onClick={handleChange} value="'시장', '골목'">
                        시장/ 골목
                      </Button>
                      vs
                      <Button className={answers.shopping === "'백화점', '쇼핑몰', '아울렛', '지하상가'" ? "selected-button" : "selected"} name="shopping" onClick={handleChange} value="'백화점', '쇼핑몰', '아울렛', '지하상가'">
                        백화점 / 쇼핑몰 / 아울렛 / 지하상가
                      </Button>
                    </div>
                  </Form.Group>
                </div>
            </div>
          </Slider>
          <div className="setcenter">
            {/*<Button className="button" variant="primary" type="submit" onClick={handleSubmit}>
              일정 추가하기
            </Button>*/}
            <Button className="button" variant="primary" type="submit" onClick={hardCodingTokyo}>
              일정 추가하기
            </Button>
          </div>
          <br/>
          </Form>
        </div>
      )}
    </div>
  );
}