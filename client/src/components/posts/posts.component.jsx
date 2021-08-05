import React from "react";

import { useSelector } from "react-redux";

import { selectPosts } from "../../redux/posts/posts.selectors";

import Post from "../post/post.component";

import useStyles from "./posts.styles";

const Posts = () => {
  const posts = useSelector(selectPosts);
  const classes = useStyles();

  console.log(posts);
  return (
    <>
      <h1>Posts</h1>
      <Post />
    </>
  );
};

export default Posts;

/*
import React from "react";

import { useSelector } from "react-redux";

import { selectPosts } from "../../redux/posts/posts.selectors";

import Post from "../post/post.component";

import useStyles from "./posts.styles";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);
  return (
    <div>
      <h1>Posts</h1>
      <Post />
    </div>
  );
};

export default Posts;

*/
