import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Map from "@/components/Map";
import { useEffect, useRef, useState } from "react";
import IconSwitcher from "@/components/IconSwitcher";
import { getCoordinates, Coordinates } from "@/utils/geocode";

const initialCenter: Coordinates = {
  lat: 55.647175,
  lng: 12.28502,
};

export default function Home() {
  const searchRef = useRef<HTMLInputElement>(null);
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number }>(
    initialCenter
  );
  const [mapVisible, setMapVisible] = useState(false);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, []);

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && searchRef.current?.value) {
      const address = searchRef.current.value;
      const coords = await getCoordinates(address);

      if (coords) {
        setCoordinates(coords);
        setMapVisible(true);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Interactive Map</title>
        <meta name="description" content="Interactive map example" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.headerContainer}>
          <p>Enter location</p>
          <IconSwitcher mapVisible={mapVisible} />
        </div>
        <div>
          <input
            type="input"
            id="search-field"
            name="search-query"
            ref={searchRef}
            onKeyDown={handleKeyDown}
          />
        </div>
        <Map mapVisible={mapVisible} coordinates={coordinates} />
      </main>
    </>
  );
}
