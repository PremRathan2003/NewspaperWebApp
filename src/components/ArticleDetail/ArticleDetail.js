import React from 'react';
import { useParams, Link } from 'react-router-dom';
import articles from '../data/articles';
import './ArticleDetail.css';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find(article => article.id === id);

  if (!article) return <div className="article-container">Article not found!</div>;

  return (
    <div className="article-container article-detail">
      <h2 className="article-title">{article.title}</h2>
      <div className="article-meta">
        <div>
        <p><strong>Author:</strong> {article.author}</p>
        <p><strong>Published Date:</strong> {article.publishedDate}</p>
        </div>
        <Link to="/" className="back-button">&larr; Back</Link>
      </div>
      <img className="article-image" src={article.imageUrl} alt={article.title} />
      <p className="article-content">{article.content}</p>
    </div>
  );
};

export default ArticleDetail;
