// src/pages/GoldCoinsPage.js
import React, { useState } from 'react';
import Carousel from '../components/Carousel';
import Filter from '../components/Filter';

const GoldCoinsPage = () => {
  const [filters, setFilters] = useState({});
  const dummyData = [
    { image: 'https://via.placeholder.com/300', title: 'Gold Coin 1', description: 'Pure gold coin with intricate design.' },
    { image: 'https://via.placeholder.com/300', title: 'Gold Coin 2', description: 'Limited edition gold coin.' },
    // Add more items
  ];

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const filteredData = dummyData.filter(item => {
    // Apply filtering logic here
    return true; // Update with actual logic
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Gold Coins</h1>
      <div className="flex gap-8">
        <Filter onFilterChange={handleFilterChange} />
        <div className="flex-1">
          <Carousel items={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default GoldCoinsPage;
