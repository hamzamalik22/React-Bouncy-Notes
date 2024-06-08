import React from "react";
import Loader from "react-js-loader";

function TryLoader() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-zinc-800">
        <Loader
          type="bubble-top"
          bgColor={"grey"}
          color={"grey"}
          title={""}
          size={100}
        />
      </div>
      <h1 className="text-5xl font-semibold tracking-tighter text-zinc-500 absolute left-1/2 -translate-x-[50%] bottom-[20%] -translate-y-[100%] ">Bouncy Notes</h1>
    </>
  );
}

export default TryLoader;
