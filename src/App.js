import "./App.css";
import "../src/style.css";
import { useState } from "react";

function App() {
  const [number, SetNumber] = useState(Math.floor(Math.random() * 100) + 1);

  function randomNumber() {
    SetNumber(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <span id="number">Número = {number}</span>
        <button onClick={randomNumber} id="botao">
          Gerar Número Aleatório
        </button>
      </header>
    </div>
  );
}

export default App;
