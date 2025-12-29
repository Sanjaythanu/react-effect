import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const News = ({ category }) => {

  const [articles, setArticles] = useState([]);

  // Runs whenever category changes
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1743d4e6bf9e4b24ad8e09d8e048e3e6`
    )
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles || []);
      });
  }, [category]);

  return (
    <div>
      <h2>{category.toUpperCase()} News</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "15px"
        }}
      >
        {articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            image={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
