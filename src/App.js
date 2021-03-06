import React from "react";
import NavBar from "./components/NavBar";
import Bars from "./components/Bars";
import Footer from "./components/Footer";
import { useState } from "react";


function App() {

  // generate an array of random numbers between 1 and 65
  const [arr, setArr] = useState(Array(75).fill(5).map(() => Math.round(Math.random() * (65 - 1 + 1) + 1)));
  const [algorithm, setAlgorithm] = useState('Bubble Sort');
  const [speed, setSpeed] = useState(9);
  const [beginSort, setBeginSort] = useState(false);
  return (
    <>
    <main>
      <NavBar setArr={setArr} setAlgorithm={setAlgorithm} setSpeed={setSpeed} setBeginSort={setBeginSort}/>
      <Bars arr={arr} algorithm={algorithm} speed={speed} beginSort={beginSort}/>
      <Footer setBeginSort={setBeginSort}/>
    </main>
    </>
    
  );
}

export default App;