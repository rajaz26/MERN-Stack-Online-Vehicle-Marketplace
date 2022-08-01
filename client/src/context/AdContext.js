import { createContext, useState } from "react";

export const AdContext = createContext();

export const AdContextProvider = (props) => {
  const [car, setCar] = useState([]);

  return (
    <AdContext.Provider value={(car, setCar)}>
      {props.children}
    </AdContext.Provider>
  );
};
