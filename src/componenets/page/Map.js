import React, { useEffect, useRef, useState } from 'react';

const Map = ({StopOvers}) => {
  const googleMapRef = useRef(null);
  const [map, setMap] = useState(null);

  const StartPoint=`${StopOvers[0].latitude}, ${StopOvers[0].longitude}`;
  const EndPoint=`${StopOvers[StopOvers.length-1].latitude}, ${StopOvers[StopOvers.length-1].longitude}`;

  useEffect(() => {
    const googleMap = initGoogleMap();
    setMap(googleMap);
  }, []);

  useEffect(() => {
    if (!map) return;

    var directionsService = new window.google.maps.DirectionsService();
    var directionsRenderer = new window.google.maps.DirectionsRenderer();

    var wayPoints = [];

    StopOvers.map((item,index) => {
      if(index!==0 && index!==(StopOvers.length-1)) {
        wayPoints.push({
          location: new window.google.maps.LatLng(item.latitude, item.longitude),
          stopover: true
        });
      }
    }); 

    var request = {
      origin: StartPoint,
      destination: EndPoint,
      waypoints: wayPoints,
      optimizeWaypoints: true,
      travelMode: 'DRIVING'
    };
    directionsService.route(request, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
        directionsRenderer.setMap(map);
      }
    });
  }, [map])

  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: new window.google.maps.LatLng(StartPoint),
      zoom: 8
    });
  }

  return <div
    ref={googleMapRef}
    style={{ width: 1450, height: 700 }}
  />
}

export default Map;