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
          title={"Bouncy Notes"}
          size={100}
        />
      </div>
    </>
  );
}

export default TryLoader;
