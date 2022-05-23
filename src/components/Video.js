import React from 'react'
import thumbnail from '../assets/video-1.jpeg'
const Video = () => {
  return (
    <div id="video" className="hidden md:flex w-full relative mb-28">
      <a
        href="https://www.youtube.com/watch?v=O2qwiyIv_ps&ab_channel=AleksanderVitkin"
        target="_blank"
      >
        <div className="bg-black  bg-opacity-60 hover:bg-opacity-20 duration-300 absolute right-0 left-0 top-0 bottom-0"></div>
        <img className="" src={thumbnail} alt="" />
        <div className="bg-thumbnail absolute -right-4 -left-4 -top-4 -bottom-4 -z-10"></div>
        <div className="absolute right-0 left-0 top-0 bottom-0 flex flex-col items-center justify-center ">
          <div className="play-btn p-5 lg:p-8">
            <svg
              width="32"
              height="32"
              viewBox="0 0 56 48"
              fill="none"
              className="rotate-90"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M28 0L55.7128 48H0.287188L28 0Z" fill="white" />
            </svg>
          </div>
          <span className="md:text-5xl sm:text-3xl text-2xl text-white text-center mt-5">
            How to <font className="font-medium">Profit</font> <br /> from
            Process Automate.
          </span>
        </div>
      </a>
    </div>
  )
}

export default Video
