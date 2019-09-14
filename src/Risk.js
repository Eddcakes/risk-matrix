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
  const [selected, setSelected] = useState('')
  let categories = catsData //.reverse();
  const likelihoods = likesData;
  categories.reverse()
/*   const mekBounds = boundries.map(item => {
    return <div>item: {item}</div>;
  }); */
  
  const riskClick = (e) => {
    //do i need to know which button was clicked or just make sure we get the value
    setSelected(e.target.closest("button"))
  }
  return (
    <React.Fragment>
      <div className="ra-container">
        <LabelsX data={likelihoods}/>
        <LabelsY data={categories}/>
        <Matrix 
          accessability={true}
          y={categories} 
          x={likelihoods} 
          boundries={boundries} 
          onClick={riskClick}
          currentSelected={selected} 
          //want a nicer way this will act as liike last selected
        />
      </div>
      <div className="value">{selected.value}</div>
    </React.Fragment>
  );
}

export default Risk;