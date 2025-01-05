import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { getArticles } from "./api";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then((data) => {
        console.log("Api data", data);
        if (data && data.articles) {
          setArticles(data.articles);
        } else {
          console.error("No articles found");
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul className="article-list">
      {articles.map((article) => {
        return (
          <li key={article.article_id}>
            <ArticleCard article={article} />
          </li>
        );
      })}
    </ul>
  );
};

export default ArticleList;
