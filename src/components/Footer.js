import React from "react";
import { part1, part2, part3 } from "../utils/FooterConstants";

const Footer = () => {
  return (
    <div>
      <div className="xl:py-10 py-6">
        <h1 className="lg:text-6xl md:text-4xl text-2xl font-semibold">
          Ableton
        </h1>
      </div>
      <div className="flex lg:flex-wrap flex-col lg:flex-row text-sm xl:text-lg">
        <div className="lg:pr-16 xl:pr-28 lg:py-5 py-3">
          <p className="py-1">Register Live or Push {">"}</p>
          <p>About Ableton {">"}</p>
          <p className="py-1">Jobs {">"}</p>
          <div className="flex py-2">
            {part2.map((val, index) => (
              <div className="cursor-pointer pr-3" key={index}>
                <div className={`${val.color} py-1 px-1 `}>{val.logo}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:pr-6 lg:py-5 py-3">
          <p className="py-1 font-semibold">Education</p>
          <p>Offers for students and teachers {">"}</p>
          <p className="py-1">Ableton for the Classroom {">"}</p>
          <p>Ableton for Colleges and Universities {">"}</p>
        </div>
        <div className="lg:py-5 py-3">
          <p className="py-1 font-semibold">Sign up to our newsletter</p>
          <p>Enter your email address to stay up to date with the</p>
          <p className="py-1">
            latest offers, tutorials, downloads, surveys and more.
          </p>
          <div className="py-3">
            <input
              placeholder="Email Address"
              type="email"
              className="bg-zinc-200 py-2 px-3 w-4/6"
            />
            <button className="bg-blue-700 text-white py-2 px-5 lg:px-7 xl:px-9">
              Sign Up
            </button>
          </div>
        </div>
        <div className="lg:pr-20 lg:py-5 py-3">
          <p className="py-1 font-semibold">Community</p>
          <p>Find Ableton User Groups {">"}</p>
          <p className="py-1">Find Certified Training {">"}</p>
          <p>Become a Certified Trainer {">"}</p>
        </div>
        <div className="lg:py-5 py-3">
          <p className="py-1 font-semibold">Language and Location</p>
          <div className="py-2">
            <select className="py-1 px-3 bg-zinc-200 cursor-pointer">
              {part3.map((val, index) => (
                <option key={index} value={val.value}>
                  {val.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-between lg:flex-row flex-col lg:py-10 py-4">
        <div className="flex lg:flex-row flex-col py-4">
          {part1.map((val, index) => (
            <p
              className="xl:text-sm lg:py-0 py-1 text-xs font-semibold pr-2"
              key={index}
            >
              {val}
            </p>
          ))}
        </div>
        <div className="flex">
          <p className="xl:text-sm text-xs font-semibold lg:px-5 pr-3 py-4">
            Made in India
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 21"
          >
            <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
