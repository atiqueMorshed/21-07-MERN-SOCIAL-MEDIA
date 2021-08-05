import postsActionTypes from "./posts.types";

const INITIAL_STATE = {
  posts: [],
};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case postsActionTypes.FETCH_ALL_POSTS:
      return action.payload;
    default:
      return state;
  }
};

export default postsReducer;
