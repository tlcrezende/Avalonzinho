import React from "react";

export const PlayersContext = React.createContext();

export const PlayersStorage = ({ children }) => {
  const [playersProps, setPlayersProps] = React.useState([
    { name: "Jogador nº 1", role: '' },
    { name: "Jogador nº 2", role: '' },
    { name: "Jogador nº 3", role: '' },
    { name: "Jogador nº 4", role: '' },
    { name: "Jogador nº 5", role: '' },
  ]);

  return (
    <PlayersContext.Provider value={{ playersProps, setPlayersProps }}>
      {children}
    </PlayersContext.Provider>
  );
};
