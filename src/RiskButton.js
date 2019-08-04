import React, {useState} from 'react';
//boundries 9, 23
function RiskButton({category, likelihood, boundries, accessability, onClick, currentSelected}) {
  const [isHover, setIsHover] = useState(false)
  const toggle = () => setIsHover(!isHover)
  const btnName = `c${category.id}l${likelihood.id}`
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
    const riskColor = `hsl(${hue}, 100%, 50%)`
    //0 is red
    //orange is 30
    //yellow is 60
    //green 120
    return (
        <button 
          type="button"
          style={{backgroundColor: `${riskColor}`}}
          name={btnName}
          value={riskValue}
          onClick={onClick}
          onMouseEnter={toggle}
          onMouseLeave={toggle}
        //do i want to use this type of synthetic event
      >
        <span>
        {/*accessability ? `${category.title} - ${likelihood.title}` : ''*/}
         {/*  {isHover ? `${category.title} - ${likelihood.title}` : ''} */}
          {isHover ? `${category.title} - ${likelihood.title}` : ''}
        </span>
      </button>
    )
}

export default RiskButton

  //maybe reverse map so i can check if value is under and change rather than forwards it wil always change to higher risk
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
