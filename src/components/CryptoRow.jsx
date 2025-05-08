import React from 'react';
import './CryptoRow.css';

const CryptoRow = ({ asset, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td><img src={asset.logo} alt={asset.name} className="logo"  /> </td>
      <td>{asset.name}</td>
      <td>{asset.symbol}</td>
      <td>${asset.price.toLocaleString()}</td>
      <td className={asset.change1h >= 0 ? "green" : "red"}>{asset.change1h}%</td>
      <td className={asset.change24h >= 0 ? "green" : "red"}>{asset.change24h}%</td>
      <td className={asset.change7d >= 0 ? "green" : "red"}>{asset.change7d}%</td>
      <td>${asset.marketCap.toLocaleString()}</td>
      <td>${asset.volume24h.toLocaleString()}</td>
      <td>{asset.circulatingSupply}</td>
      <td>{asset.maxSupply}</td>
      <td><img src={asset.chartImage} alt="chart" className="chart" /></td>
    </tr>
  );
};

export default CryptoRow;