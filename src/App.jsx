// src/App.js
import React, { useState } from "react";
import Canvas from "./components/Canvas";
import Toolbar from "./components/Toolbar";
import "./App.css";

function App() {
  const [color, setColor] = useState("#000000");
  const [lineWidth, setLineWidth] = useState(5);

  return (
    <div className="app">
      <h1 className="title">Приложение для рисования</h1>
      <Toolbar setColor={setColor} setLineWidth={setLineWidth} />
      <Canvas color={color} lineWidth={lineWidth} />
    </div>
  );
}

export default App;
