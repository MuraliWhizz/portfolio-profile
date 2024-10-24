// eslint-disable-next-line no-unused-vars
import React from "react";
import Elements from "./Elements";

function Section2() {
  return (
    <>
      <div className="mb-36 mt-36 flex h-auto w-full items-center justify-center bg-customBg md:mt-36">
        <div className="w-1200 flex flex-col justify-between gap-16 md:flex-row md:gap-0">
          <Elements
            img="src/assets/1st.png"
            title="Web Development"
            text="Create a platform with the best and coolest quality from us."
          />
          <Elements
            img="src/assets/2nd.png"
            title="App Development"
            text="Create a platform with the best and coolest quality from us."
          />
          <Elements
            img="src/assets/3rd.png"
            title="UI/UX Designer"
            text="We provide UI/UX Design services, and of course with the best quality"
          />
          <Elements
            img="src/assets/4th.png"
            title="Cloud Services"
            text="We provide Graphic Design services, with the best designers"
          />
        </div>
      </div>
    </>
  );
}

export default Section2;
