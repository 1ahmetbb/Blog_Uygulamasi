import React, { useState, useReducer } from "react";
import CreateDataContex from "./CreateDataContex";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogpost":
      return action.payload;

    // case "add_blogpost":
    //   return [
    //     ...state,
    //     {
    //       id: Math.floor(Math.random() * 999999),
    //       title: action.payload.title,
    //       content: action.payload.content,
    //     },
    //   ];

    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return async (title, content, callBack) => {
    await jsonServer.post("/blogPost", {title, content});
    //dispatch({ type: "add_blogpost", payload: { title, content } });
    if (callBack) {
      callBack();
    }
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callBack) => {
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    if (callBack) {
      callBack();
    }
  };
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogPost");
    dispatch({ type: "get_blogpost", payload: response.data });
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

export const { Context, Provider } = CreateDataContex(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
