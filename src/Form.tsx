import React from "react";

const Form = ({ nPlayer, playersProps, setPlayersProps }) => {
  const handleChange = ({ target }) => {
    const copy = [...playersProps];
    copy[nPlayer - 1].name = target.value;
    setPlayersProps(copy);
  };
  return (
    <>
      <form>
        <label htmlFor={`player${nPlayer}`}>
          Nome do jogador número {nPlayer}:
        </label>
        <br />
        <input
          id={`player${nPlayer}`}
          name={`player${nPlayer}`}
          type={"text"}
          value={playersProps[nPlayer - 1].name}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default Form;
