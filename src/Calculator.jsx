import React, { useState, useRef } from 'react';

const Calculator = () => {
    const [result, setResult] = useState("");
    const [message, setMessage] = useState("");
    const [weight, setWeight] = useState(75); 
    const [height, setHeight] = useState(1.75); 

    
    function calculateBMI() {
        const bmi = weight / (height * height);
        setResult(bmi.toFixed(2));

      
        if (bmi > 24.9) {
            setMessage("Overweight");
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            setMessage("Healthy");
        } else {
            setMessage("Underweight");
        }
    }

    const handleWeightChange = (event) => {
        const newWeight = event.target.value;
        setWeight(newWeight);
        calculateBMI(); 
    };

    const handleHeightChange = (event) => {
        const newHeight = event.target.value;
        setHeight(newHeight);
        calculateBMI(); 
    };

    return (
        <div>
        <div className="bmi-card">
            <h1>BMI Calculator</h1>
            <label>Weight in KG</label>
            <input
               
                type="range"
                min="30"
                max="200"
                step="1"
                value={weight}
                onChange={handleWeightChange}
            />
            <span>{weight} kg</span>
            <br /><br />

            <label>Height in CM </label>
            <input
             
                type="range"
                min="1"
                max="2.5"
                step="0.01"
                value={height}
                onChange={handleHeightChange}
            />
            <span>{(height * 100).toFixed(0)} cm</span>
            <br /><br />

            {result && (
                <>
                    <p>Your BMI is {result}</p>
                    <p className={result > 24.9 ? "red" : (result >= 18.5 && result <= 24.9 ? "green" : "blue")}>Category: {message}</p>
                </>
            )}
        </div>
        </div>
    );
};

export default Calculator;
