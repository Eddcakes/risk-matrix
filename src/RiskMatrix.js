import React from "react";

import categories from "./data/categoryModel";
import likelihoods from "./data/likelihoodModel";



function RiskMatrix({ lower, upper, boundries}) {
  /* 
  would be nice to be able to toggle show descriptions to make more compact

  */
  return (
    <div className="risk-matrix">
      <Rows
        cats={categories.reverse()}
        likes={likelihoods}
        lower={lower}
        upper={upper}
        boundries={boundries}
      />
      <div className="row">
        padding
        <div>Very unlikely</div>
      </div>
      <div className="row">padding</div>
    </div>
  );
}

function Rows({ cats, likes, lower, upper, boundries }) {
  //need a way of getting button values
  return (
    <React.Fragment>
      {cats.map(category => (
        <React.Fragment key={`category${category.id}`}>
          <div className="row">
            <div className="level">{category.level}</div>
            <div className="word-model">{category.wordModel}</div>
            
            {likes.map(likelihood => {
              const btnValue = category.value * likelihood.value;
              const riskLevels = { low: "low", medium: "medium", high: "high" };
              let riskLevel = riskLevels.low;
              switch (true) {
                case btnValue > upper:
                  riskLevel = riskLevels.high;
                  break;
                case btnValue > lower:
                  riskLevel = riskLevels.medium;
                  break;
                default:
                  riskLevel = riskLevels.low;
              }
              return (
                <button className={riskLevel} key={`like${likelihood.id}`}>
                  {btnValue}
                </button>
              );
            })}
          </div>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}

/*
function RowFooter() {
  return (
    <div className="row">
      <div />
    </div>
  );
}
*/

/* 
  const makeButtons = (category, likelihood) => {
    likes.map(likelihood => (
      <button>
        {category.value * likelihood.value}
      </button>
    ))
  };
*/

export default RiskMatrix;

/* 
I would kind of like to be able to get a score by referencing an array location [0,3]
i guess how the tic tac toe works
*/