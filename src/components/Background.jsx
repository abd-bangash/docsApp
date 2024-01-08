import React from "react";

function Background() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen "></div>
      <div className="flex justify-center py-10 w-full text-zinc-200 text-xl absolute  top-[5%]">
        Documents.
      </div>

      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] text-zinc-200 leading-none tracking-tighter">
        Docs.
      </h1>
    </>
  );
}

export default Background;
