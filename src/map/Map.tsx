import React, { useEffect, useRef, useState } from "react";
import MapView from "@arcgis/core/views/MapView";
import MyMap from "@arcgis/core/Map";
import esriConfig from "@arcgis/core/config";
import "./Map.css";
import { MapData } from "../map-data.type";

export interface MapProps {
  aMap: MapData;
  longitude: number;
  latitude: number;
  zoom: number;
}

export function Map(props: MapProps) {
  const { aMap, longitude, latitude, zoom } = props;
  // const [language, setLanguage] = useState<Language>("ar");
  const theMap = React.useRef<HTMLInputElement>(null);

  esriConfig.apiKey =
    "YOUR_API_KEY";

  useEffect(() => {
    const view = new MapView({
      map: new MyMap({
        basemap: aMap.basemapStyle,
      }),
      container: theMap.current,
      center: [longitude, latitude], // Longitude, latitude
      zoom: zoom, // Zoom level
    });
  }, [longitude, latitude, zoom]);

  return (
    <div>
      <div className="theMap" ref={theMap}></div>
    </div>
  );
}
