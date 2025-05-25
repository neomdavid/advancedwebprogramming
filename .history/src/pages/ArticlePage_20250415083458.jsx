import React from "react";
import { useParams } from "react-router";
import { articles } from "../utils";
const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find((articleId) => articleId == id);
  console.log(article);
  console.log(params);
  return <h1>This is the article page</h1>;
};

export default ArticlePage;
