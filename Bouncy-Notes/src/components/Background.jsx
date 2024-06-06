import React from "react";

function Background() {
  return (
    <>
      <div className="Absolute w-full h-full -z-20">
        <div className="flex justify-center items-end py-10 text-md font-semibold text-zinc-500 capitalize">
          Documents.
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] tracking-tighter  -translate-y-[60%] text-[10vw] font-semibold text-zinc-500 ">
          Bouncy
        </h1>
        <h5 className="absolute top-1/2 left-1/2 -translate-x-[5%] tracking-tighter -translate-y-[-10%] text-[5vw] font-semibold text-zinc-400">
          Notes...
        </h5>
      </div>
    </>
  );
}

export default Background;
