import "./App.css";
import React, { useState } from "react";
// import Show from "./Show"

function App() {
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [display, setDisplay] = useState('none')
  const [error, setError] = useState("");
  const [ansemi, setAnsemi] = useState("");
  const [ansAmount, setAnsAmount] = useState("");
  const [ansInterest, setAnsInterest] = useState("");

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };
  const handleInterest = (event) => {
    setInterest(event.target.value);
  };
  const handleYear = (event) => {
    setYear(event.target.value);
  };
  const handleMonth = (event) => {
    setMonth(event.target.value);
  };

  const calculate = () => {
    if (amount != "" && interest != "" && year != "" && month != "") {
      if (
        /^\d+$/.test(amount) &&
        /^\d*\.?\d*$/.test(interest) &&
        /^\d+$/.test(year) &&
        /^\d+$/.test(month)
      ) {
        const time = parseInt(month) + parseInt(year * 12);
        const rate = interest / 12 / 100;
        const val = (1 + parseFloat(rate)) ** time;
        let emi = amount * rate * (val / (val - 1));
        let totalAmount = emi * time;
        let totalInterest = totalAmount - amount;
        emi = emi.toFixed(2);
        totalAmount = totalAmount.toFixed(2);
        totalInterest = totalInterest.toFixed(2);
        setAnsemi(emi);
        setAnsAmount(totalAmount);
        setAnsInterest(totalInterest);
        setDisplay('block')
        setError("");
      } else {
        setAnsemi("");
        setAnsAmount("");
        setAnsInterest("");
        setDisplay('none')
        setError("All Fields must be a number!");
      }
    } else {
      setAnsemi("");
      setAnsAmount("");
      setAnsInterest("");
      setDisplay('none')
      setError("Please fill all the fields!");
    }
  };
 

  const reset = () => {
    // debugg er;
    setAmount("");
    setInterest("");
    setYear("");
    setMonth("");
    setAnsemi("");
    setAnsAmount("");
    setAnsInterest("");
    setError("");
    setDisplay('none')
  };

  return (
    <div className="App">
      <h2>EMI Calculator</h2>
      <div className="bmi">
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="amount">Loan Amount: </label>
              </td>
              <td>
                <input
                  type="text"
                  id="amount"
                  placeholder="Enter Amount"
                  value={amount}
                  onChange={handleAmount}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="interest">Interest%: </label>
              </td>
              <td>
                <input
                  type="text"
                  id="interest"
                  placeholder="Enter interest"
                  value={interest}
                  onChange={handleInterest}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="period">period: </label>
              </td>
              <td>
                <input
                  type="text"
                  id="period"
                  placeholder="Year"
                  value={year}
                  onChange={handleYear}
                />
                <input
                  type="text"
                  id="period"
                  placeholder="Month"
                  value={month}
                  onChange={handleMonth}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="btn">
        <button onClick={calculate}>CALCULATE</button>
        <button onClick={reset}>RESET</button>
      </div>
      <p>{error}</p>

      <div className="showres" style={{display:display}}>
       
          <table className="res">
            <tbody>
              <tr>
                <td>Monthly EMI: </td>
                <td>{ansemi}</td>
              </tr>
              <tr>
                <td>Total Interest: </td>
                <td>{ansAmount}</td>
              </tr>
              <tr>
                <td>Total Payment: </td>
                <td>{ansInterest}</td>
              </tr>
            </tbody>
          </table>
       
      </div>
    </div>
  );
}

export default App;
