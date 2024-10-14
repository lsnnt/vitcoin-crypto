// src/components/SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css'; // Create this CSS file for styling

const SearchBar = ({ onSearch }) => {
    const [transactionId, setTransactionId] = useState('');

    const handleChange = (e) => {
        setTransactionId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (transactionId) {
            onSearch(transactionId);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                placeholder="Enter Transaction ID"
                value={transactionId}
                onChange={handleChange}
                required
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
