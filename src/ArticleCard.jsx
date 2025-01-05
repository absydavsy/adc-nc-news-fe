import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/articles/${article.article_id}`}>
      <Card className="article-card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={article.article_img_url} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Subtitle>{article.author}</Card.Subtitle>
          <Card.Text>{article.votes}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ArticleCard;
