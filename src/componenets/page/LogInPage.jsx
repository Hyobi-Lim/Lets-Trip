import React from "react";
import Header from './Header';
import { signin } from "./ApiService";
//import Button from "@material-ui/core/Button";
//import TextField from "@material-ui/core/TextField";
//import Grid from "@material-ui/core/Grid";
//import Typography from "@material-ui/core/Typography";
//import { Container } from "@material-ui/core";
import {
    Link,
    TextField,
    Container
} from "@material-ui/core";

class LogInPage extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const email = data.get("email");
        const password = data.get("password");
        signin({email:email,password:password});
    }

    render() {
        return(
            <><Header /><Container component="main" maxWidth="xs">
                <div className="main-title">로그인</div>
                <br/>
                <form noValidate onSubmit={this.handleSubmit}>
                    {" "}
                    {/* */}
                    <div container spacing={2}>
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
                                id="password"
                                label="패스워드"
                                name="password"
                                autoComplete="current-password" />
                        </div>
                        <div item xs={12} className="setcenter">
                            <button
                                className="button"
                                type="submit"
                                style={{marginBottom:"30px"}}
                            >
                                로그인
                            </button>
                        </div>
                        <div className="setcenter">
                            <Link href="/signuppage" varient="body2" style={{ textDecoration: "none", color: "black"}}>
                                <div className="setcenter" style={{textDecoration:"underline"}}>계정이 없습니까? 여기서 가입 해주세요.</div>
                            </Link>
                        </div>
                    </div>
                </form>
            </Container></>
        );
    }
}

export default LogInPage;