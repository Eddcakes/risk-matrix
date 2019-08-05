import React from "react";
import RiskButton from "./RiskButton";

/* 
do we want to be able to access values by using array syntax like a[][]
then can assign risks to that button
-> maybe this should be a different application to give items risk scores
rather than press a button to get the score out
*/

function Matrix({accessability, y, x, boundries, onClick, currentSelected}){
  //get boundries
  const bDetails = boundries.sort((a, b) => a - b)
  //history should be a state so we can keep track of it here, how will we control this by checkbox tho?
  const selectedName = currentSelected !== ""
  ? currentSelected.name
  : ""
  return (
    <div className="matrix">
      {y.map( category => {
        return (
          <div className="btn-row" key={`y${category.id}`}>
            {x.map( likelihood => {
              return (
                <RiskButton 
                  key={`c${category.id}l${likelihood.id}`}
                  category={category} 
                  likelihood={likelihood} 
                  boundries={bDetails} 
                  onClick={onClick} 
                  accessability={accessability}
                  lastSelected={selectedName}
                /> 
              )
            })}
          </div>)
      })}
    </div>
  )
}

export default Matrix