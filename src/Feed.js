import React, { useEffect, useState } from "react";
import "./feed.min.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   db.collection("posts").onSnapshot((snapShot) => {
  //     setPosts(snapShot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
  //   });
  // }, []);

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snp) =>
      setPosts(snp.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
    // posts.map((elementx) => {
    //   console.log(elementx.data.profilePic);
    // });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
}
