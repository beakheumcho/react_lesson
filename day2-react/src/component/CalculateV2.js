import React, { useState } from 'react';

function CalculateV2() {
  //useState 함수로 만들어진 상태변수는 값이 바뀔 때마다
  // 모든 변수값이 새로 계산되고 그 값으로 재(re)렌더링 합니다.
  // 단, 상태 변수는 이전 값(상태)는 유지됩니다.
  const [first, setFirst] = useState(123);
  const [second, setSecond] = useState(45);
  const [result, setResult] = useState();

  const Add = () => {
    setResult(first+second)
  };

  const Add1 = () => {
    setResult(first-second)
  };

  const  Add2 = () => {
    setResult(first*second)
  };

  const Add3 = () => {
    if (second !== 0) {
      setResult(first/second)
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
        onChange={(e) => setFirst(Number(e.target.value))}
      />
      
      <input
        type="number"
        value={second}
        onChange={(e) => setSecond(Number(e.target.value))} 
      />
      <button onClick={Add}>+</button>
      <button onClick={Add1}>-</button>
      <button onClick={Add2}>x</button>
      <button onClick={Add3}>/</button>
      <h1>결과: {result}</h1>
    </div>
  );
}

export default CalculateV2;
