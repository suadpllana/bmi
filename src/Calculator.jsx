import React from 'react'
import {useState , useRef} from "react"
const Calculator = () => {
    
    const [result , setResult] = useState("")
    const [message , setMessage] = useState("")
  
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)

    function calculateBMI(){
       const bmi = inputRef1.current.value / (inputRef2.current.value * inputRef2.current.value)
       if(inputRef1.current.value === `` || inputRef2.current.value === ``){
        alert("Please enter both values")
        return
       }
       if(bmi > 24.9) {
        setMessage("You are overweight")
      
       }
       else if(bmi >= 18.5 && bmi <= 24.9){
        setMessage("You are healthy")
     
       }
       else{
        setMessage("You are underweight")
    
       }

      setResult(bmi.toFixed(2))
    }
  
    return (
    <div>
      <h1>BMI Calculator</h1>
      <label >Enter your weight in KG: </label>
      <input ref={inputRef1} type="number" placeholder="ex. 75"/><br /><br />

      <label>Enter your height in Meters: </label>
      <input ref={inputRef2} type="number"   placeholder="ex. 1.82"/><br /><br />
      <button onClick={calculateBMI}>Calculate</button>
      {result ? <>
        <p>Your BMI is {result}</p>
        <p >{message}</p>
                </>
                     : <></>}
    </div>
  )
}

export default Calculator
