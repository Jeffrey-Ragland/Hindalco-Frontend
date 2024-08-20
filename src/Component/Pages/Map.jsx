import React from 'react';
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({dataFromApp}) => {

    const marker1Message = `IITM RP: Sensor1 Temperature: ${dataFromApp.length > 0 && dataFromApp[0].S1}`

    const customMarkers = [
      { position: [12.990818, 80.242613], message: marker1Message },
      { position: [12.988893, 80.251575], message: "Thiruvanmiyur" },
    ];

    const customIcon = L.icon({
      iconUrl: "./xymaIcon.png",
      iconSize: [38, 38], 
      iconAnchor: [19, 38],
      popupAnchor: [0, -38],
    });

    // click event
    const handleMarkerClick = () => {
        // alert('marker clicked')
    }

  return (
    <div className="text-white p-4 h-screen flex justify-center items-center">
      <div className="border border-white h-[400px] w-[600px]">
        <MapContainer
          center={[12.9794, 80.2445]}
          zoom={14}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            detectRetina={true}
          />
          {customMarkers.map((marker, idx) => (
            <Marker
              key={idx}
              position={marker.position}
              icon={customIcon}
              eventHandlers={{ click: () => handleMarkerClick() }}
            >
              <Popup>{marker.message}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map
