import React, { useState, useReducer } from "react";
import CreateDataContex from "./CreateDataContex";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: "Angular" }];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

export const { Context, Provider } = CreateDataContex(
  blogReducer,
  { addBlogPost },
  []
);
