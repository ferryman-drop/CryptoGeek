
import './NotFound.css'; 

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">Oops! Page not found.</p>
      <a href="/" className="not-found-link">Go back to the homepage</a>
    </div>
  );
};

export default NotFound;