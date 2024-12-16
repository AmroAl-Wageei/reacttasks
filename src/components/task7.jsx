import React from 'react';

const StyledComponent = () => {

    const items = ["Student 1 ", "Student 2", "Student 3", "Student 4"];

  const commonStyle = {
    color: 'white',  
    backgroundColor: 'orange',
    padding: '10px', 
    borderRadius: '5px',  
    margin: '5px', 
    textAlign: 'center',
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} style={commonStyle}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default StyledComponent;
