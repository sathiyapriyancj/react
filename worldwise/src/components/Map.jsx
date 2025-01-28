import { useNavigate, useSearchParams } from "react-router";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useSearchParams();
  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>Map</h1>
      <h1>
        position : {lat},{lng}
      </h1>
      <button
        onClick={() => {
          setSearchParam({ lat: 23, lng: 50 });
        }}
      >
        Change Pos
      </button>
    </div>
  );
}

export default Map;
