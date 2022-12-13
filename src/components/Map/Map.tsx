import { useEffect, useRef, useState } from "react";
import { geoMarkers } from "../../data/geoMarkers";
import mapboxgl, { LngLat } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2lyc2F3a2EiLCJhIjoiY2t3djVsc280MDRxYjJwcWwxb3BrOGpzNSJ9.EEuTuzmYuaI1tGdEOouFsw";

function Map() {
  const [map, setMap] = useState<mapboxgl.Map>();
  const mapNode = useRef(null);

  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);

  useEffect(() => {
    const node = mapNode.current;
    if (typeof window === "undefined" || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      style: "mapbox://styles/mapbox/light-v10",
      center: [2.3364, 48.86091],
      zoom: 16,
    });

    for (const feature of geoMarkers.features) {
      const LngLats = new LngLat(
        feature.geometry.coordinates[0],
        feature.geometry.coordinates[1]
      );

      new mapboxgl.Marker({ color: "grey" })
        .setLngLat(LngLats)
        .addTo(mapboxMap);
    }

    mapboxMap.on("move", () => {
      setLng(+mapboxMap.getCenter().lng.toFixed(4));
      setLat(+mapboxMap.getCenter().lat);
    });

    setMap(mapboxMap);
    return () => {
      mapboxMap.remove();
    };
  }, []);

  return <div className='map' ref={mapNode} />;
}

export default Map;
