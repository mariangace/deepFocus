import React from "react";

export default function Navbar() {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 z-1">
      <nav className="flex w-100 justify-end">
        <div className="flex-grow pa3 flex items-center">
          <a className="f6 link dib black dim mr3 mr4-ns" href="#0">
            About
          </a>
          <a className="f6 link dib black dim mr3 mr4-ns" href="#0">
            Sign In
          </a>
          <a
            className="f6 dib black bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20"
            href="#0"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </div>
  );
}
