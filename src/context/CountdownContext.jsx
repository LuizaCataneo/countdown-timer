import React from "react";

import { useState } from "react";

const CountdownContext = React.createContext(null);

const CountdownProvider = ({ children }) => {
  const [event, setEvent] = useState(null); // evento recebido do formulário
  return (
    <CountdownContext.Provider value={{ event, setEvent }}>
      {children}
    </CountdownContext.Provider>
  );
};

export { CountdownContext, CountdownProvider };
