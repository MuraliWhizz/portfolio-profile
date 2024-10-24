// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function Elements({ img, title, text }) {
  return (
    <>
      <div className="flex h-full w-375 flex-col items-center justify-center text-white">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="mt-6 text-3xl font-semi-bold md:mt-0 md:text-xl">
          {title}
        </div>
        <div className="mt-5 flex w-300 flex-col items-center justify-center text-center text-xl font-semi-bold opacity-70 md:text-16">
          {text}
        </div>
      </div>
    </>
  );
}

export default Elements;
