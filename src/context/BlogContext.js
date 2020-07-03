import React from 'react';

const BlogContext = React.createContext();


export const BlogProvider = ({ children }) => {
  const blogPosts = [
    {
      title: 'Blog One'
    },
    { title: 'Blog two' }
  ]


  return <BlogContext.Provider value={blogPosts}>
    {children}
  </BlogContext.Provider>
};

export default BlogContext;
