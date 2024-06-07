import React, { useState } from "react";
import Background from "../components/Background";
import Foreground from "../components/Foreground";

function Full() {
  const [data, setData] = useState([]);

  return (
    <>
      <div className="relative w-full h-[100vh] bg-zinc-800 text-zinc-300">
        <Background />
        <Foreground data={data} setData={setData} />
      </div>
    </>
  );
}

export default Full;
