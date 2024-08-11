import styles from "@/styles/Home.module.scss";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "800px",
  height: "600px",
};

export default function GoogleMapComponent({
  mapVisible,
  coordinates,
}: {
  mapVisible: boolean;
  coordinates: { lat: number; lng: number };
}) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  return mapVisible && isLoaded ? (
    <div className={styles.map}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordinates}
        zoom={17}
      >
        <Marker position={coordinates} />
      </GoogleMap>
    </div>
  ) : null;
}
