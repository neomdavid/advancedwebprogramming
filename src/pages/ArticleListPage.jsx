import { useEffect, useState } from "react";
import "../styles/ArticleList.css";
import ArticleList from "../components/ArticleList";
import { fetchArticles } from "../api/articleApi";

const ArticleListPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        setLoading(true);
        const res = await fetchArticles();
        setArticles(res.data.articles);
      } catch (err) {
        setError("Failed to load articles");
      } finally {
        setLoading(false);
      }
    };
    getArticles();
  }, []);

  return (
    <main className="article-container">
      <h1 className="heading">Style Journal</h1>
      <p className="subheading">
        Your go-to reads for timeless tips, new trends, and everything in
        between.
      </p>
      {loading ? (
        <p>Loading articles...</p>
      ) : error ? (
        <p>{error}</p>
      ) : articles.length === 0 ? (
        <p>There are no articles.</p>
      ) : (
        <ArticleList articles={articles} />
      )}
    </main>
  );
};

export default ArticleListPage;
