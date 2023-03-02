import React from "react";
import { useNavigate } from "react-router-dom";

const Sure = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/start");
  };

  return (
    <>
      <h1>Sure?</h1>
      {/* <button onClick={handleClick}>Começar novo jogo</button> */}
    </>
  );
};

export default Sure;
