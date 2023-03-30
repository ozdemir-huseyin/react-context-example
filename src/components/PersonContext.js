import React, { createContext, useState } from "react";
import Person from "../Person.json";
export const PersonAllContext = createContext();
const PersonContext = ({ children }) => {
  const [personList, setPersonList] = useState(Person);
  return (
    <PersonAllContext.Provider value={{ personList, setPersonList }}>
      {children}
    </PersonAllContext.Provider>
  );
};

export default PersonContext;
