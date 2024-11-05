import React from "react";
import "../css/Portfolio.css";
export default function Portfolio() {
  return (
    <div className="portfolio-page">
      <div className="left-column">
        <div className="portfolio-header">
          <h1>My Portfolios</h1>
          <div className="portfolio-list">
            <div className="portfolio-item">
              <h3>Demo</h3>
              <p>Socially-Responsible-Investing</p>
              <div className="portfolio-actions">
                <span class="icon edit" title="Edit">
                  <i class="fas fa-edit"></i>
                </span>
                <span class="icon delete" title="Delete">
                  <i class="fas fa-trash"></i>
                </span>
              </div>
            </div>
            <button className="add-portfolio">+</button>
          </div>
        </div>

        <div className="balance-section">
          <h2>Current Balance</h2>
          <h3 className="balance-amount">$872,043.00</h3>
          <p className="balance-change">$52,384.00</p>
          <button className="buy-stocks">Invest Stocks</button>
          <button className="buy-stocks m-2">Add Budget</button>
        </div>

        <div className="assets-section">
          <h2>Your Assets</h2>
          <table className="assets-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>24H%</th>
                <th>Holdings</th>
                <th>Avg. Buy Price</th>
                <th>Profit/Loss</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="asset-name">
                  <img src="" alt="" />
                  <span>BNB</span>
                </td>
                <td>$4,589.70</td>
                <td className="price-change negative">-1.34%</td>
                <td>$872,043.00</td>
                <td>$4,270.09</td>
                <td className="profit">$52,384.00</td>
                <td>
                  <button className="add-asset">+</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="right-column">
        <h2>Expense History</h2>
        <ul className="expense-history">
          <li>Stock Purchase - $1,000</li>
        </ul>
      </div>
    </div>
  );
}
