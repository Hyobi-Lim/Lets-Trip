import React, { useState, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import Map from './Map';

// API key of the google map
const GOOGLE_MAP_API_KEY = '<process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY>';

const ShowMap = ({SO}) => {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    const options = {
      apiKey: GOOGLE_MAP_API_KEY,
      version: "weekly",
      libraries: ['geometry']
    };

    new Loader(options).load().then(() => {
      setLoadMap(true);
    }).catch(e => {
      console.error('Sorry, something went wrong: Please try again later. Error:', e);
    });
  }, []);

  return (
    <div className="App">
      {!loadMap ? <div>Loading...</div> : <Map StopOvers={SO}/>}
    </div>
  );
}

export default ShowMap;