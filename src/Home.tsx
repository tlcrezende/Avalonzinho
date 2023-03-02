import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

  const handleClick = () => {
		navigate('/start');
	};

  return (
    <>
      <h1>Avalonzinho tela inicial</h1>
      <button onClick={handleClick}>Começar novo jogo</button>
    </>
  );
};

export default Home;
