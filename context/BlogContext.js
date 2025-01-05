import React from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const BlogPosts = [{ title: "React Native" }, { title: "Javascript" }];

  return (
    <BlogContext.Provider value={BlogPosts}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
