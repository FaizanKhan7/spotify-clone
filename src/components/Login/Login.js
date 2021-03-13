import React from "react";
import "./Login.css";
import Logo from "../../assets/spotify-seeklogo.com.svg";
import { loginUrl } from "../spotify/spotify";

function Login() {
  return (
    <div className="login">
      <img src={Logo} alt="spotify-logo" />
      <a href={loginUrl}>Login with spotify</a>
    </div>
  );
}

export default Login;
