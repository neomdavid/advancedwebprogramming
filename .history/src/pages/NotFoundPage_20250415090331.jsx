import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-text">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="not-found-button">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
