import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticleById, getComments } from "./api";

const MainArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticleById(article_id)
      .then((articleData) => {
        setArticle(articleData.article);
      })
      .catch((error) => {
        console.error("Error fetching article", error);
      });
  }, [article_id]);

  useEffect(() => {
    getComments(article_id)
      .then((commentsData) => {
        setComments(commentsData.comments || []);
      })
      .catch((error) => {
        console.error("Error fetching comments", error);
        setComments([]);
      });
  }, [article_id]);

  return (
    <div>
      <h2>{article.title}</h2>
      <h3>{article.author}</h3>
      <img src={article.article_img_url} />
      <p>{article.body}</p>

      <h4>Comments</h4>
      {Array.isArray(comments) && comments.length > 0 ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment.comment_id}>
              <p>{comment.body}</p>
              <p>Author: {comment.author}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments</p>
      )}
    </div>
  );
};

export default MainArticle;
