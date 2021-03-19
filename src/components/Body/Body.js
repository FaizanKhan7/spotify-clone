import React from "react";
import "./Body.css";
import { useStateContextValue } from "../../StateProvider";
import Header from "../Header/Header";
import { PlayCircleFilled } from "@material-ui/icons";
import SongRow from "../Songs/SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateContextValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:1gxr6FcMeB8XWKkfA1rQ8Y`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((response) => {
          dispatch({
            type: "SET_ITEM",
            item: response.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((response) => {
          dispatch({
            type: "SET_ITEM",
            item: response.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
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
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" onClick={playPlaylist} />
          {/* <Favorite fontSize="large" cursor="pointer" /> */}
          {/* <MoreHoriz /> */}
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
