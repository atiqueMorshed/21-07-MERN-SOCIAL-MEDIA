import postsActionTypes from "./posts.types";

const INITIAL_STATE = [];

const postsReducer = (posts = INITIAL_STATE, action) => {
  switch (action.type) {
    case postsActionTypes.FETCH_ALL_POSTS:
      return action.payload;
    case postsActionTypes.CREATE_POST:
      return [...posts, action.payload];
    default:
      return posts;
  }
};

export default postsReducer;
