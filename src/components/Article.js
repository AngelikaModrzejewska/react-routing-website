import React from "react";

const Article = ({ title, author, text }) => {
  const styles = {
    marginTop: 20,
  };

  return (
    <article style={styles}>
      <h2
        style={{
          marginBottom: 10,
        }}
      >
        {title}
      </h2>
      <span
        style={{
          display: "block",
          marginBottom: 10,
          fontSize: 12,
          fontWeight: "bold",
          color: "#5050ce",
        }}
      >
        {author}
      </span>
      <p style={{ fontSize: 15 }}>{text}</p>
    </article>
  );
};

export default Article;
