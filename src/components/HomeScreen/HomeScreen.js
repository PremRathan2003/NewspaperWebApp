import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../data/articles';
import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <div className="container">
      <h1 className="main-heading">My Newspaper</h1>
      <div className="article-list">
        {articles.map((article, index) => (
          <div key={article.id} className={`article ${getCardSize(index)}`}>
            <Link to={`/article/${article.id}`} className="article-link">
              <div className="card mb-4">
                <img src={article.imageUrl} className="card-img-top" alt={article.title} />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.summary}</p>
                  <p className="card-author">By {article.author}</p>
                  <p className="card-date">Published: {article.publishedDate}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const getCardSize = (index) => {
  if (index % 6 === 0) {
    return 'large';
  } else if (index % 3 === 0) {
    return 'medium';
  } else {
    return 'small';
  }
};

export default HomeScreen;
