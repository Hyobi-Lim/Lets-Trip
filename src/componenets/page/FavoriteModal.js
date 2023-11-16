import ShowMap from "./ShowMap";
import ResultNoHeart from "../ResultNoHeart";
import DeleteCoureseButton from "./DeleteCoureseButton";
import { CityId } from "./MyPage";

function FavoriteModal({ setModalOpen, id, items }) {

    console.log(id===CityId[0])
    console.log('네임이다',CityId[0],id)

    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };

    const mapLocations = [];
    
    for (let i = 0; i < items.length; i++) {
        mapLocations.push({
            latitude: items[i].latitude,
            longitude: items[i].longitude
        });
    }

    return (
        <div className="container" style={{width:"1500px", height:"900px", overflow: "auto", alignItems:"center", borderRadius:"5px", boxShadow:"3px 3px 5px rgba(0, 0, 0, 0.1)"}}>
            <button className="close" onClick={closeModal}>
                X
            </button>
            <br/>
            <br/>
            <div className="setcenter" style={{padding:"0px 20px", paddingBottom:"20px"}}>
                <ShowMap SO={mapLocations}/>
            </div>
            <br/>
            {
                items.map((item,index) => {
                    return(
                        <ResultNoHeart
                            index={index}
                            name={item.name}
                            imgUrl={item.imgUrl}
                            overview={item.overview}
                            address={item.address}
                            localAddress={item.localAddress}
                            phoneNumber={item.phoneNumber}
                            latitude={item.latitude}
                            longitude={item.longitude}
                            sun={item.sun}
                            mon={item.mon}
                            tue={item.tue}
                            wed={item.wed}
                            thu={item.thu}
                            fri={item.fri}
                            sat={item.sat}
                            keywordImgUrl={item.keywordImgUrl}
                            id={item.id}
                            arrive_time={item.arrive_time}
                            depart_time={item.depart_time}
                            move_time={item.move_time}
                            star={item.star}
                        />
                    )
                })
            }
            <DeleteCoureseButton id={id}/>
            <br/>
        </div>
    );
}
export default FavoriteModal;