import { Link } from "react-router-dom";
import "../styles/ArticleList.css";

const articles = [
  {
    id: 1,
    title: "2025 Fashion Forecast",
    excerpt:
      "Explore the upcoming fashion trends that will dominate this year—from bold silhouettes to nostalgic Y2K revivals.",
    image: "https://source.unsplash.com/featured/?fashion,style",
  },
  {
    id: 2,
    title: "Building a Capsule Wardrobe",
    excerpt:
      "Learn how to create a versatile, timeless wardrobe with just a few essential pieces that match effortlessly.",
    image: "https://source.unsplash.com/featured/?minimal,fashion",
  },
  {
    id: 3,
    title: "Sustainable Style Guide",
    excerpt:
      "A guide to shopping consciously without compromising style. Discover ethical brands and eco-friendly materials.",
    image: "https://source.unsplash.com/featured/?eco,fashion",
  },
  {
    id: 4,
    title: "Mastering Layering Techniques",
    excerpt:
      "From chilly mornings to warm afternoons, mastering layering keeps your outfit functional and fashionable.",
    image: "https://source.unsplash.com/featured/?layered,clothes",
  },
];

const ArticleList = () => {
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
            to={`/article/${article.id}`}
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

export default ArticleList;
