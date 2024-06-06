import React, { createContext, useState } from "react";

export const dataContext = createContext();

const Context = (props) => {
  const [data, setData] = useState([]);

  return <dataContext.Provider value={{data, setData}} >{props.children}</dataContext.Provider>;
};

export default Context;
