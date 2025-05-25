import { useParams, Link } from "react-router-dom";
import { articles } from "../utils.jsx";
import "./ArticlePage.css";

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <div className="article-page">Article not found</div>;
  }

  return (
    <div className="article-page">
      <Link to="/" className="back-button">
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

      <header className="article-header">
        <h1 className="article-title">{article.title}</h1>
        <div className="article-meta">
          {article.author} · {article.date}
        </div>
        <img
          src={article.image}
          alt={article.title}
          className="article-hero-image"
        />
      </header>

      <div className="article-content">
        {article.content.map((section, index) => {
          switch (section.type) {
            case "paragraph":
              return <p key={index}>{section.text}</p>;
            case "heading":
              return <h2 key={index}>{section.text}</h2>;
            case "list":
              return (
                <ul key={index}>
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            case "image":
              return (
                <img
                  key={index}
                  src={section.src}
                  alt={section.alt}
                  className="article-image"
                />
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default ArticlePage;
