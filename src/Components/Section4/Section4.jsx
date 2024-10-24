// eslint-disable-next-line no-unused-vars
import React from "react";
import Box from "./Box";

function Section4() {
  return (
    <>
      <Box
        title="Example Project"
        titleSide="left"
        img="src/assets/project1.png"
        imgSide="right"
        rotate="0"
        choice="true"
      />
      <Box
        title="Example Project"
        titleSide="right"
        img="src/assets/project2.png"
        imgSide="left"
        rotate="180"
      />
    </>
  );
}

export default Section4;
