import React from 'react';
import './App.css';
import LifeCycleMethod from "./LifeCycleMethod";

function App() {

  const [hideShowLCM, setHideShowLCM] = React.useState(true);

  return (
    <div className="App">
      {hideShowLCM && <LifeCycleMethod favcol={"white"} />}
      <button onClick={(e) => setHideShowLCM(!hideShowLCM)} >Toogle Comp</button>
    </div>
  );
}

export default App;
