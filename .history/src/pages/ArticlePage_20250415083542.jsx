import React from "react";
import { useParams } from "react-router";
import { articles } from "../utils";
const ArticlePage = () => {
  const { id } = useParams(); // Destructure `id` from params
  const article = articles.find((article) => article.id == id); // Compare article id with `params.id`

  console.log(article);
  console.log(id);
  return <h1>This is the article page</h1>;
};

export default ArticlePage;
