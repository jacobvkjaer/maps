import styles from "@/styles/Home.module.scss";
import { Place, PlaceOutlined } from "@mui/icons-material";

export default function IconSwitcher({ mapVisible }: { mapVisible: boolean }) {
  return (
    <>
      {!mapVisible ? (
        <PlaceOutlined className={styles.icon} fontSize="large" />
      ) : (
        <Place className={styles.icon} fontSize="large" />
      )}
    </>
  );
}
