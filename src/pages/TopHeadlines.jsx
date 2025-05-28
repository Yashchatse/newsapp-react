import { useEffect, useState } from 'react';

function TopHeadlines() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=8e6b3c41ddf74dee89588b90c2a52c7e`)
      .then(res => res.json())
      .then(data => setArticles(data.articles) )
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Top Headlines</h2>
      {articles.slice(0, 5).map((article, index) => (
        <div className="card mb-3" key={index}>
          <div className="card-body">
            <img src={article.urlToImage} alt={article.title} className="card-img-top" />
            <h5>{article.title}</h5>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" className="btn btn-primary">Read More</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopHeadlines;
