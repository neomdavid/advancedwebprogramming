import React from "react";
import { useParams } from "react-router";
const ArticlePage = () => {
  const params = useParams();
  return <h1>This is the article page</h1>;
};

export default ArticlePage;
