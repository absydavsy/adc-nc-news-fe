import { useState } from "react";
import "./App.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route, BrowserRouter } from "react-router";
import ArticleList from "./ArticleList";
import MainArticle from "./MainArticle";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:article_id" element={<MainArticle />} />
          <Route path="*" element={<p>Page Not Found</p>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
