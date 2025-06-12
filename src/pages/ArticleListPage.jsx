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
        console.log("Fetching articles from:", import.meta.env.VITE_PROD_API_URL || import.meta.env.VITE_DEV_API_URL);
        const res = await fetchArticles();
        console.log("Articles response:", res);
        console.log("Articles data:", res.data);
        if (res.data && res.data.articles) {
          setArticles(res.data.articles);
        } else {
          console.error("No articles found in response:", res.data);
          setError("No articles available");
        }
      } catch (err) {
        console.error("Error fetching articles:", err);
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
