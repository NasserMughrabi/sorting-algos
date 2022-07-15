import React from "react";
import Bars from "./components/Bars";
import NavBar from "./components/NavBar";
import Bottom from "./components/Bottom";


const arr = Array(25).fill(5).map(() => Math.round(Math.random() * 69));

function App() {
  return (
    <>
    <main>
      <NavBar />
      <Bars arr={arr}/>
      <Bottom />
    </main>
    </>
    
  );
}

export default App;