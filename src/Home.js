import { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import { getTokenFromUrl } from "./components/Login/spotify/spotify";
import "./Home.css";

function Home() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log("got a token 👉", token);
  }, []);

  return (
    <div className="spotify">{token ? <h1>I'm logged in</h1> : <Login />}</div>
  );
}

export default Home;
