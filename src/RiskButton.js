import React from 'react';
//boundries 9, 23
function RiskButton({category, likelihood, boundries, accessability, onClick}) {
  const riskValue = category.value * likelihood.value  
  //work out button style 
    
  let hue
  if (riskValue < boundries[0]){
    hue = 120
  }else if (riskValue < boundries[1]){
    hue = 40
  }else {
    hue = 0
  }
/*  boundries.map( (boundry, index) => {
    const bLength = boundries.length
    const compHue = 120 / (bLength + 1)
    if (riskValue < boundry){

    }
    return hue = index * compHue
    //this is how many sections we have to split it into
      index === bLength 
    ? hue = 0
    :  
  }) */

    const riskColor = `hsl(${hue}, 100%, 50%)`
    //0 is red
    //orange is 30
    //yellow is 60
    //green 120
    
    return (
        <button 
        style={{backgroundColor: `${riskColor}`}}
        name={`c${category.id}l${likelihood.id}`}
        value={riskValue}
        onClick={onClick}
      >
        {accessability ? `${category.title} - ${likelihood.title}` : ''}
      </button>
    )
}

export default RiskButton