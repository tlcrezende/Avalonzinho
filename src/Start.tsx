import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

//TUDU: fazer um contexto global para colocar o nome dos jogadores pois o react reiniciar o estado dos 
//jogadores quando muda de página. Daí refatorar e acho que não precisa do players, apenas do length do array de players

const Start = () => {
  const navigate = useNavigate();
  const [players, setPlayers] = React.useState(5);
  const [validation, setValidation] = React.useState(false);
  const [playersProps, setPlayersProps] = React.useState([
    { name: "Jogador nº 1" },
    { name: "Jogador nº 2" },
    { name: "Jogador nº 3" },
    { name: "Jogador nº 4" },
    { name: "Jogador nº 5" },
  ]);

  const handleClick = () => {
    navigate("/");
  };

  const handleClickContinuar = () => {
    navigate("/sure");
  };

  const handleChange = ({ target }) => {
    if (target.value < 5 || target.value > 10) {
      setValidation(true);
    } else {
      if (target.value > playersProps.length) {
        const add = target.value - playersProps.length;
        const copy = [...playersProps];
        copy.push({ name: "Adicionado" });
        setPlayersProps(copy);
      } else {
        const copy = [...playersProps];
        copy.pop();
        setPlayersProps(copy);
      }
      setValidation(false);
      setPlayers(target.value);
    }
  };

  console.log(playersProps);

  return (
    <>
      <button onClick={handleClick}>Voltar</button>
      <h1>Tela de inicialização de jogadores</h1>
      <label>Escolha o número de jogadores:</label>
      <br />
      <input type={"number"} value={players} onChange={handleChange} />
      {validation && (
        <p>Número de jogadores não pode ser menor que 5 ou maior do que 10</p>
      )}
      <br />
      <Form
        nPlayer={"1"}
        playersProps={playersProps}
        setPlayersProps={setPlayersProps}
      />
      <br />
      <Form
        nPlayer={"2"}
        playersProps={playersProps}
        setPlayersProps={setPlayersProps}
      />
      <br />
      <Form
        nPlayer={"3"}
        playersProps={playersProps}
        setPlayersProps={setPlayersProps}
      />
      <br />
      <Form
        nPlayer={"4"}
        playersProps={playersProps}
        setPlayersProps={setPlayersProps}
      />
      <br />
      <Form
        nPlayer={"5"}
        playersProps={playersProps}
        setPlayersProps={setPlayersProps}
      />
      <br />
      {players > 5 && (
        <>
          <Form
            nPlayer={"6"}
            playersProps={playersProps}
            setPlayersProps={setPlayersProps}
          />
          <br />
        </>
      )}
      {players > 6 && (
        <>
          <Form
            nPlayer={"7"}
            playersProps={playersProps}
            setPlayersProps={setPlayersProps}
          />
          <br />
        </>
      )}
      {players > 7 && (
        <>
          <Form
            nPlayer={"8"}
            playersProps={playersProps}
            setPlayersProps={setPlayersProps}
          />
          <br />
        </>
      )}
      {players > 8 && (
        <>
          <Form
            nPlayer={"9"}
            playersProps={playersProps}
            setPlayersProps={setPlayersProps}
          />
          <br />
        </>
      )}
      {players > 9 && (
        <>
          <Form
            nPlayer={"10"}
            playersProps={playersProps}
            setPlayersProps={setPlayersProps}
          />
          <br />
        </>
      )}
      <hr />
      <button onClick={handleClickContinuar}>Continuar</button>

    </>
  );
};

export default Start;
