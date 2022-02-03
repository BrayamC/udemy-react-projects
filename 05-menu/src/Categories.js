import React from 'react';

const Categories = ({setOption, options}) => {
  return (
    <div>
    {
      options.map((option, idx) => {
        return <button key ={idx} className="filter-btn" onClick={() => setOption(option)}>{option}</button>
      })
    }
     </div>
  );
};

export default Categories;
