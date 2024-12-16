import React from 'react';

const StyledComponent = () => {
  const items = [
    { text: "Coach Amro", style: { color: 'red', fontSize: '20px', margin: '10px' } },
    { text: "Coach Leen", style: { color: 'blue', fontSize: '22px', margin: '10px' } },
    { text: "Coach Ragda", style: { color: 'green', fontSize: '24px', margin: '10px' } },
    { text: "Coach Salameh", style: { color: 'purple', fontSize: '18px', margin: '10px' } },
  ];

  return (
    <div>
      {items.map((item, index) => (
        <p key={index} style={item.style}>
          {item.text}
        </p>
      ))}
    </div>
  );
};

export default StyledComponent;
