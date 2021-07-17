import React from "react";
import "./sidebarRow.min.css";
import { Avatar } from "@material-ui/core";

function SidbarRow({ src, Icon, title }) {
  return (
    <div className="sideBarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}

      <h4>{title}</h4>
    </div>
  );
}

export default SidbarRow;
