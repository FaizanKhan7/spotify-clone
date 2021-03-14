// https://developer.spotify.com/documentation/general/guides/authorization-guide/
import { useEffect } from "react";
import "./Home.css";
import Login from "./components/Login/Login";
import { getTokenFromUrl } from "./components/spotify/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player/Player";
import { useStateContextValue } from "./StateProvider.js";

const spotify = new SpotifyWebApi(); //Basically creating an instance of spotify inside the app, which will basically allow us to communicate back and forth with spotify.

function Home() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useStateContextValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      // setToken(_token);

      spotify.setAccessToken(_token); //this actually gives the access to the spotify api!

      spotify.getMe().then((user) => {
        // console.log("👱", user);

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }

    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
      });
    });

    spotify.getPlaylist("1gxr6FcMeB8XWKkfA1rQ8Y").then((response) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      });
    });
    // console.log("got a token 👉", token);
  }, []);

  // console.log("Got a", user, "from data layer");
  // console.log("Got a 👽 token", token, "from data layer");
  return (
    <div className="spotify">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default Home;
