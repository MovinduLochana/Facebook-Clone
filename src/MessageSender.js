import React, { useState } from "react";
import "./messageSender.min.css";
import { Avatar } from "@material-ui/core";
import VideoCamIcon from "@material-ui/icons/Videocam";
import PhotoLiblaryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmotionIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    //operations
    setInput("");
    setImageUrl("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />

        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder={`what's on your mind, ${user.displayName} ?`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image URL (optional)"
          />

          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottem">
        <div className="messageSender__option">
          <VideoCamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
          <PhotoLiblaryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <InsertEmotionIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
