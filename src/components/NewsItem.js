import React from 'react';

const NewsItem = ({ title, description, image, url }) => {
  return (
    <div
      onClick={() => window.open(url, "_blank")}
      style={{
        border: '1px solid gray',
        padding: '10px',
        cursor: 'pointer'
      }}
    >
      <img
        src={image || 'https://dummyimage.com/600x400/000/fff'}
        alt="News"
        style={{
          width: '100%',
          height: '180px',
          objectFit: 'cover'
        }}
      />

      <h4>{title}</h4>
      <p>{description || 'No description for this news'}</p>
    </div>
  );
};

export default NewsItem;
