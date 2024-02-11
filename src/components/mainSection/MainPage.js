import React, { useEffect, useState } from "react";
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
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    scrollPosition > 230 ? setScroll(true) : setScroll(false);
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="overflow-hidden no-scrollbar">
      <div className="flex md:flex-row flex-col justify-between">
        <div className="md:w-7/12 w-full relative">
          <div className="absolute md:px-14 px-10 mt-[6%]">
            <p className="xl:py-3 md:py-2 py-1 xl:text-5xl text-xl font-semibold text-black">
              Save 20% on Line 11 now,
            </p>
            <p className="xl:text-5xl text-xl font-semibold text-black">
              upgrade to Live 12 for free
            </p>
            <div className="md:py-3 py-2">
              <u className="text-xl text-black font-semibold">shop now {">"}</u>
            </div>
          </div>
          <img
            src="https://ableton-production.imgix.net/uploads/homepage-teasers/Sell_out_Campaign_P2_Main_tile_T4uMHqn.jpg?fit=crop&auto=format&fm=jpg"
            alt="mainImage"
          />
        </div>
        <div className="md:w-[33%] md:pt-0 pt-[9%] flex md:flex-col flex-row w-full">
          <div className="md:w-full md:h-[67%] w-[9%]"></div>
          <div className="md:w-full w-[91%]">
            <div className="absolute px-[8%] py-[8%]">
              <p className="md:text-lg text-xl font-semibold text-teal-300 ">
                Focus and feel
              </p>
              <u className="text-sm text-teal-300 font-semibold">
                Meet the new push{">"}
              </u>
            </div>
            <img
              className="h-full w-full"
              src="https://ableton-production.imgix.net/uploads/homepage-teasers/Push-opt1_BWYb0Z6.jpg?"
              alt="homepageimage"
            />
          </div>
        </div>
      </div>
      <div className="md:w-[33%] w-11/12 relative md:left-[42%] -mt-11">
        <div className="absolute px-[8%] py-[8%]">
          <p className="md:text-lg text-xl  font-semibold text-white ">
            Always more to explore
          </p>
          <u className="text-sm text-white font-semibold">
            See what's coming in Live 12 {">"}
          </u>
        </div>
        <img
          className="h-full w-full"
          src="https://ableton-production.imgix.net/uploads/homepage-teasers/HP-Tile.jpg?fit=crop&auto=format&fm=jpg"
          alt="homepageimage"
        />
      </div>
      <div
        className={`fixed hidden left-[30%] bottom-0 ${
          scroll ? "md:hidden" : "md:block"
        }`}
      >
        <a href="#main1">
          <button className="bg-blue-700 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white"
              width="60"
              height="60"
              viewBox="0 0 24 24"
            >
              <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
            </svg>
          </button>
        </a>
      </div>
      <div
        className="bg-white xl:px-24 lg:px-20 md:px-16 px-10 pt-20 lg:pb-10 md:pb-7 pb-5"
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
