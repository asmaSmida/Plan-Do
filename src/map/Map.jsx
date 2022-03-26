import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";
import Geocode from "react-geocode";
import mapStyles from "./mapStyles";

const libraries = ["places"];

const mapContainerStyle = {
    width : '50vw',
    height: '50vh'
}

const options= {
    styles : mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}

export default function Map(props){
    const {isLoaded,loadError} = useLoadScript({
    GoogleMapsApiKey : process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
    });
    let {lats,long}={};
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
    }, []);
    
    Geocode.fromAddress().then(
        (response) => {
            const { lat, lng } = response.results[0].geometry.location;
            lats= lat;
            long= lng;
        },
        (error) => {
          console.error(error);
        }
      );
    const center = {
        lat: parseFloat(props.latitude),
        lng: parseFloat(props.longitude),
    }
    if (loadError) return "Error Loading Maps";
    if (!isLoaded) return "Loading MAP";
    return(
        <div> 
        <GoogleMap mapContainerStyle={mapContainerStyle} 
        zoom={14} 
        center={center}
        options={options}
        onLoad={onMapLoad}> 
        <Marker position={{ lat: parseFloat(props.latitude) , lng: parseFloat(props.longitude)}} />
        </GoogleMap>
        </div>
    )
}