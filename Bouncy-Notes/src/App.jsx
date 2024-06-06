import React, { useState } from "react";
import Full from "./components/Full";

function App() {
  const [data, setData] = useState([]);

  return (

    <Full data={data} setData={setData} />
    
  );
}

export default App;
