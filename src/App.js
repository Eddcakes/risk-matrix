import React from 'react';
import Risk from './Risk.js';
import RiskMatrix from './RiskMatrix.js';

function App() {
  return (
    <div className="App">
      { <RiskMatrix lower="9" upper="23" boundries={[9, 23]} /> }
      {<Risk boundries={[9, 23]} />}
      
    </div>
  );
}

export default App;
