import React from "react";

const MainPage = () => {
  return (
    <div className="overflow-hidden">
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
        <img
          className="h-full w-full object-cover"
          src="https://ableton-production.imgix.net/tours/live/live-12/homepage-takeover-background.jpg?fit=crop&auto=format&fm=jpg"
          alt="homepageimage"
        />
      </div>
    </div>
  );
};

export default MainPage;
