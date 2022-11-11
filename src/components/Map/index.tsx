import React, { useRef, useState, useEffect } from "react";

import OlMap from "ol/Map";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/Tile";
import OlSourceOSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import OlFeatures from "ol/Feature";
import OlGeomPoint from "ol/geom/Point";
import OlLayerVector from "ol/layer/Vector";
import OlSourceVector from "ol/source/Vector";
import OlStyle from "ol/style/Style";
import OlIcon from "ol/style/Icon";

import "./style.css";

interface MapProps {
  lat: number,
  long: number,
  name: string,
  address: string,
  phone: string,
  email: string,
}

const MapContext: any = React.createContext(null);

export const Map: React.FC<MapProps> = ({ lat, long, name, address, phone, email }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<OlMap | null>(null);

  useEffect(() => {
    const iconFeature = new OlFeatures({
      geometry: new OlGeomPoint(fromLonLat([long, lat])),
    });
    const iconStyle = new OlStyle({
      image: new OlIcon({
        src: './images/location.svg',
      }),
    });
    iconFeature.setStyle(iconStyle);

    const options = {
      target: 'map',
      view: new OlView({
        center: fromLonLat([long, lat]),
        zoom: 4,
        maxZoom: 20
      }),
      controls: [],
      layers: [
        new OlLayerTile({
          source: new OlSourceOSM()
        }),
        new OlLayerVector({
          source: new OlSourceVector({
            features: [iconFeature],
          }),
        }),
      ],
    };

    const mapObject = new OlMap(options);
    mapObject.setTarget(mapRef.current!);
    setMap(mapObject);

    return () => mapObject.setTarget(undefined);
  }, [lat, long]);

  return (
    <MapContext.Provider value={{ map }}>
      <h2
        className="font-title font-bold text-3xl text-general-dark tracking-general 
          border-b-map-regular border-b pb-2.5 mb-4 lg:hidden"
      >
        Contacts
      </h2>
      <div ref={mapRef} className="ol-map mx-auto max-w-[25rem]">
        <div
          className="w-full h-1/2 absolute top-0 bg-map-back rounded-t-lg z-10 overflow-hidden 
            after:absolute after:bg-map-back-add after:rounded-full after:w-72 after:h-72 after:-top-4 after:-left-1/4"
        >
          <ul className="w-full h-full absolute z-20 py-7 px-14 flex flex-col justify-between">
            <li className="font-title font-bold text-base tracking-general text-map-title md:text-xl">
              {name}
            </li>
            <li>
              <img
                src="./images/location.svg"
                className="inline h-[1.125rem] mr-2 invert-[.40] align-text-top"
                alt="location marker"
              />
              <span className="font-light text-base tracking-general text-map-regular md:text-lg">
                {address}
              </span>
            </li>
            <li>
              <span className="font-light text-base tracking-general text-map-regular md:text-lg">
                {phone}<br />{email}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </MapContext.Provider>
  )
}