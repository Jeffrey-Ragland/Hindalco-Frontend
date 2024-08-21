import React from 'react';
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {

    // const marker1Message = `IITM RP: Sensor1 Temperature: ${dataFromApp.length > 0 && dataFromApp[0].S1}`

    const customMarkers = [
      { position: [12.990818, 80.242613], message: "Taramani" },
      { position: [12.988893, 80.251575], message: "Thiruvanmiyur" },
    ];

    const customIcon = L.icon({
      iconUrl: "./xymaIcon.png",
      iconSize: [38, 38], 
      iconAnchor: [19, 38],
      popupAnchor: [0, -38],
    });

    const polygonCoords = [
      [12.976, 80.23],
      [12.975, 80.239], 
      [12.98, 80.255], 
      [12.995, 80.262],
      [12.998, 80.255],
      [12.995, 80.25], 
      [12.991, 80.236],
      [12.982, 80.223],
      [12.976, 80.23], 
    ];

    // click event
    const handleMarkerClick = () => {
        // alert('marker clicked')
    }

  return (
    <div className="text-white p-4 h-screen flex justify-center items-center">
      <div className="border border-white h-[400px] w-[600px]">
        <MapContainer
          center={[12.990568, 80.243019]}
          zoom={14}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution='&copy; <a href="https://www.esri.com">Esri</a> &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'
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
          <Polygon
            positions={polygonCoords}
            color="red"
            weight={2}
            fillOpacity={0.2}
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default Map
