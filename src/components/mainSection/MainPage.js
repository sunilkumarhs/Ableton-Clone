import React from "react";
import {
  part1,
  part2,
  part3,
  part4,
  part5,
  part6,
} from "../../utils/MainConstants";
import Footer from "../Footer";

const MainPage = () => {
  const color = { fill: "rgba(37,99,235,1)" };
  return (
    <div className="overflow-hidden no-scrollbar">
      <div className=" h-screen w-screen">
        <div className="absolute bg-orange-500 px-3 w-full md:mt-[10%] py-3 font-semibold md:w-52 text-center md:right-0">
          <p className="">Save 20% on Line 11 and get Live 12 for free {">"}</p>
        </div>
        <div className="absolute px-12 md:pl-28 md:pr-56 md:pt-[10%] pt-[20%]">
          <p className="lg:text-[5rem] text-[3.5rem] font-semibold text-white ">
            Always more to explore
          </p>
          <u className="lg:text-2xl text-base text-white font-semibold">
            See what's coming in Live 12 {">"}
          </u>
        </div>
        <div className="absolute md:block hidden left-0 bottom-0">
          <a href="#main1">
            <button className="bg-white cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={color}
                width="60"
                height="60"
                viewBox="0 0 24 24"
              >
                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
              </svg>
            </button>
          </a>
        </div>
        <img
          className="h-full w-full object-cover"
          src="https://ableton-production.imgix.net/tours/live/live-12/homepage-takeover-background.jpg?fit=crop&auto=format&fm=jpg"
          alt="homepageimage"
        />
      </div>
      <div
        className="bg-white relative lg:z-10 lg:-mt-12 xl:px-24 lg:px-20 md:px-16 px-10 lg:pt-20 md:pt-14 pt-10 lg:pb-10 md:pb-7 pb-5"
        id="main1"
      >
        <div>
          <div className="flex justify-between">
            <p className="sm:text-2xl xl:text-4xl text-xl font-semibold">
              The latest from Ableton
            </p>
            <div className="lg:hidden hidden md:flex justify-end text-lg xl:text-xl font-bold pt-2 text-blue-700">
              <p>See all Posts {">"}</p>
            </div>
            <div className="hidden  lg:flex justify-end text-lg xl:text-xl font-semibold pt-2 text-blue-700">
              {part1.map((val, index) => (
                <p className="pl-4 cursor-pointer" key={index}>
                  {val}
                </p>
              ))}
            </div>
          </div>
          <div className=" flex flex-wrap xl:py-6 py-3">
            {part2.map((val, index) => (
              <div
                key={index}
                className={`${
                  index === 1 ? "lg:mx-10 md:mx-7 sm:mx-6" : ""
                } xl:w-[30.8%] lg:w-[30%] md:w-[45%] sm:w-[45%] w-full my-3`}
              >
                <div className="py-3">
                  <img
                    className="h-auto w-full object-cover"
                    src={val.link}
                    alt="latestImages"
                  />
                </div>
                <button
                  className={`px-4 py-1 font-semibold ${val.color} text-sm`}
                >
                  {val.name}
                </button>
                <p className="font-semibold xl:text-lg text-sm py-1">
                  {val.content}
                </p>
              </div>
            ))}
          </div>
          <div className="md:hidden text-center block justify-end text-sm font-bold pt-2 text-blue-700">
            <p>See all Posts {">"}</p>
          </div>
        </div>
        <div className="py-5">
          <div className="flex justify-between ">
            <p className="sm:text-2xl xl:text-4xl text-xl font-semibold">
              Expand Live with Packs
            </p>
            <div className="hidden md:flex justify-end text-lg xl:text-xl font-bold pt-2 text-blue-700">
              <p>Discover more {">"}</p>
            </div>
          </div>
          <div className=" flex flex-wrap xl:py-6 py-3">
            {part3.map((val, index) => (
              <div
                key={index}
                className={`${
                  index === 1 ? "lg:mx-10 md:mx-7 sm:mx-6" : ""
                } xl:w-[30.8%] lg:w-[30%] md:w-[45%] sm:w-[45%] w-full my-3`}
              >
                <div className="py-3">
                  <img
                    className="h-full w-full object-cover"
                    src={val.link}
                    alt="latestImages"
                  />
                </div>
                <p className="font-semibold xl:text-lg text-sm py-1">
                  {val.content}
                </p>
              </div>
            ))}
          </div>
          <div className="md:hidden text-center block justify-end text-sm font-bold pt-2 text-blue-700">
            <p>Discover more {">"}</p>
          </div>
        </div>
        <div className="py-5">
          <div className="flex justify-between ">
            <p className="sm:text-2xl xl:text-4xl text-xl font-semibold">
              Develop your music-making
            </p>
          </div>
          <div className=" flex flex-wrap xl:py-6 py-3">
            {part4.map((val, index) => (
              <div
                key={index}
                className={`${
                  index === 1 ? "lg:mx-10 md:mx-7 sm:mx-6" : ""
                } xl:w-[30.8%] lg:w-[30%] md:w-[45%] sm:w-[45%] w-full my-3`}
              >
                <div className="py-3">
                  <img
                    className="h-full w-full object-cover"
                    src={val.link}
                    alt="latestImages"
                  />
                </div>
                <p className="font-semibold xl:text-lg text-sm py-1">
                  {val.content}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="py-5">
          <div className="flex justify-between ">
            <p className="sm:text-2xl xl:text-4xl text-xl font-semibold">
              One Thing videos: monthly creative tips
            </p>
            <div className="hidden md:flex justify-end text-lg xl:text-xl font-bold pt-2 text-blue-700">
              <p>See all videos {">"}</p>
            </div>
          </div>
          <div className=" flex flex-wrap xl:py-6 py-3">
            {part5.map((val, index) => (
              <div
                key={index}
                className={`${
                  index === 1 ? "lg:mx-10 md:mx-7 sm:mx-6" : ""
                } xl:w-[30.8%] lg:w-[30%] md:w-[45%] sm:w-[45%] w-full my-3`}
              >
                <div className="py-3">
                  <img
                    className="h-full w-full object-cover"
                    src={val.link}
                    alt="latestImages"
                  />
                </div>
                <p className="font-semibold xl:text-lg text-sm py-1">
                  {val.content}
                </p>
              </div>
            ))}
          </div>
          <div className="md:hidden text-center block justify-end text-sm font-bold pt-2 text-blue-700">
            <p>See all videos {">"}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-wrap text-sm md:text-lg xl:text-xl font-semibold bg-slate-200 md:py-10 py-6 px-4">
        <p className="py-3 md-py-0">More: </p>
        {part6.map((val, index) => (
          <p
            className="pl-4 cursor-pointer text-blue-700 py-3 md-py-0"
            key={index}
          >
            {val}
          </p>
        ))}
      </div>
      <div className="xl:px-24 lg:px-20 md:px-16 px-8 lg:pt-10 md:pt-7 pt-5 lg:pb-10 md:pb-7 pb-5">
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
