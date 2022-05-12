import React from "react";
import Post from "./Post";

import "./Posts.css";

const Posts = ({ posts }) => {
  return <Post posts={posts} />;
};

export default Posts;
