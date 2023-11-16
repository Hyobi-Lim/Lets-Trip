import { API_BASE_URL } from "./app-config";
export const ACCESS_TOKEN="ACCESS_TOKEN";
export const UserEmail="UserEmail";

export function call(api,method,request) {
    let headers = new Headers({
        "Content-Type":"application/json",
    });

    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if(accessToken && accessToken!==null) {
        headers.append("Authorization","Bearer "+accessToken);
    }

    let options = {
        headers: headers,
        url:API_BASE_URL+api,
        method:method,
    };

    if (request) {
        options.body = JSON.stringify(request);
    }
    return fetch(options.url,options)
        .then((response) =>
            {if(!response.ok) {
                return Promise.reject(response);
            }
            return response.json();}
        )
        .catch((error) => {
            console.log(error.status);
            if(error.status===403) {
                window.location.href = "/login";
            }
                return Promise.reject(error);
        });
}

export function signin(userDTO) {
    return call("/auth/login","POST",userDTO)
        .then((response) => {
            if(response.token) {
                localStorage.setItem(ACCESS_TOKEN,response.token);
                localStorage.setItem(UserEmail,userDTO.email);
                alert("로그인 되었습니다!")
                window.location.href="/";
            }
        });
}

export function signup(userDTO) {
    return call("/auth/signup","POST",userDTO)
    .then((response) => {
        if(response) {
            alert("회원가입을 축하드립니다!")
            window.location.href="/loginpage";
        }
    });
}

export function signout() {
    localStorage.setItem(ACCESS_TOKEN,null);
}