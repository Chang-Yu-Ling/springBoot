import React, { useState } from 'react';

// const ThemeToggle: React.FC = () => {
//     const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

//     const toggleTheme = () => {
//         setIsDarkMode(prevMode => !prevMode);
//         document.body.classList.toggle('dark-mode', !isDarkMode);
//     };

//     return (
//         <button onClick={toggleTheme} className="theme-toggle">
//             {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//         </button>
//     );
// };


interface ThemeToggleProps {
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleTheme }) => (
  <button onClick={toggleTheme}>Toggle Theme</button>
);
export default ThemeToggle;