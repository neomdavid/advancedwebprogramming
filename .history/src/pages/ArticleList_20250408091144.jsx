import { Link } from "react-router-dom";
import "../styles/ArticleList.css";
const ArticleList = () => {
  return (
    <main className="">
      <h1>Article List</h1>
      <section>
        <Link>Article 1</Link>
      </section>
    </main>
  );
};

export default ArticleList;
