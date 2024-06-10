import React from "react";
import Background from "../components/Background";
import Foreground from "../components/Foreground";

function Full() {
  return (
    <>
      <div className="relative w-full h-[100vh] bg-zinc-800 text-zinc-300">
        <Background />
        <Foreground />
      </div>
    </>
  );
}

export default Full;
