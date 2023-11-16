import Results from "../Results";
import DeleteCityButton from "./DeleteCityButton";
import { CityName } from "./MyPage";

function FavoriteModalCity({ setModalOpens, itemss, index }) {
    console.log(itemss.name===CityName[0])
    console.log('네임이다',CityName[0],itemss.name)

    // 모달 끄기 
    const closeModal = () => {
        setModalOpens(false);
    };

    return (
        <div className="container" style={{width:"1500px", height:"900px", overflow: "auto", alignItems:"center", borderRadius:"5px", boxShadow:"3px 3px 5px rgba(0, 0, 0, 0.1)"}}>
            <button className="close" onClick={closeModal}>
                X
            </button>
            <br/>
            <br/>
            <Results
                index={index}
                name={itemss.name}
                imgUrl={itemss.imgUrl}
                overview={itemss.overview}
                address={itemss.address}
                localAddress={itemss.localAddress}
                phoneNumber={itemss.phoneNumber}
                latitude={itemss.latitude}
                longitude={itemss.longitude}
                sun={itemss.sun}
                mon={itemss.mon}
                tue={itemss.tue}
                wed={itemss.wed}
                thu={itemss.thu}
                fri={itemss.fri}
                sat={itemss.sat}
                keywordImgUrl={itemss.keywordImgUrl}
                id={itemss.id}
                arrive_time={itemss.arrive_time}
                depart_time={itemss.depart_time}
                move_time={itemss.move_time}
                star={itemss.star}
            />
            <DeleteCityButton name={itemss.name} closeModal={closeModal}/>
            <br/>
        </div>
    );
}
export default FavoriteModalCity;