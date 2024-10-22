// src/components/Filter.js
import React from 'react';

const Filter = ({ onFilterChange }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Filters</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Price Range</label>
          <input
            type="range"
            min="0"
            max="1000"
            onChange={(e) => onFilterChange('price', e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Weight (grams)</label>
          <input
            type="range"
            min="0"
            max="100"
            onChange={(e) => onFilterChange('weight', e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Gender</label>
          <select
            onChange={(e) => onFilterChange('gender', e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
