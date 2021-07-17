import React from "react";
import "./Header.min.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import StoreFrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";

export default function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Facebook_f_Logo_%28with_gradient%29.svg" />

        {/* bem naming convention ( __ ) */}
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>

        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>

        <div className="header__option">
          <SubscriptionOutlinedIcon fontSize="large" />
        </div>

        <div className="header__option">
          <StoreFrontOutlinedIcon fontSize="large" />
        </div>

        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4> {user.displayName} </h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>

        <IconButton>
          <ForumIcon />
        </IconButton>

        <IconButton>
          <NotificationActiveIcon />
        </IconButton>

        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}
