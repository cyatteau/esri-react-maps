import React, { useState } from "react";
import { Map } from "../map/Map";
import "./MapControl.css";
import { MAPS_INFO } from "../maps-info-data";
import "@esri/calcite-components/dist/components/calcite-input";
import { CalciteInputNumber } from "@esri/calcite-components-react/dist/components";

export function MapControl() {
  const [longitude, setLongitude] = useState<number>(-77.04);
  const [latitude, setLatitude] = useState<number>(38.9);
  const [zoom, setZoom] = useState<number>(2);
  const [theMaps, setTheMaps] = useState(MAPS_INFO);

  return (
    <div>
      <div className="inputs">
        <CalciteInputNumber
          className="form-control"
          prefixText="longitude"
          placeholder="longitude"
          name="longitude"
          label="longitude"
          required
          value={longitude.toString()}
          onCalciteInputNumberChange={(e) =>
            setLongitude(parseFloat(e.target.value))
          }
        />
        <CalciteInputNumber
          className="form-control"
          prefixText="latitude"
          placeholder="latitude"
          name="latitude"
          label="latitude"
          required
          value={latitude.toString()}
          onCalciteInputNumberChange={(e) =>
            setLatitude(parseFloat(e.target.value))
          }
        />
        <CalciteInputNumber
          className="form-control"
          prefixText="zoom"
          placeholder="zoom"
          name="zoom"
          required
          value={zoom.toString()}
          onCalciteInputNumberChange={(e) =>
            setZoom(parseFloat(e.target.value))
          }
        />
      </div>
      <div className="maps">
        {theMaps.map((singleMap, index) => (
          <Map
            key={singleMap._id}
            aMap={singleMap}
            longitude={longitude}
            latitude={latitude}
            zoom={zoom}
          />
        ))}
      </div>
    </div>
  );
}
