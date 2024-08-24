// File: HighlightText.js
import React from "react";

const HighlightText = ({ content }) => {
  return (
    <span>
      {content.map((part, index) => {
        if (typeof part === "string") {
          return part;
        } else if (part.highlight) {
          return <span key={index} className="violet-text">{part.text}</span>;
        } else {
          return part.text;
        }
      })}
    </span>
  );
};

export default HighlightText;
