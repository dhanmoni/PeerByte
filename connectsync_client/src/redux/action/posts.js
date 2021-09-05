import api from "../../utils/api";
import axios from "axios"; //this is required to post images
import {
  GET_ALL_POSTS,
  GET_POSTS_BY_ID,
  ADD_POST,
  DELETE_POST,
  UPDATE_LIKES,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from "./types";
import { setError, removeError } from "./error";

export const getAllPosts = (workplacesObj) => async (dispatch) => {
  try {
    const workplaces = JSON.stringify(workplacesObj);
    const res = await api.get(`/post?workplaces=${workplaces}`);

    dispatch({
      type: GET_ALL_POSTS,
      payload: res.data,
    });
    dispatch(removeError());
  } catch (err) {
    dispatch(removeError());
    if (err.response) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setError(error.msg, "danger")));
      }
    }
  }
};

export const getPostByID = (postId) => async (dispatch) => {
  try {
    const res = await api.get(`/post/${postId}`);

    dispatch({
      type: GET_POSTS_BY_ID,
      payload: res.data,
    });
    dispatch(removeError());
  } catch (err) {
    dispatch(removeError());
    if (err.response) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setError(error.msg, "danger")));
      }
    }
  }
};

export const addPost = (postData, workplacesObj) => async (dispatch) => {
  try {
    const workplaces = JSON.stringify(workplacesObj);
    const res = await api.post(
      `/post/addPost?workplaces=${workplaces}`,
      postData
    );

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });
    dispatch(getAllPosts(workplacesObj));
  } catch (err) {
    dispatch(removeError());
    if (err.response) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setError(error.msg, "danger")));
      }
    }
  }
};

export const addPostWithImage = (postData, workplacesObj) => async (
  dispatch
) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        "x-auth-token": token,
      },
    };
    const workplaces = JSON.stringify(workplacesObj);
    const res = await axios.post(
      `http://localhost:5500/api/post/addPostWithImage?workplaces=${workplaces}`,
      postData,
      config
    );

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });
    dispatch(getAllPosts(workplacesObj));
  } catch (err) {
    dispatch(removeError());
    if (err.response) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setError(error.msg, "danger")));
      }
    }
  }
};

export const deletePost = (postId) => async (dispatch) => {
  console.log('deleting post...', postId)
  try {
    const res = await api.delete(`/post/${postId}`);

    dispatch({
      type: DELETE_POST,
      payload: postId,
    });
    dispatch(removeError());
  } catch (err) {
    dispatch(removeError());
    if (err.response) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setError(error.msg, "danger")));
      }
    }
  }
};

export const addLike = (postId, workplacesObj) => async (dispatch) => {
  try {
    const res = await api.post(`/post/like/${postId}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: res.data,
    });
    dispatch(getAllPosts(workplacesObj));
  } catch (err) {
    dispatch(removeError());
    if (err.response) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setError(error.msg, "danger")));
      }
    }
  }
};

export const removeLike = (postId) => async (dispatch) => {
  try {
    const res = await api.post(`/post/unlike/${postId}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: res.data,
    });
    dispatch(removeError());
  } catch (err) {
    dispatch(removeError());
    if (err.response) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setError(error.msg, "danger")));
      }
    }
  }
};

export const addComment = (postId, text, workplacesObj) => async (dispatch) => {
  try {
    const res = await api.post(`/post/comment/${postId}`, { text });

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });
    dispatch(getPostByID(postId));
    dispatch(getAllPosts(workplacesObj));
    dispatch(removeError());
  } catch (err) {
    dispatch(removeError());
    if (err.response) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setError(error.msg, "danger")));
      }
    }
  }
};

export const removeComment = (postId, commentId) => async (dispatch) => {
  try {
    const res = await api.delete(`/post/comment/delete/${postId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: res.data.id,
    });
    dispatch(getPostByID(postId));
    dispatch(removeError());
  } catch (err) {
    dispatch(removeError());
    if (err.response) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setError(error.msg, "danger")));
      }
    }
  }
};
