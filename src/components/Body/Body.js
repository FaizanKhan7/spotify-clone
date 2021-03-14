import React from "react";
import { useStateContextValue } from "../../StateProvider";
import Header from "../Header/Header";
import "./Body.css";
function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateContextValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          {/* <h2>Discover Weekly</h2> */}
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
