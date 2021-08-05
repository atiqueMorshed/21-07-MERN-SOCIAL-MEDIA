import React from "react";

import Post from "../post/post.component";

import useStyles from "./posts.styles";

const Posts = () => {
  const classes = useStyles();
  return (
    <>
      <h1>Posts</h1>
      <Post />
    </>
  );
};

export default Posts;
