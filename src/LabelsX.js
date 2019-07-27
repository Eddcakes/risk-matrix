import React from "react";

function LabelsX({data}){
  return (
    <div className="x-axis">
      {data.map( likelihood => {
        return (
          <React.Fragment>
            <div className="x-title">
              {likelihood.title}
            </div>
            <div className="x-desc">
              {likelihood.wordModel}
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default LabelsX