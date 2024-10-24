// eslint-disable-next-line no-unused-vars
import React from "react";

function Right() {
  return (
    <>
      <div className="relative h-400 w-400 md:h-500 md:w-550">
        <div className="absolute -left-4 -top-4 h-14 w-64 md:left-0 md:top-0 md:h-28 md:w-96">
          <svg
            width="94"
            height="28"
            viewBox="0 0 98 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.51758 1.62573L24.7957 25.8505L39.2659 8.23247L56.5672 25.8505L75.4414 8.23247L96.5176 29.6257"
              stroke="#E7E7E7"
              strokeWidth="4"
            />
          </svg>
        </div>
        <div className="absolute -top-10 right-0 md:top-0">
          <svg
            width="48"
            height="60"
            viewBox="0 0 52 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="20.5176"
              cy="20.6257"
              r="18.5"
              stroke="white"
              strokeWidth="3"
            />
            <circle cx="31.5176" cy="40.6257" r="19.5" stroke="white" />
          </svg>
        </div>
        <div className="absolute -bottom-6 left-0 -translate-x-10">
          <svg
            width="106"
            height="121"
            viewBox="0 0 106 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.0311 78.7711L34.389 20.7633L83.9463 50.9432L33.0311 78.7711Z"
              stroke="#E7E7E7"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M37.5865 101.479L39.0256 40.0083L91.5414 71.99L37.5865 101.479Z"
              stroke="#E7E7E7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0">
          <svg
            width="32"
            height="32"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5176 0.95874C18.6681 0.95874 19.6009 1.89148 19.6009 3.04207V15.5421H32.1009C33.2515 15.5421 34.1842 16.4748 34.1842 17.6254C34.1842 18.776 33.2515 19.7087 32.1009 19.7087H19.6009V32.2087C19.6009 33.3593 18.6681 34.2921 17.5176 34.2921C16.367 34.2921 15.4342 33.3593 15.4342 32.2087V19.7087H2.93422C1.78363 19.7087 0.850891 18.776 0.850891 17.6254C0.850891 16.4748 1.78363 15.5421 2.93422 15.5421H15.4342V3.04207C15.4342 1.89148 16.367 0.95874 17.5176 0.95874Z"
              fill="#E7E7E7"
            />
          </svg>
        </div>
        <div className="absolute left-3 h-375 w-375 rotate-50 transform rounded-3xl border-2 border-white md:left-40 md:top-32"></div>
        <div>
          <img
            src="src/assets/photo.png"
            alt=""
            className="absolute md:bottom-10 md:left-20"
          />
        </div>
      </div>
    </>
  );
}

export default Right;
