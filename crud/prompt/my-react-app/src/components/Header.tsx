import React, { useState } from 'react';

interface HeaderProps {
  onDropdownChange: (option: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onDropdownChange }) => {
  const [search, setSearch] = useState('');
  return (
        <header className="header">
        <div className="app-name-tag">MyApp</div>
        <input
            className="search-box"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
        <div className="user-tag">John Doe</div>
        <select
            className="dropdown"
            onChange={e => onDropdownChange(e.target.value)}
        >
            <option value="0">Fruits</option>
            <option value="1">Vehicles</option>
            <option value="2">Animals</option>
            <option value="3">Sports</option>
        </select>
        </header>
  );
};

export default Header;