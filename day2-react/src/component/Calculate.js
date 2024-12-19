import React, { useState } from 'react';

function First() {
  const [first, setFirst] = useState(123);
  const [second, setSecond] = useState(45);
  const [result, setResult] = useState();

  const Add = () => {
    setResult(Number(first) + Number(second));
  };

  const Add1 = () => {
    setResult(Number(first) - Number(second));
  };

  const  Add2 = () => {
    setResult(Number(first) * Number(second));
  };

  const Add3 = () => {
    if (second !== 0) {
      setResult(Number(first) / Number(second));
    } else {
      alert("Cannot divide by zero");
      setResult(0);
    }
  };

  return (
    <div>
      <input
        type="number"   
        value={first}
        // onChange={(e) => setFirst(e.target.value)}
      />
      
      <input
        type="number"
        value={second}
        // onChange={(e) => setSecond(e.target.value)} 
      />
      <button onClick={Add}>+</button>
      <button onClick={Add1}>-</button>
      <button onClick={Add2}>x</button>
      <button onClick={Add3}>/</button>
      <h1>결과: {result}</h1>
    </div>
  );
}

export default First;