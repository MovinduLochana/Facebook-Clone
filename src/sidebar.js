import { useRadioGroup } from "@material-ui/core";
import React from "react";
import "./sidebar.min.css";
import SidbarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleIcon from "@material-ui/icons/People";
import EmojiFlag from "@material-ui/icons/EmojiFlags";
import ChatIcon from "@material-ui/icons/Chat";
import StoreFrontIcon from "@material-ui/icons/Storefront";
import VideoLiblaryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SidbarRow src={user.photoURL} title={user.displayName} />
      <SidbarRow Icon={LocalHospitalIcon} title="COVID19 Information Center" />
      <SidbarRow Icon={PeopleIcon} title="friends" />
      <SidbarRow Icon={EmojiFlag} title="Pages" />
      <SidbarRow Icon={ChatIcon} title="Messages" />
      <SidbarRow Icon={StoreFrontIcon} title="MrketPlace" />
      <SidbarRow Icon={VideoLiblaryIcon} title="Videos" />
      <SidbarRow Icon={ExpandMoreOutlined} />
    </div>
  );
}

export default Sidebar;
