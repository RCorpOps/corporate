import React from 'react'
import CountUp from 'react-countup'
import bg from '../assets/project-bg.png'
const Projects = () => {
  return (
    <div className="relative">
      <div className="container mx-auto flex flex-col items-center mb-28  ">
        <span className="text-5xl text-center text-black">
          Over 2200 <font className="font-medium">Projects</font> <br />{' '}
          Completed.
        </span>
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-20 mt-11">
          <div className="circle1 relative rounded-full w-44 h-44 bg-white flex flex-col items-center justify-center">
            <CountUp className="text-4xl text-black" end={2500} duration={1} />
            <span className="text-xs text-grey mt-2">
              <center>PROJECTS</center>
            </span>
            <div className="absolute bg-white bg-opacity-70 -right-4 -left-4 -top-4 -bottom-4 rounded-full shadow-lg -z-20"></div>
          </div>
          <div className="circle2 relative rounded-full w-44 h-44 bg-white flex flex-col items-center justify-center">
            <CountUp className="text-4xl text-black" end={3200} duration={1} />
            <span className="text-xs text-grey mt-2">CUSTOMERS</span>
            <div className="absolute bg-white bg-opacity-70 -right-4 -left-4 -top-4 -bottom-4 rounded-full shadow-lg -z-20"></div>
          </div>
          <div className="circle3 relative rounded-full w-44 h-44 bg-white flex flex-col items-center justify-center">
            <CountUp className="text-4xl text-black" end={120} duration={1} />
            <span className="text-xs text-grey mt-2">COLLABORATORS</span>
            <div className="absolute bg-white bg-opacity-70 -right-4 -left-4 -top-4 -bottom-4 rounded-full shadow-lg -z-20"></div>
          </div>
          <div className="circle4 relative rounded-full w-44 h-44 bg-white flex flex-col items-center justify-center">
            <CountUp className="text-4xl text-black" end={25} duration={1} />
            <span className="text-xs text-grey mt-2">PREMIUM</span>
            <div className="absolute bg-white bg-opacity-70 -right-4 -left-4 -top-4 -bottom-4 rounded-full shadow-lg -z-20"></div>
          </div>
        </div>
      </div>
      <img className="absolute top-0 -z-30 left-0" src={bg} alt="" />
    </div>
  )
}

export default Projects
