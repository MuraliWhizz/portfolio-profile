// eslint-disable-next-line no-unused-vars
import React from "react";

function Left() {
  return (
    <>
      <div className="relative flex h-auto w-full flex-col justify-between p-4 md:h-400 md:w-500 md:p-0">
        <div className="absolute h-375 w-1300 rotate-30 transform rounded-full bg-customHeading opacity-70 blur-custom md:bottom-24 md:-translate-x-60"></div>
        <div className="relative text-5xl font-extra-bold leading-tight tracking-tight text-white md:text-7xl">
          Build Your Awesome Platform
        </div>
        <div className="font-nunito text-base leading-6 text-white opacity-70 md:text-xl md:leading-8">
          Enver studio is a digital studio that offers several services such as
          UI/UX Design to developers, we will provide the best service for those
          of you who use our services.
        </div>
      </div>

      <div className="mt-4 h-8 w-full md:w-500">
        <div className="flex h-50 w-full items-center justify-center rounded-sm border-2 border-customHeading bg-customHeading text-white md:w-180">
          <div className="flex h-30 w-auto items-center justify-around gap-5 border-2 border-gray-800 p-1 font-nunito text-sm font-semi-bold md:text-base">
            <div>Our Services</div>
            <div>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.51758 1.12549C2.51758 0.573203 2.96529 0.125488 3.51758 0.125488L11.5176 0.125489C12.0699 0.125489 12.5176 0.573204 12.5176 1.12549V9.12549C12.5176 9.67777 12.0699 10.1255 11.5176 10.1255C10.9653 10.1255 10.5176 9.67777 10.5176 9.12549V3.5397L2.22468 11.8326C1.83416 12.2231 1.201 12.2231 0.810471 11.8326C0.419947 11.4421 0.419947 10.8089 0.810471 10.4184L9.10336 2.12549L3.51758 2.12549C2.96529 2.12549 2.51758 1.67777 2.51758 1.12549Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Left;
