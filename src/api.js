import axios from "axios";

const api = axios.create({
  baseURL: "https://be-nc-news-92aj.onrender.com/api",
});

function getArticles() {
  return api.get(`/articles`).then((response) => {
    return response.data;
  });
}

function getArticleById(article_id) {
  return api.get(`/articles/${article_id}`).then((response) => {
    return response.data;
  });
}

function getComments(article_id) {
  return api.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data;
  });
}

export { getArticles, getArticleById, getComments };
