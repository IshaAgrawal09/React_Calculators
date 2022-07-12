import "./App.css";
import React,{ useState } from 'react';
import Show from "./Show"

function App() {
  const [unit,setUnit] = useState("")
  const [error,setError] = useState("")
  const [calc,setCalc] = useState("")

  const handleUnit = (event) =>{
    setUnit(event.target.value)
  }

  const calculate = () =>{
    if(unit !== ""){
      if(/^\d+$/.test(unit)){
        if(unit <=50){
          setCalc(unit * 3.50)
        }
        else if(unit <=150){
          setCalc(50 * 3.50 + (unit - 50) * 4)
        }
        else if(unit <=250){
          setCalc(50 * 3.50 + 100 * 4 + (unit - 150) * 5.20)
        }
        else{
          setCalc(50*3.50 + 100*4 + 100*5.20 + (unit - 250)*6.50)
        }
       setError("")
      }else{
        setError("Units should be a number!")
        setCalc("")
      }

    }
    else{
      setError("Please fill all the fields!")
      setCalc("")
    }
  }

  const clear = () =>{
    setUnit("")
    setError("")
    setCalc("")
  }

  return (
    <div className="App">
      <h2>Electricity Bill</h2>
      <div className="bmi">
        <div>
          <label htmlFor="unit">Units: </label>
          <input
            type="text"
            id="units"
            name="units"
            value={unit}
            placeholder="Enter Units"
            onChange={handleUnit}
          />
        </div>
        <div className="btn">
          <button onClick={calculate}>Calculate</button>
          <button onClick={clear}>Clear</button>
        </div>
      </div>
      <p>{error}</p>
      <Show calc={calc}/>
      
    </div>
  );
}

export default App;
