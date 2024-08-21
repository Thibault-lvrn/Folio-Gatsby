import React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <main className="error-not-found">
      <div className="error-code">
        <div>
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
      </div>
      <span className="error-separation"></span>
      <div className="error-information">
        <p>
          <span>Sorry,</span> 
          <br />
          <span>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</span>
          <br />
          <Link to="/">Go home</Link>
        </p>
      </div>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
