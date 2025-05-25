import React from "react";
import { Link } from "react-router-dom";
import "../styles/ArticleList.css";
const ArticleList = ({ articles }) => {
  return (
    <section className="article-grid">
      {articles.map((article) => (
        <Link
          to={`/articles/${article._id}`}
          className="article-card"
          key={article._id}
        >
          <img
            src={article.image}
            alt={article.title}
            className="article-image"
          />
          <div className="article-content">
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <span className="read-more">Read more →</span>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default ArticleList;
