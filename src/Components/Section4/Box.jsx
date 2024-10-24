// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function Box({ title, titleSide, img, imgSide, rotate, choice }) {
  return (
    <>
      <div className="relative z-0 flex items-center justify-center bg-customBg md:m-10 md:h-500 md:w-full">
        <div className="relative flex h-600 w-1300 flex-col items-center justify-center md:flex-row">
          <div
            className={`flex h-900 flex-col justify-around p-4 md:p-0 ${choice ? "items-start" : "items-end"} md:absolute md:h-400 md:w-700 ${titleSide}-0 ${choice ? "translate-x-16" : "-translate-x-10"} z-30`}
          >
            <div
              className={`md:relative md:top-8 ${titleSide}-0 ${choice ? null : "-translate-x-6"}`}
            >
              <div
                className={`leading-1 flex flex-col text-16 font-semi-bold text-customTitle ${choice ? "items-start" : "items-end"} `}
              >
                Feature Project
              </div>
              <div className="text-30 font-semi-bold leading-10 text-white">
                {title}
              </div>
            </div>
            <div
              className={`bottom-0 z-30 flex items-center justify-center md:relative md:w-auto`}
            >
              <div
                className={`absolute left-1 z-30 opacity-70 md:top-0 rotate-${rotate}`}
              >
                <img src="src/assets/dotdotdot.png" alt="" />
              </div>
              <div
                className={`text-12 z-30 flex items-start justify-start text-customText md:relative md:p-5 md:text-left md:text-18 md:font-bold`}
              >
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </div>
            </div>
            <div
              className={`bottom-0 flex md:relative ${choice ? null : "-translate-x-6"}`}
            >
              <img src="src/assets/clickIcon.svg" alt="" />
              <img src="src/assets/clickIcon.svg" alt="" />
            </div>
          </div>
          <div
            className={`flex h-300 w-550 items-center justify-center bg-projectBg ${choice ? "-translate-x-20" : "translate-x-20"} md:absolute ${imgSide}-0 z-20`}
          >
            <img src={img} alt="" className="z-20 w-500" />
          </div>
          <div
            className={`z-1 absolute bg-bgCircle md:h-300 md:w-300 ${imgSide}-0 blur-3xl`}
          ></div>
          {choice ? (
            <div
              className={`z-1 absolute bg-bgCircle md:h-300 md:w-300 ${imgSide}-0 -translate-x-80 blur-3xl`}
            ></div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Box;
