import React from 'react'

const Show = (props) => {
    if(props.calc!== ""){
        if(props.calc<18.5){
            props.setShow("You are underWeight!");
        }
        else if(props.calc>=18.5 && props.calc <= 24.9){
            props.setShow("You are Healthy Weight!");
        }
        else if(props.calc>=25 && props.calc<= 29.9){
            props.setShow("You are Over Weight!");
        }
        else{
            props.setShow("Obesity!");
        }
        var showCalc = `Your BMI is: ${props.calc}`;
    }
   
  return (
      <>
      <div className="showres">
          <p>{showCalc}</p>
          <p>{props.val}</p> 
      </div>
      </>
    
  );
}

export default Show