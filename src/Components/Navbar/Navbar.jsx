// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex h-98 w-full items-center justify-center bg-customPurple font-nunito">
        <div className="h-113 flex w-1300 items-center justify-around md:justify-between">
          <div className="h-30 text-center text-xl font-extra-bold leading-8 tracking-customHeading text-customHeading">
            TASTEZY SERVICES
          </div>
          <div className="hidden w-550 justify-start md:flex">
            <div className="flex h-30 w-auto items-center justify-evenly gap-12 font-nunito text-xl font-bold leading-8 tracking-customNav text-white opacity-70">
              <div className="text-customHeading opacity-100">Home</div>
              <div>Services</div>
              <div>Our Project</div>
              <div>About Us</div>
            </div>
          </div>
          <div className="hidden h-50 w-241 items-center justify-center rounded-md border text-xl font-bold text-white md:flex">
            Contact us
          </div>
          {isOpen ? (
            <div
              className="flex md:hidden"
              onClick={() => {
                toggleMenu();
              }}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="5"
                  y1="5"
                  x2="25"
                  y2="25"
                  stroke="white"
                  strokeWidth="4"
                />
                <line
                  x1="25"
                  y1="5"
                  x2="5"
                  y2="25"
                  stroke="white"
                  strokeWidth="4"
                />
              </svg>
            </div>
          ) : (
            <div
              className="z-50 flex md:hidden"
              onClick={() => {
                toggleMenu();
                console.log(isOpen);
              }}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="30" height="3" y="5" fill="white"></rect>
                <rect width="30" height="3" y="13" fill="white"></rect>
                <rect width="30" height="3" y="21" fill="white"></rect>
              </svg>
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="flex w-full flex-col items-center justify-start rounded-lg bg-customPurple text-center text-xl shadow-lg md:hidden">
          <div className="py-2 text-customHeading opacity-100">Home</div>
          <div className="py-2">Services</div>
          <div className="py-2">Our Projects</div>
          <div className="py-2">About Us</div>
          <div className="mb-4 flex h-50 w-241 items-center justify-center rounded-md border text-xl font-bold text-white md:block">
            Contact us
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
