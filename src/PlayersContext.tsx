import React from "react";

export const PlayersContext = React.createContext();

export const PlayersStorage = ({ children }) => {
  const [playersProps, setPlayersProps] = React.useState([
    { name: "Jogador nº 1" },
    { name: "Jogador nº 2" },
    { name: "Jogador nº 3" },
    { name: "Jogador nº 4" },
    { name: "Jogador nº 5" },
  ]);

  return (
    <PlayersContext.Provider value={{ playersProps, setPlayersProps }}>
      {children}
    </PlayersContext.Provider>
  );
};
