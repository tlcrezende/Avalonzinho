import React from "react";

function App() {
  const [start, setStart] = React.useState(false);

  function handleClick() {
    setStart(!start);
  }

  return (
    <div>
      <h1>Avalonzinho</h1>
      {!start && <button onClick={handleClick}>Começar</button>}
      {start && <button onClick={handleClick}>voltar</button>}
    </div>
  );
}

export default App;
