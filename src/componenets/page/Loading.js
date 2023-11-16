import React from 'react';
import { Oval } from 'react-loader-spinner';

function Loading () { 
    return ( //import 한 스피너는 컴포넌트 형태로 사용가능 
        <div className='setcenter' style={{marginTop:"30px"}}>
            <Oval color="grey" height={150} width={150} secondaryColor="white"/> 
        </div>
    ) ; 
}; 

export default Loading;