import React, { useState } from "react";
import Show from "./Show";
const Bmi = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [calc, setCalc] = useState("");
  const [show, setShow] = useState("");
  const [error, setError] = useState("");

  const handleWeight = (event) => {
    setWeight(event.target.value);
  };

  const handleHeight = (event) => {
    setHeight(event.target.value);
  };

  const calculate = () => {
    if (weight != "" && height != "") {
      if (
        /^[+-]?([0-9]*[.])?[0-9]+$/.test(weight) &&
        /^[+-]?([0-9]*[.])?[0-9]+$/.test(height)
      ) {
        const newHeight = height * height;
        var val = weight / newHeight;
        val = val.toFixed(2);
        setCalc(val);
        setError("");
      } else {
        setError("fields should be number!");
        setShow("");
        setCalc("");
      }
    } else {
      setError("Please fill all the fields!");
      setShow("");
      setCalc("");
    }
  };
  return (
    <div className="bmi">
      <h2>BMI Calculator</h2>

      <div>
        <label htmlFor="weight">Weight: </label>
        <input
          type="text"
          id="weight"
          name="weight"
          placeholder="Kg"
          value={weight}
          onChange={handleWeight}
        />
      </div>
      <div>
        <label htmlFor="height">Height: </label>
        <input
          type="text"
          id="height"
          name="height"
          placeholder="m"
          value={height}
          onChange={handleHeight}
        />
      </div>
      <button onClick={calculate}>Calculate BMI</button>
      <p>{error}</p>
      <Show calc={calc} val={show} setShow={setShow} />
    </div>
  );
};

export default Bmi;
