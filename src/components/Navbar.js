import React, { useState } from "react";
import { part1, part2, part3 } from "../utils/NavConstants";

const Navbar = () => {
  const [more, setMore] = useState(false);
  const [menu, setMenu] = useState(false);
  const color = {
    fill: menu ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)",
  };
  return (
    <nav className={`${menu ? "bg-blue-700 text-white" : "bg-white"}`}>
      <div className="flex justify-between">
        <div className="xl:py-5 py-3 xl:px-10 px-6 flex">
          <div className="cursor-pointer">
            <svg
              style={color}
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="30"
              viewBox="0 0 45 21"
            >
              <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
            </svg>
          </div>
          <div className="lg:hidden flex px-4" onClick={() => setMenu(!menu)}>
            <div>
              <p className="text-lg font-semibold px-2">Menu</p>
            </div>
            <div className="py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={color}
                width="15"
                height="15"
                viewBox="0 0 24 24"
              >
                {menu ? (
                  <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
                ) : (
                  <path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"></path>
                )}
              </svg>
            </div>
          </div>
          <div className="xl:px-6 lg:px-2 lg:block hidden">
            <ul className="flex ">
              {part1.map((val, index) => (
                <li className="xl:px-4 lg:px-2" key={index}>
                  <p className="text-lg font-semibold cursor-pointer">{val}</p>
                </li>
              ))}
              <li className="xl:px-4 lg:px-2 ">
                <p
                  className="text-lg font-semibold cursor-pointer"
                  onClick={() => setMore(!more)}
                >
                  More{" "}
                  {more ? (
                    <span className="font-bold">-</span>
                  ) : (
                    <span className="font-bold">+</span>
                  )}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:flex xl:py-5 py-3 xl:px-10 px-6 hidden">
          <div className="px-3">
            <p className="text-lg font-semibold text-blue-700 cursor-pointer">
              Try Live for free
            </p>
          </div>
          <div className="px-6 pt-1">
            <p className="font-semibold cursor-pointer">Cart</p>
          </div>
          <div className="px-3 pt-1">
            <p className="font-semibold cursor-pointer">Log in or register</p>
          </div>
        </div>
      </div>
      <div
        className={`xl:px-7 lg:px-3 py-4 ${
          more ? "lg:block" : "hidden"
        } hidden`}
      >
        <div className="py-4">
          <p className="xl:text-2xl lg:text-xl px-3 font-semibold">
            More on Ableton.com:
          </p>
          <ul className="flex py-4">
            {part2.map((val, index) => (
              <li className="px-3" key={index}>
                <p className="xl:text-lg lg:text-base">{val}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="py-4">
          <p className="xl:text-2xl lg:text-xl px-3 font-semibold">
            More from Ableton:
          </p>
          <ul className="flex py-4 ">
            {part3.map((val, index) => (
              <li className="pl-3 pr-5" key={index}>
                <p className="xl:text-lg lg:text-base font-semibold">
                  {val.name}
                </p>
                <p className="xl:text-lg lg:text-base">{val.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`${
          menu ? "block" : "hidden"
        } lg:hidden absolute overflow-x-hidden px-6  bg-blue-700 w-screen`}
      >
        <ul className="flex flex-col ">
          {part1.map((val, index) => (
            <li className="py-2" key={index}>
              <p className="text-lg font-semibold cursor-pointer">{val}</p>
            </li>
          ))}
          <li className="">
            <p className="text-lg font-semibold cursor-pointer">
              Try Live for free
            </p>
          </li>
          <li className="py-2">
            <p className="text-sm font-semibold cursor-pointer">Cart</p>
          </li>
          <li className="">
            <p className="text-sm font-semibold cursor-pointer">
              Log in or register
            </p>
          </li>
        </ul>
        <div className="py-4">
          <p className="text-xl font-semibold">More on Ableton.com:</p>
          <ul className="flex flex-col">
            {part2.map((val, index) => (
              <li className="py-2" key={index}>
                <p className="text-sm">{val}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="pb-4">
          <p className="text-xl font-semibold">More from Ableton:</p>
          <div className=" bg-blue-700 overflow-x-scroll ">
            <ul className="flex py-2">
              {part3.map((val, index) => (
                <li className="px-2" key={index}>
                  <p className="text-sm font-semibold">{val.name}</p>
                  <p className="text-sm w-32">{val.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden">
        <hr className="border-[1.5px]" />
        <div className="px-6 py-6">
          <ul className="flex">
            <li className="xl:px-4 lg:px-2">
              <p className="text-sm font-semibold">Live 12</p>
            </li>
            <li className="xl:px-4 lg:px-2">
              <p className="text-sm font-semibold">All new features</p>
            </li>
            <li className="xl:px-4 lg:px-2">
              <p className="text-sm font-semibold">What is Live?</p>
            </li>
            <li className="xl:px-4 lg:px-2">
              <p className="text-sm font-semibold">Max for Live</p>
            </li>
            <li className="xl:px-4 lg:px-2">
              <p className="text-sm font-semibold">Learn Live</p>
            </li>
            <li className="xl:px-4 lg:px-2">
              <p className="text-sm font-semibold">Integrated hardware</p>
            </li>
            <li className="xl:px-4 lg:px-2">
              <p className="text-sm font-semibold">Compare editions</p>
            </li>
            <li className="xl:px-4 lg:px-2">
              <p className="text-sm font-semibold text-blue-700">Buy now</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden">
        <hr className="border-[1.5px]" />
        <div className="px-6 py-6">
          <ul className="flex">
            <li className="px-4">
              <p className="text-sm font-semibold">Overview</p>
            </li>
            <li className="px-4">
              <p className="text-sm font-semibold">Tech specs</p>
            </li>
            <li className="px-4">
              <p className="text-sm font-semibold">Learn Push</p>
            </li>
            <li className="px-4">
              <p className="text-sm font-semibold">Upgrade Kit</p>
            </li>
            <li className="px-4">
              <p className="text-sm font-semibold text-blue-700">Buy now</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden">
        <hr className="border-[1.5px]" />
        <div className="px-6 py-6">
          <ul className="flex">
            <li className="px-4">
              <p className="text-sm font-semibold">What is Link?</p>
            </li>
            <li className="px-4">
              <p className="text-sm font-semibold">Link-enabled products</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden">
        <hr className="border-[1.5px]" />
        <div className="px-6 py-6">
          <ul className="flex">
            <li className="px-4">
              <p className="text-sm font-semibold">Overview</p>
            </li>
            <li className="px-4">
              <p className="text-sm font-semibold">Live</p>
            </li>
            <li className="px-4">
              <p className="text-sm font-semibold">Push</p>
            </li>
            <li className="px-4">
              <p className="text-sm font-semibold">Educational offers</p>
            </li>
            <li className="px-4">
              <p className="text-sm font-semibold ">Max for Live</p>
            </li>
            <li className="px-4">
              <p className="text-sm font-semibold ">Making Music</p>
            </li>
            <li className="px-4">
              <p className="text-sm font-semibold ">Merchandise</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden">
        <hr className="border-[1.5px]" />
        <div className="px-6 py-6">
          <ul className="flex">
            <li className="px-4">
              <p className="text-sm font-semibold">Overview</p>
            </li>
            <li className="px-4">
              <p className="text-sm font-semibold">Learn Live</p>
            </li>
            <li className="px-4">
              <p className="text-sm font-semibold">Learn Push</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
