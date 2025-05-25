import { Link } from "react-router-dom";
import "../styles/ArticleList.css";
import { articles } from "../utils";

const ArticleListPage = () => {
  return (
    <main className="article-container">
      <h1 className="heading">Style Journal</h1>
      <p className="subheading">
        Your go-to reads for timeless tips, new trends, and everything in
        between.
      </p>
      <section className="article-grid">
        {articles.map((article) => (
          <Link
            to={`/articles/${article.id}`}
            className="article-card"
            key={article.id}
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
    </main>
  );
};

export default ArticleListPage;
