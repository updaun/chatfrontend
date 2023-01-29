import React, { useState } from "react";

const App = () => {

  const [varA, setVarA] = useState("");
  const [varB, setVarB] = useState("");

  return <div>
      <input
        value={varA}
        type="number"
        onChange={(e) => {
            setVarA(e.target.value);
        }} 
      />
      <input
        value={varB}
        type="number"
        onChange={(e) => {
            setVarB(e.target.value);
        }} 
      />
      <Result vA={varA} vB={varB} />
  </div>;
};

export default App;

const Result = (props) => {
  const [result, setResult] = useState("");
  return (
    <div>
      <h3>Result: {result}</h3>
      <button onClick={() => {
        var res = parseFloat(props.vA) + parseFloat(props.vB);
        setResult(res);
      }}
      >
        Calculate
      </button>
    </div>
  );
};