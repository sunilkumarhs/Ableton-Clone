import React, { useState } from "react";
import { part1, part2, part3 } from "../../utils/LiveConstants";
import VideoPlayer from "./VideoPlayer";
import MusicPlayer from "./MusicPlayer";

const LiveSection = () => {
  const [toggle, setToggle] = useState(false);
  const [videoKey, setVideoKey] = useState();
  const color = { fill: "rgba(255,255,255,1)" };

  return (
    <>
      <div className="overflow-hidden font-[futura-pt]">
        <div className="absolute overflow-x-hidden z-10 w-full">
          <div className="bg-white w-full">
            <hr className="border-[1.5px]" />
            <div className="xl:px-6 xl:py-6 px-3 py-5 overflow-x-scroll no-scrollbar">
              <ul className="flex flex-row">
                {part1.map((val, index) => (
                  <li className="xl:px-4 px-2 " key={index}>
                    <p
                      className={`lg:text-sm text-xs font-semibold text-nowrap ${
                        index === part1.length - 1 ? "text-blue-700" : ""
                      } `}
                    >
                      {val.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-orange-500 px-6 w-full md:mt-[5%] py-3 xl:py-5 font-semibold md:w-56 xl:w-64 xl:text-lg  text-center md:float-right">
            <p>Save 20% on Line 11 and get Live 12 for free {">"}</p>
          </div>
          <div className="md:text-6xl text-3xl font-semibold xl:px-24 lg:px-20 md:px-16 px-10 text-white mt-[10%]">
            <div className="flex">
              <h1 className="pr-5">Find</h1>
              <div className="flex flex-col overflow-y-scroll h-20 no-scrollbar">
                <div className="flex">
                  <div>
                    <h1> your</h1>
                  </div>
                  <div className=" flex flex-col px-4 text-center overflow-y-scroll h-20 no-scrollbar">
                    <span className="text-black bg-white rounded-full py-2 px-4 m-1">
                      thing
                    </span>{" "}
                    <span className="text-black bg-white rounded-full py-2 px-4 m-1">
                      way
                    </span>
                    <span className="text-black bg-white rounded-full py-2 px-4 m-1">
                      rhythm
                    </span>
                    <span className="text-black bg-white rounded-full py-2 px-4 m-1">
                      spark
                    </span>
                  </div>
                </div>
                <div className="pt-6">
                  <span className="text-black bg-white rounded-full py-2 px-4 m-1">
                    yourself
                  </span>
                </div>
              </div>
            </div>
            <h1 className="py-3 font-">again and again</h1>
            <h1 className="py-3">in Ableton Live</h1>
          </div>
        </div>
        <div className="h-screen w-full">
          <div className="absolute z-10 left-[40%] lg:left-[45%] bottom-0">
            <a href="#live1">
              <button className="cursor-pointer">
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
          <video
            src="https://cdn-resources.ableton.com/resources/videos/live/l12_tour_header_desktop.mp4"
            autoPlay
            loop
            muted
            className="h-screen object-cover w-full"
          />
        </div>
        <div
          className="bg-white relative lg:z-10 lg:-mt-12 xl:px-24 lg:px-20 md:px-16 px-10 lg:pt-20 md:pt-14 pt-10 lg:pb-10 md:pb-5 pb-0"
          id="live1"
        >
          <div className="">
            <h2 className="lg:text-3xl text-xl font-semibold">
              Whatever music you make, and whoever you are as a music maker,
              there
              {"'"}s always more to explore in Live. See how you can go further
              with Live 12.
            </h2>
            <div className="py-10">
              <div className="lg:-mx-0 -mx-24">
                <button
                  className="lg:p-6 p-4 bg-blue-700 absolute rounded-full top-[55%] left-[45%]"
                  onClick={() => {
                    setToggle(true);
                    setVideoKey("QFCV6EkqRQs");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path>
                  </svg>
                </button>
                <img
                  src="https://ableton-production.imgix.net/components/text-beside-media/001882750010-web-sRGB.jpg?"
                  alt="liveimage"
                />
              </div>
              <p className="lg:text-sm text-xs py-1 ">
                A look at some of the highlights of Live 12
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="md:text-3xl text-xl xl:px-24 lg:px-20 md:px-16 px-10 font-semibold">
            Find out what's possible in Live 12
          </h1>
          <div className="flex md:flex-wrap md:flex-row flex-col xl:px-24 lg:px-20 md:px-16 px-10 lg:py-10 md:py-6 py-4">
            <p className="xl:text-xl text-ms pr-5 font-semibold">Jump to:</p>
            {part2.map((val, index) => (
              <p
                className="xl:text-xl text-sm pr-5 text-blue-700 font-semibold"
                key={index}
              >
                {val}
              </p>
            ))}
          </div>
          <div className="bg-lime-50 lg:pb-20 md:pb-10">
            <h1 className="lg:text-6xl md:text-4xl text-2xl font-semibold xl:px-24 lg:px-20 md:px-16 px-10 lg:py-20 md:py-10 py-6">
              Play freely with ideas
            </h1>
            <div className="xl:px-24 lg:px-20 px-0 relative">
              <button
                className="lg:p-6 p-4 bg-blue-700 absolute rounded-full top-[45%] left-[45%]"
                onClick={() => {
                  setToggle(true);
                  setVideoKey("z7kjcMvMr3M");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path>
                </svg>
              </button>
              <img
                src="https://ableton-production.imgix.net/components/text-beside-media/web-play-freely-header-sRGB.jpg?"
                alt="liveimage"
              />
              <p className="lg:text-sm text-xs py-1 lg:px-0 md:px-16 px-10">
                A demonstration of the new MIDI Tools
              </p>
            </div>
            <div className="py-10 xl:px-24 lg:px-20 md:px-16 px-10 ">
              <div className="flex lg:flex-row flex-col">
                {part3.map((val, index) => (
                  <div
                    key={index}
                    className={`${
                      index === 0 ? "lg:pr-20" : "lg:py-0 sm:py-10 py-5"
                    }`}
                  >
                    <h1 className="text-2xl font-semibold">{val.title}</h1>
                    <p className="text-base py-5">{val.content}</p>
                  </div>
                ))}
              </div>
              <div className="sm:py-10 py-5 flex md:flex-row flex-col">
                <div className="lg:px-20 md:w-3/4 w-full">
                  <img
                    src="https://ableton-production.imgix.net/components/text-beside-media/web-mfl-midi-tools.png?"
                    alt="liveImage"
                  />
                </div>
                <div className="md:w-1/2 w-full md-py-0 pt-5 md:pl-10 md:flex md:flex-col md:justify-center">
                  <h1 className="text-2xl font-semibold">
                    Do more with Max for Live
                  </h1>
                  <p className="text-base md:pt-5 pt-3 lg:pr-8">
                    Try out additional Max for Live Transformations and
                    Generators that give you deeper ways of working with MIDI,
                    or go even further by building new ones.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col-reverse">
              <div className="xl:px-24 lg:px-20 md:px-16 px-10  lg:py-0 md:py-20 sm:py-10 py-5 lg:w-2/5 w-full flex flex-col justify-center">
                <h1 className="text-2xl font-semibold">
                  Embrace and explore tuning
                </h1>
                <p className="text-base md:py-5 py-3">
                  Follow your preferred tuning systems or try different ones
                  more easily. Work outside the 12-tone equal temperament
                  system, and access tunings with Live{"’"}s devices as well as
                  any MPE-capable plugin.
                </p>
              </div>
              <div className="lg:w-3/5 w-full">
                <div className="relative">
                  <button
                    className="lg:p-6 p-4 bg-blue-700 absolute rounded-full top-[45%] left-[45%]"
                    onClick={() => {
                      setToggle(true);
                      setVideoKey("5-ZldZ5WhSM");
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path>
                    </svg>
                  </button>
                  <img
                    src="https://ableton-production.imgix.net/components/text-beside-media/web-tunings-img-sRGB.jpg?"
                    alt="liveimage"
                  />
                </div>
                <p className="lg:text-sm text-xs py-1 px-10 md:px-16">
                  See how to work with tunning systems in Live
                </p>
              </div>
            </div>
            <div className="flex lg:flex-row-reverse flex-col-reverse lg:py-20 md:py-16 py-10">
              <div className="xl:px-24 lg:px-20 md:px-16 px-10  lg:py-0 md:py-20 sm:py-10 py-5 lg:w-2/5 w-full flex flex-col justify-center">
                <h1 className="text-2xl font-semibold">Stay in key</h1>
                <p className="text-base md:py-5 py-3">
                  Choose a scale in Live{"’"}s Control Bar to see its notes in
                  any MIDI clip you create. Then transform or generate ideas
                  within the confines of the selected scale, or sync the scale
                  of MIDI devices and instruments to the clip being played.
                </p>
              </div>
              <div className="lg:w-3/5 w-full">
                <div className="relative">
                  <button
                    className="lg:p-6 p-4 bg-blue-700 absolute rounded-full top-[45%] left-[45%]"
                    onClick={() => {
                      setToggle(true);
                      setVideoKey("u6IpJYpN48A");
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path>
                    </svg>
                  </button>
                  <img
                    src="https://ableton-production.imgix.net/components/text-beside-media/web-tunings-img-sRGB.jpg?"
                    alt="liveimage"
                  />
                </div>
                <p className="lg:text-sm text-xs py-1 px-10 md:px-16">
                  See how to work with tunning systems in Live
                </p>
              </div>
            </div>
            <div className="xl:px-24 lg:px-20 md:px-16 px-10 ">
              <div className="sm:py-10 py-5 flex md:flex-row flex-col">
                <div className="lg:px-20 md:w-3/4 w-full">
                  <img
                    src="https://ableton-production.imgix.net/components/text-beside-media/web-midi-editing.png?"
                    alt="liveImage"
                  />
                </div>
                <div className="md:w-1/2 w-full md:py-0 py-5 md:pl-10 lg:pl-0">
                  <h1 className="text-2xl font-semibold">
                    Edit MIDI more easily
                  </h1>
                  <p className="text-base md:pt-5 pt-3 lg:pr-4">
                    Use keyboard and mouse operations to edit MIDI in new ways.
                    Split a note in two, or chop it into several parts. Select a
                    set of notes and join them together, or make them fill a
                    selected time range. And access more tools from the Note
                    Utilities panel on the left.
                  </p>
                </div>
              </div>
              <div className="sm:py-10 py-5 flex md:flex-row flex-col">
                <div className="lg:px-20 md:w-3/4 w-full">
                  <img
                    src="https://ableton-production.imgix.net/components/text-beside-media/web-mfl-modulation.png?"
                    alt="liveImage"
                  />
                </div>
                <div className="md:w-1/2 w-full md:py-0 py-5 md:pl-10 lg:pl-0">
                  <h1 className="text-2xl font-semibold">
                    Modulate more flexible
                  </h1>
                  <p className="text-base md:py-5 py-3 lg:pr-4">
                    Stay in control of a parameter, even after it{"’"}s been
                    mapped to a modulation source; Max for Live devices like
                    LFO, Shaper and Envelope Follower now let you freely adjust
                    a destination that’s being modulated.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="lg:text-6xl text-4xl px-20 py-20">
              Surprise yourself with the sounds you create
            </h1>
            <div className="w-full lg:px-20">
              <img
                src="https://ableton-production.imgix.net/components/text-beside-media/001882720001-web-1610.jpg?"
                alt="liveImage"
              />
            </div>
          </div>
          <div className="px-20 py-24">
            <h1 className="text-4xl">Lose yourself in Meld</h1>
            <p className="w-1/2 pt-4 pb-10">
              Live’s new MPE-capable synthesizer is designed for sound variety,
              playfulness and character. Equipped with twin oscillators and an
              extensive modulation matrix, Meld excels at textural soundscapes,
              harmonic and atonal sounds, and rhythmic drones.
            </p>
            <div className="overflow-x-scroll no-scrollbar">
              <div className="w-[90vw] object-cover">
                <img
                  src="https://ableton-production.imgix.net/devices/screenshots/meld-sub-city.png?fm=png"
                  className=" "
                  alt="liveImage"
                />
              </div>
            </div>
            <p className="pt-2 pb-8 text-sm">
              Program Meld’s dual oscillators with dedicated LFOs and an
              extensive modulation matrix
            </p>
            <div className="overflow-x-scroll no-scrollbar">
              <div className="w-[90vw] object-cover">
                <img
                  src="https://ableton-production.imgix.net/devices/screenshots/meld-carbon-strings.png?fm=png"
                  className=" "
                  alt="liveImage"
                />
              </div>
              <p className="pt-2 pb-8 text-sm">
                Each of Meld’s oscillator presets comes with two Engines
                parameters, carefully chosen for maximum sound design
                versatility
              </p>
            </div>
            <MusicPlayer />
          </div>
        </div>
      </div>
      {toggle && (
        <VideoPlayer display={() => setToggle(false)} videoKey={videoKey} />
      )}
    </>
  );
};

export default LiveSection;
