import React, { useEffect } from "react";
import "./style.scss";

const ErrorTryAgain: React.FC = () => {
  return (
    <section className="error-message">
      <h2 className="error-message_heading">Error...</h2>
      <p className="error-message_text">Something went wrong.</p>
      <button className="error-message_button">Try again</button>
    </section>
  );
};

export default ErrorTryAgain;
