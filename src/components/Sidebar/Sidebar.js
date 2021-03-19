import React from "react";
import "./Sidebar.css";
import Logo from "../../assets/spotify-seeklogo.com.svg";
import SidebarOption from "../SidebarOption/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateContextValue } from "../../StateProvider";

function Sidebar() {
  const [{ playlists }] = useStateContextValue();

  return (
    <div className="sidebar">
      <img src={Logo} alt="spotify=-logo" className="sidebar__logo" />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
      {/* <SidebarOption title="Hip hop" />
      <SidebarOption title="Rock" />
      <SidebarOption title="R&B" /> */}
    </div>
  );
}

export default Sidebar;
