import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';  

const buttonStyle = {
  marginLeft: "5px",
  // backgroundColor: "transparent",
  marginRight: "5px",
  backgroundColor: "white",
  border: "none",
  color: "black",
  fontSize: "30px",
  fontWeight: "bold",
  cursor: "pointer",
  // 애플 홈페이지 스타일에 맞게 추가적인 스타일을 적용해주세요.
};

function Practice() {
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
    city: '오사카'
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

  return (
    <div style={{width:1235, margin: "Auto"}}>
          <Form style={{backgroundColor:"#f5f5f7", borderRadius:"5px", boxShadow:"3px 3px 5px rgba(0, 0, 0, 0.1)", fontSize:"25px", fontWeight:"bold"}}>
            <div>
              <br/>
              <Form.Group controlId="startDate" style={{marginBottom:"30px"}}>
              <div style={{flexDirection:"column"}}>
                <div><Form.Label style={{marginRight:"30px"}}>출발날짜</Form.Label></div>
                <div><Form.Control type="datetime-local" name="startDate" onChange={handleChange} /></div>
              </div>
              </Form.Group>
              <Form.Group controlId="endDate" style={{marginBottom:"30px"}}>
                <Form.Label style={{marginRight:"30px"}}>도착날짜</Form.Label>
                <Form.Control type="datetime-local" name="endDate" onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="travel_start" style={{marginBottom:"30px"}}>
                <Form.Label style={{marginRight:"30px"}}>관광시작시간</Form.Label>
                <Form.Control type="time" name="travel_start" onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="travel_end" style={{marginBottom:"30px"}}>
                <Form.Label style={{marginRight:"30px"}}>관광종료시간</Form.Label>
                <Form.Control type="time" name="travel_end" onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="inside_outside" style={{marginBottom:"30px"}}>
                <Form.Label style={{marginRight:"30px"}}>실내 vs 실외 (야외)</Form.Label>
                <div>
                <Button style={answers.inside_outside === "'실내'" ? {backgroundColor: "grey"} : {}} name="inside_outside" onClick={handleChange} value="'실내'">
                  실내
                </Button>
                <Button style={answers.inside_outside === "'실외','야외'" ? {backgroundColor: "grey"} : {}} name="inside_outside" onClick={handleChange} value="'실외','야외'">
                  실외 (야외)
                </Button>
                </div>
              </Form.Group>
              <Form.Group controlId="mountain_ocean" style={{marginBottom:"30px"}}>
                <Form.Label style={{marginRight:"30px"}}></Form.Label>
                <div>
                  <Button className={answers.mountain_ocean === "'산'" ? "selected-button" : ""} style={answers.mountain_ocean === "'산'" ? {backgroundColor: "grey"} : buttonStyle} name="mountain_ocean" onClick={handleChange} value="'산'">
                    산
                  </Button>
                  vs
                  <Button className={answers.mountain_ocean === "'바다'" ? "selected-button" : ""} style={answers.mountain_ocean === "'바다'" ? {backgroundColor: "grey"} : buttonStyle} name="mountain_ocean" onClick={handleChange} value="'바다'">
                    바다
                  </Button>
                  vs
                  <Button className={answers.mountain_ocean === "'강'" ? "selected-button" : ""} style={answers.mountain_ocean === "'강'" ? {backgroundColor: "grey"} : buttonStyle} name="mountain_ocean" onClick={handleChange} value="'강'">
                    강
                  </Button>
                </div>
              </Form.Group>
            </div>
          <div className="setcenter">
            <Button className="button" variant="primary" type="submit">
              Submit
            </Button>
          </div>
          </Form>
        </div>
  );
}

export default Practice;