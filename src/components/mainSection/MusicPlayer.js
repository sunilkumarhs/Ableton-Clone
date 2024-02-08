import React, { useEffect, useRef, useState } from "react";
import { music1, music2, music3 } from "../../music";
// import PropTypes from "prop-types";
import WaveSurfer from "wavesurfer.js";

const MusicPlayer = () => {
  const containerRef = useRef();
  const waveSurferRef = useRef({
    isPlaying: () => false,
  });
  const [isPlaying, toggleIsPlaying] = useState(false);
  const [cloudColor, setCloudColor] = useState("slate-500");
  const [audio, setAudio] = useState(music1);

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current,
      responsive: true,
      barWidth: 2,
      barHeight: 10,
      cursorWidth: 0,
    });
    waveSurfer.load(audio);
    waveSurfer.on("ready", () => {
      waveSurferRef.current = waveSurfer;
    });

    return () => {
      waveSurfer.destroy();
    };
  }, [audio]);
  return (
    <div>
      <div className="border-[1px] border-gray-300 bg-gray-200 w-1/2 p-3">
        <div className="flex justify-between">
          <div className="flex">
            <button
              className="bg-slate-400 rounded-full w-12 h-12"
              onClick={() => {
                waveSurferRef.current.playPause();
                toggleIsPlaying(waveSurferRef.current.isPlaying());
              }}
              type="button"
            >
              <div className="pl-1 pt-[2px]">
                {isPlaying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 6v12l10-6z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 7h3v10H8zm5 0h3v10h-3z"></path>
                  </svg>
                )}
              </div>
            </button>
            <div className="px-2">
              <u className="text-slate-500">Ableton</u>
              <p className="text-gray-700">Meldy-Meldy</p>
            </div>
          </div>
          <div
            className="flex cursor-pointer"
            onMouseOver={() => setCloudColor("orange-600")}
            onMouseOut={() => setCloudColor("slate-500")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              className={`fill-${cloudColor} -mt-2`}
              viewBox="0 0 24 24"
            >
              <style type="text/css"></style>
              <path d="M2.971 12.188c-.041 0-.078.038-.083.082l-.194 1.797.194 1.756c.005.049.042.082.083.082s.075-.033.084-.082l.211-1.756-.225-1.797c0-.046-.037-.082-.074-.082m-.75.691c-.051 0-.076.03-.088.079l-.138 1.109.138 1.092c0 .046.037.078.075.078.039 0 .073-.038.087-.087l.176-1.1-.176-1.112c0-.051-.037-.076-.075-.076m1.526-1.025c-.052 0-.1.039-.1.087l-.176 2.139.188 2.051c0 .049.037.1.099.1.052 0 .089-.051.102-.1l.211-2.064-.211-2.126c-.013-.049-.052-.1-.102-.1m.79-.075c-.063 0-.114.051-.126.113l-.161 2.201.177 2.123c.012.063.061.114.122.114.064 0 .113-.051.125-.124l.201-2.113-.201-2.187a.11.11 0 0 0-.111-.112l-.026-.015zm.962.301a.128.128 0 0 0-.133-.125.134.134 0 0 0-.137.125l-.182 2.026.169 2.138a.13.13 0 0 0 .132.131c.062 0 .123-.055.123-.132l.189-2.139-.189-2.036.028.012zm.674-1.426a.154.154 0 0 0-.148.15l-.176 3.3.156 2.139c0 .077.066.137.15.137.078 0 .145-.074.15-.15l.174-2.137-.173-3.313c-.007-.088-.074-.152-.15-.152m.8-.762a.178.178 0 0 0-.17.163l-.15 4.063.138 2.125c0 .1.075.174.163.174.086 0 .161-.074.174-.174l.162-2.125-.161-4.052c-.013-.1-.088-.175-.175-.175m.826-.372c-.102 0-.176.073-.188.173l-.139 4.4.139 2.102c.012.1.086.188.188.188a.193.193 0 0 0 .187-.188l.163-2.102-.164-4.4c0-.1-.087-.188-.188-.188m1.038.038a.196.196 0 0 0-.199-.199.205.205 0 0 0-.201.199l-.125 4.538.124 2.089c.015.111.101.199.214.199s.201-.088.201-.199l.136-2.089-.136-4.55-.014.012zm.625-.111c-.113 0-.213.1-.213.211l-.125 4.439.125 2.063c0 .125.1.213.213.213a.221.221 0 0 0 .214-.224l.125-2.064-.14-4.428c0-.122-.1-.225-.225-.225m.838.139a.236.236 0 0 0-.237.237l-.086 4.29.113 2.063c0 .124.1.231.236.231.125 0 .227-.1.237-.237l.101-2.038-.112-4.265c-.01-.137-.113-.238-.237-.238m.988-.786a.27.27 0 0 0-.139-.037c-.05 0-.1.013-.137.037a.25.25 0 0 0-.125.214v.05l-.086 5.044.096 2.043v.007c.006.05.024.112.06.15.05.051.12.086.196.086a.28.28 0 0 0 .175-.074.262.262 0 0 0 .076-.188l.013-.201.097-1.838-.113-5.075a.24.24 0 0 0-.111-.199l-.002-.019zm.837-.457a.155.155 0 0 0-.124-.052.283.283 0 0 0-.174.052.265.265 0 0 0-.1.201v.023l-.114 5.513.063 1.014.052.988a.274.274 0 0 0 .548-.012l.125-2.013-.125-5.536a.273.273 0 0 0-.138-.231m7.452 3.15c-.336 0-.663.072-.949.193a4.34 4.34 0 0 0-5.902-3.651c-.188.075-.227.151-.238.301v7.812a.31.31 0 0 0 .275.29h6.827a2.428 2.428 0 0 0 2.45-2.438 2.457 2.457 0 0 0-2.45-2.463"></path>
            </svg>
            <p className={`text-xs text-${cloudColor}`}>SOUNDCLOUD</p>
          </div>
        </div>
        <div>
          <div className="waveSurferWrap">
            <div ref={containerRef} />
          </div>
        </div>
        <div>
          <p onClick={() => setAudio(music1)}>Music1</p>
          <p onClick={() => setAudio(music2)}>Music2</p>
          <p onClick={() => setAudio(music3)}>Music3</p>
        </div>
      </div>
    </div>
  );
};
// Waveform.propTypes = {
//   audio: PropTypes.string.isRequired,
// };

export default MusicPlayer;
