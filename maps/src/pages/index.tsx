import Head from "next/head";
import styles from "@/styles/Home.module.scss";
// import Map from "@/providers/map-provider";
import { useEffect, useRef } from "react";
import { Place, PlaceOutlined } from "@mui/icons-material";

export default function Home() {
  const searchFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchFieldRef.current) {
      searchFieldRef.current.focus();
    }
  }, []);

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
          <PlaceOutlined className={styles.icon} fontSize="large" />
        </div>
        <div className={styles.inputContainer}>
          <input
            type="input"
            id="search-field"
            name="search-query"
            ref={searchFieldRef}
          />
        </div>
        <div className={styles.map}>{/* <Map /> */}</div>
      </main>
    </>
  );
}
