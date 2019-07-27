import React, {useState} from "react";
import LabelsX from "./LabelsX";
import LabelsY from "./LabelsY";
import Matrix from "./Matrix";
import catsData from "./data/categoryModel";
import likesData from "./data/likelihoodModel";

//assessability mode
//should i have color blind mode?
//when hovering on button should make category + likelihood selected bold
function Risk({ boundries }) {
  const [selected, setSelected] = useState('none')
  const categories = catsData;
  const likelihoods = likesData;
  const mekBounds = boundries.map(item => {
    return <div>item: {item}</div>;
  });
  
  const riskClick = (e) => {
    //do i need to know which button was clicked or just make sure we get the value
    setSelected(e.target.value)
  }

  return (
    <React.Fragment>
      <div className="ra-container">
        <LabelsX data={likesData}/>
        <LabelsY data={catsData}/>
        <Matrix 
          accessability={true}
          y={categories} 
          x={likelihoods} 
          boundries={boundries} 
          onClick={riskClick}
        />
      </div>
      <div className="value">{selected}</div>
    </React.Fragment>
  );
}

export default Risk;