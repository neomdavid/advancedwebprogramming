import { useParams, Link } from "react-router-dom";
import { articles } from "../utils.jsx";
import "../styles/ArticlePage.css";

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <div className="article-page-container">Article not found</div>;
  }

  const articleContent = article.content || [];
  const hasHeroImage =
    article.image &&
    !articleContent.some(
      (item) => item.type === "image" && item.src === article.image
    );

  return (
    <div className="article-page-container">
      <div className="article-main-content">
        <Link to="/" className="article-back-btn">
          {/* Back button SVG */}
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
          {hasHeroImage && (
            <img
              src={article.image}
              alt={article.title}
              className="article-featured-img"
            />
          )}
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
                  // Only show if this isn't the same as the hero image
                  if (section.src !== article.image) {
                    return (
                      <img
                        key={index}
                        src={section.src}
                        alt={section.alt}
                        className="article-inline-img"
                      />
                    );
                  }
                  return null;
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
