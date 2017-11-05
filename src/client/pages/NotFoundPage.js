import React from 'react';

// staticContext只在服务器端
const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1>Not Found</h1>;
};

export default {
  component: NotFoundPage
};
