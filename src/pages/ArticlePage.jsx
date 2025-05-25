import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArticle } from "../api/articleApi";
import "../styles/ArticlePage.css";

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArticle = async () => {
      try {
        setLoading(true);
        const res = await fetchArticle(id);
        setArticle(res.data);
      } catch (err) {
        setError("Failed to load article");
      } finally {
        setLoading(false);
      }
    };
    getArticle();
  }, [id]);

  if (loading) return <div className="article-page-container"><p>Loading...</p></div>;
  if (error) return <div className="article-page-container"><p>{error}</p></div>;
  if (!article) return <div className="article-page-container"><p>Article not found.</p></div>;

  const articleContent = article.content || [];

  return (
    <div className="article-page-container">
      <div className="article-main-content">
        <Link to="/articles" className="article-back-btn">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Articles
        </Link>

        <header className="article-page-header">
          <h1 className="article-page-title">{article.title}</h1>
          <div className="article-meta-info">
            <span className="article-author">
              {article.author || "Unknown Author"}
            </span>
            <span>·</span>
            <span>{article.date || "No date"}</span>
          </div>
          <img
            src={article.image}
            alt={article.title}
            className="article-featured-img"
          />
        </header>

        <div className="article-body-content">
          {articleContent.length > 0 ? (
            articleContent.map((section, index) => {
              switch (section.type) {
                case "paragraph":
                  return <p key={index}>{section.text}</p>;
                case "heading":
                  return (
                    <h2 className="article-subheading" key={index}>
                      {section.text}
                    </h2>
                  );
                case "list":
                  return (
                    <ul className="article-content-list" key={index}>
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );
                case "image":
                default:
                  return null;
              }
            })
          ) : (
            <p>No content available for this article.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
