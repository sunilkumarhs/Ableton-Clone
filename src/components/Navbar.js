import React, { useState } from "react";

const Navbar = () => {
  const [more, setMore] = useState(false);
  return (
    <nav>
      <div className="flex justify-between">
        <div className="py-5 px-10 flex">
          <div className="cursor-pointer">
            <svg
              aria-hidden="true"
              focusable="false"
              className="main-nav__logo__image"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="30"
              viewBox="0 0 45 21"
            >
              <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
            </svg>
          </div>
          <div className="px-6">
            <ul className="flex ">
              <li className="px-4">
                <p className="text-lg font-semibold cursor-pointer">Live</p>
              </li>
              <li className="px-4">
                <p className="text-lg font-semibold cursor-pointer">Push</p>
              </li>
              <li className="px-4">
                <p className="text-lg font-semibold cursor-pointer">Note</p>
              </li>
              <li className="px-4">
                <p className="text-lg font-semibold cursor-pointer">Shop</p>
              </li>
              <li className="px-4">
                <p className="text-lg font-semibold cursor-pointer">Packs</p>
              </li>
              <li className="px-4">
                <p className="text-lg font-semibold cursor-pointer">Help</p>
              </li>
              <li className="px-4">
                <p
                  className="text-lg font-semibold cursor-pointer"
                  onClick={() => setMore(!more)}
                >
                  More +
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex py-5 px-10">
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
      <div className={`px-7 py-4 ${more ? "block" : "hidden"}`}>
        <div className="py-4">
          <p className="text-2xl px-3 font-semibold">More on Ableton.com:</p>
          <ul className="flex py-4">
            <li className="px-3">
              <p className="text-lg">Blog</p>
            </li>
            <li className="px-3">
              <p className="text-lg">Ableton for the Classroom</p>
            </li>
            <li className="px-3">
              <p className="text-lg">Ableton for Colleges and Universities</p>
            </li>
            <li className="px-3">
              <p className="text-lg ">Certified Training</p>
            </li>
            <li className="px-3">
              <p className="text-lg ">About Ableton</p>
            </li>
            <li className="px-3">
              <p className="text-lg">Jobs</p>
            </li>
            <li className="px-3">
              <p className="text-lg">Apprenticeships</p>
            </li>
          </ul>
        </div>
        <div className="py-4">
          <p className="text-2xl px-3 font-semibold">More from Ableton:</p>
          <ul className="flex py-4">
            <li className="pl-3 pr-5">
              <p className="text-lg font-semibold">Loop</p>
              <p className="text-lg">
                Watch Talks, Performances and Feature from Ableton's Summit for
                Music Makers
              </p>
            </li>
            <li className="px-5">
              <p className="text-lg font-semibold">Learning Music</p>
              <p className="text-lg">
                Learn the fundamentals of music making right in your browser.
              </p>
            </li>
            <li className="px-5">
              <p className="text-lg font-semibold">Learning Synths</p>
              <p className="text-lg">
                Get started with synthesis using a web-based synth and
                accompanying lessons.
              </p>
            </li>
            <li className="px-5">
              <p className="text-lg font-semibold">Making Music</p>
              <p className="text-lg">
                Some tips from 74 creative Strategies for Electronic Producers.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden">
        <hr className="border-[1.5px]" />
        <div className="px-6 py-6">
          <ul className="flex">
            <li className="px-4">
              <p className="text-sm font-semibold">Live 12</p>
            </li>
            <li className="px-4">
              <p className="text-sm font-semibold">All new features</p>
            </li>
            <li className="px-4">
              <p className="text-sm font-semibold">What is Live?</p>
            </li>
            <li className="px-4">
              <p className="text-sm font-semibold">Max for Live</p>
            </li>
            <li className="px-4">
              <p className="text-sm font-semibold">Learn Live</p>
            </li>
            <li className="px-4">
              <p className="text-sm font-semibold">Integrated hardware</p>
            </li>
            <li className="px-4">
              <p className="text-sm font-semibold">Compare editions</p>
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
