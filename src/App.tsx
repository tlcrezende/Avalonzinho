import React from "react";

function App() {
  const [phase, setPhase] = React.useState(0);

  function handleClick() {
    setPhase(1);
  }

  return (
    <div>
      <h1>Avalonzinho</h1>
      <button onClick={handleClick}>Começar</button>
      {''}
    </div>
  );
}

export default App;
