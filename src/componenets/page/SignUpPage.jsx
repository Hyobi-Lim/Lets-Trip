import React from "react";
import Header from './Header';

import {
    TextField,
    Link,
    Container
} from "@material-ui/core";

import { signup } from "./ApiService";

class SignUpPage extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const username = data.get("username");
        const email = data.get("email");
        const password = data.get("password");
        const phoneNumber = data.get("phoneNumber");
        const birth = data.get("birth");
        signup({username:username,email:email,password:password,phoneNumber:phoneNumber,birth:birth}).then(
            (response) => {
                window.location.href="/";
            }
        );
    }

    render() {
        return(
            <><Header /><Container component="main" maxWidth="xs">
                <div className="main-title">계정 만들기</div>
                <br/>
                <form noValidate onSubmit={this.handleSubmit}>
                    <div container spacing={2}>
                        <div item xs={12}>
                            <TextField
                                autoComplete="fname"
                                name="username"
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="사용자 이름"
                                autoFocus />
                        </div>
                        <h6> </h6>
                        <div item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="이메일 주소"
                                name="email"
                                autoComplete="email" />
                        </div>
                        <h6> </h6>
                        <div item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="패스워드"
                                type="password"
                                id="password"
                                autoFocus="current-password" />
                        </div>
                        <h6> </h6>
                        <div item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="phoneNumber"
                                label="전화번호"
                                type="phoneNumber"
                                id="phoneNumber" 
                                oninput="PhoneLength(this)"
                                maxlength="11"/>
                        </div>
                        <h6> </h6>
                        <div item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="birth"
                                label="생년월일"
                                type="birth"
                                id="birth" />
                        </div>
                        <div item xs={12} className="setcenter">
                            <button
                                className="button"
                                type="submit"
                                style={{marginBottom:"30px"}}
                            >
                                계정 만들기
                            </button>
                        </div>
                    </div>
                    <div className="setcenter">
                        <Link href="/signuppage" varient="body2" style={{ textDecoration: "none", color: "black"}}>
                            <div className="setcenter" style={{textDecoration:"underline"}}>이미 계정이 있습니까? 로그인 해주세요.</div>
                        </Link>
                    </div>
                </form>
            </Container></>
        );
    }
}

export default SignUpPage;