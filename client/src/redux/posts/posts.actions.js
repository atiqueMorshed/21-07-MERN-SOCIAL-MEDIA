import postsActionTypes from "./posts.types";
import * as api from "../../api/api";

// Thunk gives us access to the dispatch as prop
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: postsActionTypes.FETCH_ALL_POSTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
