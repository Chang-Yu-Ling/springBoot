import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import './styles/App.css';

const iconDescriptions = [
  [
    { icon: '🍎', label: 'Apple' },
    { icon: '🍊', label: 'Orange' },
    { icon: '🍋', label: 'Lemon' },
    { icon: '🍇', label: 'Grape' },
    { icon: '🍉', label: 'Watermelon' },
  ],
  [
    { icon: '🚗', label: 'Car' },
    { icon: '🚕', label: 'Taxi' },
    { icon: '🚙', label: 'SUV' },
    { icon: '🚌', label: 'Bus' },
    { icon: '🚎', label: 'Trolley' },
  ],
  [
    { icon: '🐶', label: 'Dog' },
    { icon: '🐱', label: 'Cat' },
    { icon: '🐭', label: 'Mouse' },
    { icon: '🐹', label: 'Hamster' },
    { icon: '🐰', label: 'Rabbit' },
  ],
  [
    { icon: '⚽', label: 'Soccer' },
    { icon: '🏀', label: 'Basketball' },
    { icon: '🏈', label: 'Football' },
    { icon: '⚾', label: 'Baseball' },
    { icon: '🎾', label: 'Tennis' },
  ],
];

interface IconSetProps {
  icons: { icon: string; label: string; }[];
}

const IconSet: React.FC<IconSetProps> = ({ icons }) => (
  <div className="icon-set">
    {icons.map((item, idx) => (
      <div className="icon-with-label" key={idx}>
        <span className="icon">{item.icon}</span>
        <div className="icon-label">{item.label}</div>
      </div>
    ))}
  </div>
);

const App: React.FC = () => {
  const [selectedSet, setSelectedSet] = useState(0);

  return (
    <div className="app-container">
      <Header onDropdownChange={idx => setSelectedSet(Number(idx))} />
      <div className="main-content">
        <Sidebar />        
        <div className="icon-body">
            <IconSet icons={iconDescriptions[selectedSet]} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;