import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getArticleById, getComments } from './api';

const MainArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Article ID:', article_id);
    setLoading(true);
    setError(null);

    getArticleById(article_id)
      .then((articleData) => {
        setArticle(articleData.article);
        console.log('Fetched article:', articleData.article);
      })
      .catch((error) => {
        console.error('Error fetching article', error);
        setError('There was an error fetching this article.');
      });

    getComments(article_id)
      .then((commentsData) => {
        console.log('Fetched comments:', commentsData);
        setComments(commentsData.articleComments || []);
      })
      .catch((error) => {
        console.error('Error fetching comments', error);
        setError('There was an error fetching the comments for this article.');
        setComments([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [article_id]);

  if (loading) {
    return <p>Loading article...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {article ? (
        <>
          <h2>{article.title}</h2>
          <h3>{article.author}</h3>
          <img src={article.article_img_url} />
          <p>{article.body}</p>

          <h4>Comments</h4>
          {comments.length > 0 ? (
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
        </>
      ) : (
        <p>Article not found.</p>
      )}
    </div>
  );
};

// {Array.isArray(comments) && comments.length > 0 ? (
//   <ul>
//     {comments.map((comment) => (
//       <li key={comment.comment_id}>
//         <p>{comment.body}</p>
//         <p>Author: {comment.author}</p>
//       </li>
//     ))}
//   </ul>

export default MainArticle;
