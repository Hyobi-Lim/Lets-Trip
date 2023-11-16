let backendhost;

const hostname = window&&window.location&&window.location.hostname;

if(hostname==="localhost"){
    backendhost = "http://letstrip.shop:8080"
}

export const API_BASE_URL=`${backendhost}`;