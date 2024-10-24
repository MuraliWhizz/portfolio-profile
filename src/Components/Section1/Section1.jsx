// eslint-disable-next-line no-unused-vars
import React from "react";
import Left from "./Left";
import Right from "./Right";

function Section1() {
  return (
    <>
      <div className="flex h-900 flex-col items-center justify-center bg-customBg md:flex-row">
        <div className="">
          <Left />
        </div>
        <div className="mt-40 md:m-0">
          <Right />
        </div>
      </div>
    </>
  );
}

export default Section1;
