import React, { useState } from "react";
import Header from "./components/Header";
import Router from './utils/Router'

function App() {
  const [data, setData] = useState([]);

  return (

    <>
    {/* <Header /> */}

    <Router />
    
    </>

    
  );
}

export default App;
