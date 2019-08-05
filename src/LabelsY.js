import React from "react";

function LabelsY({data}){
  return (
    <div className="y-axis">
      {data.map( category => {
        return (
          <React.Fragment key={`y${category.id}`}>
            <div className="y-title">
              {category.title}
            </div>
            <div className="y-desc">
              {category.wordModel}
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default LabelsY

/* 
            <div className="level">{category.level}</div>
            <div className="word-model">{category.wordModel}</div>
            
*/