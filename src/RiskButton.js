import React from 'react';

function RiskButton({category, likelihood, boundries, accessability, onClick}) {
    //work out button style 
    
    return (
        <button 
        style={{backgroundColor: ``}}
        name={`c${category.id}l${likelihood.id}`}
        value={category.value * likelihood.value}
        onClick={onClick}
      >
        {accessability ? `${category.title} - ${likelihood.title}` : ''}
      </button>
    )
}

export default RiskButton