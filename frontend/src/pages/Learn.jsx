import React from "react";
import "../css/Learn.css";

export default function Learn() {
  const youtubeVideos = [
    { id: "GcZW24SkbHM", title: "Why should you invest?" },
    { id: "C7_JHlsqFlM", title: "Market Intermediaries" },
    {
      id: "SV7v5WRDtLE",
      title: "Why and how do companies list, and what is an IPO?",
    },
    { id: "HaiM8jPDEhk", title: "Why do stock prices fluctuate?" },
    { id: "-h1R5oIL0PI", title: "How does a trading platform work?" },
    { id: "z21PrHuEkKg", title: "What is a stock market index?" },
    { id: "1ZrF6GCLDL4", title: "Clearing and settlement process" },
    {
      id: "Mv93KfHcWaQ",
      title:
        "Understanding corporate actions like dividends, bonuses and buybacks",
    },
    { id: "5t5O0MnNJNE", title: "Order Types" },
    { id: "wt6YBnJzbm0", title: "Getting started" },
  ];

  const articles = [
    {
      title: "Stock Market Basics for Beginners",
      link: "https://www.investopedia.com/articles/basics/06/invest1000.asp",
    },
    {
      title: "How Does the Stock Market Work?",
      link: "https://www.nerdwallet.com/article/investing/how-the-stock-market-works",
    },
    {
      title: "A Beginner's Guide to the Stock Market",
      link: "https://www.thebalance.com/stock-market-basics-3306245",
    },
    {
      title: "Understanding Stock Market Indices",
      link: "https://www.fool.com/investing/how-to-invest/stock-market-basics/",
    },
    {
      title: "10 Tips for Beginning Investors",
      link: "https://www.bankrate.com/investing/tips-for-beginning-investors/",
    },
  ];

  return (
    <div className="learn">
      <h2 className="youtubeheader">
        Complete Guide to Basics of Stock Market
      </h2>
      <div className="youtube-scroll">
        {youtubeVideos.map((video, index) => (
          <a
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="video-card-link"
          >
            <div className="video-card">
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                className="video-thumbnail"
              />
              <h3>{video.title}</h3>
            </div>
          </a>
        ))}
      </div>

      <h2 className="article-header">Articles for Beginners</h2>
      <div className="article-scroll">
        {articles.map((article, index) => (
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="article-card-link"
          >
            <div className="article-card">
              <h3>{article.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
