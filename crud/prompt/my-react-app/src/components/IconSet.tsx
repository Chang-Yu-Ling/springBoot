import React from 'react';

interface IconSetProps {
  icons: string[];
}

const IconSet: React.FC<IconSetProps> = ({ icons }) => (
  <div className="icon-set">
    {icons.map((icon, idx) => (
      <span className="icon" key={idx}>{icon}</span>
    ))}
  </div>
);

export default IconSet;