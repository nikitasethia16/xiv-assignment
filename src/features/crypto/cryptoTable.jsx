import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CryptoRow from '../../components/CryptoRow';
import './CryptoTable.css';

const CryptoTable = () => {
  const assets = useSelector((state) => state.crypto);
  
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
  const [searchQuery, setSearchQuery] = useState(''); // Search state

  // Filter assets by search query
  const filteredAssets = assets.filter((asset) =>
    asset.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const columns = [
    { label: '#', key: 'id' },
    { label: 'Logo', key: 'logo' },
    { label: 'Name', key: 'name' },
    { label: 'Symbol', key: 'symbol' },
    { label: 'Price', key: 'price' },
    { label: '1h %', key: 'oneHourPercent' },
    { label: '24h %', key: 'twentyFourHourPercent' },
    { label: '7d %', key: 'sevenDayPercent' },
    { label: 'Market Cap', key: 'marketCap' },
    { label: '24h Volume', key: 'twentyFourHourVolume' },
    { label: 'Circulating', key: 'circulatingSupply' },
    { label: 'Max Supply', key: 'maxSupply' },
    { label: '7D Chart', key: 'chart' }
  ];

  // Function to handle sorting
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    setSortConfig({ key, direction });
  };

  // Sorting function
  const sortedAssets = [...filteredAssets].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  // Render sorting icon based on the sort direction
  const renderSortIcon = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  return (
    <div className="table-wrapper">
           <div className="search-container">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      <table>
        <thead>
          <tr>
            {columns.map(({ label, key }) => (
              <th key={key} onClick={() => handleSort(key)}>
                {label} {renderSortIcon(key)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
          sortedAssets.length==0?
          <p className="no-data-message">No data found</p>
         :
          sortedAssets.map((asset, index) => (
            <CryptoRow key={asset.id} asset={asset} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
