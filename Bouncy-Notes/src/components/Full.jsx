import React from "react";
import Background from "./Background";
import Foreground from "./Foreground";

function Full({ data, setData }) {
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
