import { Link } from "react-router-dom";
import "../styles/ArticleList.css";

const ArticleList = () => {
  return (
    <main className="article-container">
      <h1 className="heading">Article List</h1>
      <section className="article-grid">
        <Link to="/article/1" className="article-item">
          <h2>Article 1</h2>
          <p>
            Discover the latest trends in fashion and how they are shaping the
            industry.
          </p>
        </Link>
        <Link to="/article/2" className="article-item">
          <h2>Article 2</h2>
          <p>
            Everything you need to know about sustainable fashion and how it
            impacts the world.
          </p>
        </Link>
        <Link to="/article/3" className="article-item">
          <h2>Article 3</h2>
          <p>
            Exploring the rise of online shopping and its impact on traditional
            retail stores.
          </p>
        </Link>
        <Link to="/article/4" className="article-item">
          <h2>Article 4</h2>
          <p>
            How influencers are changing the way we shop and consume fashion
            products.
          </p>
        </Link>
      </section>
    </main>
  );
};

export default ArticleList;
