import React, { useState } from "react";
import "../css/Portfolio.css";

export default function Portfolio() {
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  const [isAssetModalOpen, setIsAssetModalOpen] = useState(false);
  const [portfolioName, setPortfolioName] = useState("");
  const [portfolioDescription, setPortfolioDescription] = useState("");
  const [portfolios, setPortfolios] = useState([]);
  const [budget, setBudget] = useState(0);
  const [assets, setAssets] = useState([]);
  const [expenseHistory, setExpenseHistory] = useState([]);

  const [assetName, setAssetName] = useState("");
  const [assetPrice, setAssetPrice] = useState("");
  const [assetQuantity, setAssetQuantity] = useState("");
  const [assetCurrentPrice, setAssetCurrentPrice] = useState("");
  const [assetGainPercent, setAssetGainPercent] = useState("");
  const [assetValue, setAssetValue] = useState("");

  const handleAddPortfolioClick = () => {
    setIsPortfolioModalOpen(true);
  };

  const handleAddBudgetClick = () => {
    setIsBudgetModalOpen(true);
  };

  const handleAddAssetClick = () => {
    setIsAssetModalOpen(true);
  };

  const handlePortfolioModalClose = () => {
    setIsPortfolioModalOpen(false);
    setPortfolioName("");
    setPortfolioDescription("");
  };

  const handleBudgetModalClose = () => {
    setIsBudgetModalOpen(false);
  };

  const handleAssetModalClose = () => {
    setIsAssetModalOpen(false);
    setAssetName("");
    setAssetPrice("");
    setAssetQuantity("");
    setAssetCurrentPrice("");
    setAssetGainPercent("");
    setAssetValue("");
  };

  const handlePortfolioSubmit = () => {
    if (portfolioName && portfolioDescription) {
      setPortfolios([
        ...portfolios,
        { name: portfolioName, description: portfolioDescription },
      ]);
      handlePortfolioModalClose();
    }
  };

  const handleBudgetSubmit = () => {
    const parsedBudget = parseFloat(budget);
    if (!isNaN(parsedBudget)) {
      setBudget(parsedBudget);
      handleBudgetModalClose();
    } else {
      console.error("Invalid budget input");
    }
  };

  const handleAssetSubmit = async () => {
    try {
      const Stock_key = import.meta.env.VITE_DASHSTOCKNAPI_KEY;
      const apiUrl = `https://api.twelvedata.com/time_series?symbol=${assetName}&interval=1day&outputsize=7&apikey=${Stock_key}`;

      const response = await fetch(apiUrl);
      const stockData = await response.json();

      if (stockData && stockData.values && stockData.values[0]) {
        const currentPrice = parseFloat(stockData.values[0].close);
        const purchasePrice = parseFloat(assetPrice);
        const quantity = parseFloat(assetQuantity);
        const expenseAmount = purchasePrice * quantity;

        if (budget >= expenseAmount) {
          const gainPercent = (
            ((currentPrice - purchasePrice) / purchasePrice) *
            100
          ).toFixed(2);
          const value = (currentPrice * quantity).toFixed(2);

          const newAsset = {
            name: assetName,
            purchasePrice: purchasePrice.toFixed(2),
            quantity: quantity.toFixed(2),
            currentPrice: currentPrice.toFixed(2),
            gainPercent: `${gainPercent}%`,
            value: `${value}`,
          };

          setAssets([...assets, newAsset]);

          setBudget((prevBudget) => prevBudget - expenseAmount);

          setExpenseHistory([
            ...expenseHistory,
            {
              description: `Bought ${quantity} of ${assetName}`,
              amount: expenseAmount,
            },
          ]);

          handleAssetModalClose();
        } else {
          alert("Insufficient budget to complete the purchase.");
        }
      } else {
        console.error("Invalid response from stock API.");
        alert("Unable to fetch stock data. Please check the asset name.");
      }
    } catch (error) {
      console.error("Error fetching stock data:", error);
      alert("An error occurred while fetching stock data.");
    }
  };

  return (
    <div className="portfolio-page">
      <div className="left-column">
        <div className="portfolio-header">
          <h1>My Portfolios</h1>
          <div className="portfolio-list">
            {portfolios.map((portfolio, index) => (
              <div className="portfolio-item" key={index}>
                <h3>{portfolio.name}</h3>
                <p>{portfolio.description}</p>
                <div className="portfolio-actions">
                  <span className="icon edit" title="Edit">
                    <i className="fas fa-edit"></i>
                  </span>
                  <span className="icon delete" title="Delete">
                    <i className="fas fa-trash"></i>
                  </span>
                </div>
              </div>
            ))}
            <button className="add-portfolio" onClick={handleAddPortfolioClick}>
              +
            </button>
          </div>
        </div>

        <div className="balance-section">
          <h2>Current Balance</h2>
          <h3 className="balance-amount">${budget}</h3>
          <button className="buy-stocks" onClick={handleAddAssetClick}>
            Invest Stocks
          </button>
          <button className="buy-stocks m-2" onClick={handleAddBudgetClick}>
            Add Budget
          </button>
        </div>

        <div className="assets-section">
          <h2>Your Assets</h2>
          <table className="assets-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Purchase Price</th>
                <th>Quantity</th>
                <th>Current Price</th>
                <th>Gain %</th>
                <th>Value</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset, index) => (
                <tr key={index}>
                  <td>{asset.name}</td>
                  <td>{asset.purchasePrice}</td>
                  <td>{asset.quantity}</td>
                  <td>{asset.currentPrice}</td>
                  <td>{asset.gainPercent}</td>
                  <td>{asset.value}</td>
                  <td>
                    <button className="delete-asset">X</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="right-column">
        <h2>Expense History</h2>
        <ul className="expense-history">
          {expenseHistory.map((expense, index) => (
            <li key={index}>
              {expense.description} - ${expense.amount.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>

      {isPortfolioModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Portfolio</h2>
            <button className="close-btn" onClick={handlePortfolioModalClose}>
              &times;
            </button>
            <input
              type="text"
              placeholder="Portfolio Name"
              value={portfolioName}
              onChange={(e) => setPortfolioName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Portfolio Description"
              value={portfolioDescription}
              onChange={(e) => setPortfolioDescription(e.target.value)}
            />
            <button className="submit-btn" onClick={handlePortfolioSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}

      {isBudgetModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Budget</h2>
            <button className="close-btn" onClick={handleBudgetModalClose}>
              &times;
            </button>
            <input
              type="number"
              placeholder="Enter Budget Amount"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
            <button className="submit-btn" onClick={handleBudgetSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}

      {isAssetModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Asset</h2>
            <button className="close-btn" onClick={handleAssetModalClose}>
              &times;
            </button>
            <input
              type="text"
              placeholder="Asset Name"
              value={assetName}
              onChange={(e) => setAssetName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Quantity"
              value={assetQuantity}
              onChange={(e) => setAssetQuantity(e.target.value)}
            />
            <input
              type="number"
              placeholder="Purchase Price"
              value={assetPrice}
              onChange={(e) => setAssetPrice(e.target.value)}
            />

            <button className="submit-btn" onClick={handleAssetSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
