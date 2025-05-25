import { Link } from "react-router-dom";
import "../styles/ArticleList.css";
const ArticleList = () => {
  return (
    <main className="">
      <h1 className="heading">Article List</h1>
      <section>
        <Link>Article 1</Link>
        <Link>Article 2</Link>
      </section>
    </main>
  );
};

export default ArticleList;
