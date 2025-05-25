import { Link } from "react-router-dom";
import "../styles/ArticleList.css";
import { articles } from "../article-content";
import ArticleList from "../components/ArticleList";

const ArticleListPage = () => {
  return (
    <main className="article-container">
      <h1 className="heading">Style Journal</h1>
      <p className="subheading">
        Your go-to reads for timeless tips, new trends, and everything in
        between.
      </p>
      <ArticleList articles={articles} />
    </main>
  );
};

export default ArticleListPage;
