import React, { useState } from 'react';
import '../styles/Header.css';

function Header({ onSearch, setLocation }) {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    onSearch(input);
    setLocation(input);
  };

  return (
    <header className="Header">
      <input
        type="text"
        placeholder="Enter city name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </header>
  );
}

export default Header;
