import { useEffect, useState } from 'react';
const apiKey = import.meta.env.VITE_NEWS_API_KEY;
fetch()

function TopHeadlines() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`)
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
