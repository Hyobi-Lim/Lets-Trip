export function call(api,method,request) {
    let options = {
        headers: new Headers({
            "Content-Type":"application/json",
        }),
        url:"http://letstrip.shop:8080/"+api,
        method:method,
    };
    if (request) {
        options.body = JSON.stringify(request);
    }
    return fetch(options.url,options)
        .then((response) =>
            response.json().then((json)=>{
                if(!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
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
    return call("auth/login","POST",userDTO)
        .then((response) => {
            console.log("response:",response);
            alert("로그인 토큰:"+response.token);
        })
}