import React from "react";
import "./storyReel.min.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        title="Movindu Lochana"
        profileSrc="https://yt3.ggpht.com/ytc/AAUvwni9cUbF94wd1GxpPW2Tw4MRtOMKg-dochR4XY4Zbw=s900-c-k-c0x00ffffff-no-rj"
        image="https://picsum.photos/500"
      />
      <Story
        title="Champika Hettiarchchi"
        profileSrc="https://picsum.photos/200"
        image="https://picsum.photos/500"
      />
      <Story
        title="Tharindu Weerakoon"
        profileSrc="https://picsum.photos/200"
        image="https://picsum.photos/500"
      />
      <Story
        title="Chami Hettiarachchi"
        profileSrc="https://picsum.photos/200"
        image="https://picsum.photos/500"
      />
      <Story
        title="Bhanuka Bandara"
        profileSrc="https://picsum.photos/200"
        image="https://picsum.photos/500"
      />
    </div>
  );
}

export default StoryReel;
