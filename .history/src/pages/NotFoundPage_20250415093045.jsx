import { Link } from "react-router-dom";
import "../styles/NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title heading">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-text">
          The link you followed to get here must be broken...
        </p>
        <Link to="/" className="not-found-button">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
