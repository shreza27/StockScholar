import React from "react";
import "../css/Dashboard.css";
import Card from "../components/Card";
import image1 from "../assets/3d-rendering-financial-neon-bull.jpg";
import image2 from "../assets/stock-trading-workplace-background.jpg";

const trendingStocks = [
  { name: "AAPL", price: "$150.00" },
  { name: "GOOGL", price: "$2800.00" },
  { name: "AMZN", price: "$3500.00" },
  { name: "MSFT", price: "$300.00" },
  { name: "TSLA", price: "$700.00" },
];

const trendingNews = [
  {
    title: "Stock Market Hits Record High",
    content: "Details about the stock market...",
  },
  {
    title: "Tech Stocks Surge",
    content: "Tech stocks are leading the market growth...",
  },
  {
    title: "Investment Strategies for 2024",
    content: "Explore the best strategies...",
  },
];

export default function Dashboard() {
  return (
    <>
      <div className="dashboard1">
        <h1 class="quote">
          "The stock market is filled with individuals who know the price of
          everything but the value of nothing." – Philip Fisher
        </h1>
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={image1} className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src={image2} className="d-block w-100" alt="Slide 2" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="dashboard">
        <div className="d1">
          <h3>Top Trending Stocks</h3>
          {trendingStocks.map((stock) => (
            <Card key={stock.name} title={stock.name} value={stock.price} />
          ))}
        </div>
        <div className="d2">
          <h3>Top Stocks</h3>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Stock Symbol</th>
                <th>Company Name</th>
                <th>Current Price</th>
                <th>Change</th>
                <th>Percentage Change</th>
                <th>Market Cap</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AAPL</td>
                <td>Apple Inc.</td>
                <td>$150.00</td>
                <td>$2.00</td>
                <td>1.35%</td>
                <td>$2.5 Trillion</td>
              </tr>
              <tr>
                <td>GOOGL</td>
                <td>Alphabet Inc.</td>
                <td>$2800.00</td>
                <td>$10.00</td>
                <td>0.36%</td>
                <td>$1.9 Trillion</td>
              </tr>
              <tr>
                <td>AMZN</td>
                <td>Amazon.com Inc.</td>
                <td>$3500.00</td>
                <td>$15.00</td>
                <td>0.43%</td>
                <td>$1.75 Trillion</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d3">
          <h3>Top Trending News</h3>
          {trendingNews.map((news, index) => (
            <Card key={index} title={news.title} value={news.content} />
          ))}
        </div>
      </div>
    </>
  );
}
