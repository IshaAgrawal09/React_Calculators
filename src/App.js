import React,{ useState } from 'react';
import Bmi from "./Bmi"
import BmiPounds from "./BmiPounds"
import './App.css';

function App() {

  const [system, setSystem] = useState("");
  let value;

  const buttons = (event) =>{
   if(event.target.innerText === "US Units"){
    setSystem("US Units");
  }
  else if(event.target.innerText === "Metric Units"){
    setSystem("Metric Units");
  }
}
  if(system === "US Units"){
    value = <Bmi />
    return value
  }
  else if(system === "Metric Units"){
    value = <BmiPounds />
    return value
  }
  else{
    return(
      <>
      <div className="App">
      <h3>Measurement in Units</h3>
        <button onClick={buttons}>US Units</button>
        <button onClick={buttons}>Metric Units</button>
        </div>
      </>
    )
  }
  
}
export default App;
