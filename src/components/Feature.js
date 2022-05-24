import React from 'react'
import pc from '../assets/rocket-pc.png'
import stats from '../assets/stats.png'
import target from '../assets/target.png'
import idea from '../assets/idea.png'
import Video from './Video'
import bg from '../assets/tools-bg.png'
const Feature = () => {
  return (
    <div id="feature" className="relative px-6">
      <div className="mt-28 container mx-auto ">
        <h1 className="text-5xl mb-12 text-center">
          Checkout Our
          <br />
          <font className="font-bold"> Software </font> Features.{' '}
        </h1>
        <div className="flex gap-7 flex-wrap  justify-center lg:flex-nowrap mb-32">
          <div
            className="feature-container relative   flex items-center  basis-full md:basis-2/5 hover:border-transparent lg:basis-1/4 bg-white  rounded border-2 border-dark-white flex-col"
            style={{ height: '438px' }}
          >
            <div className="bg-black feature-box mt-12 mb-9 p-6 rounded">
              <img className="w-16 " src={pc} alt="" />
            </div>
            <span className="text-xl text-center hover:text-pink-600 duration-300 cursor-pointer font-medium text-black">
              Speed <br /> Optimized
            </span>
            <p className="mt-10 text-grey text-center">
              Users demand usability,
              <br /> accessibility and <br /> instant data display. <br />
              Boost your ops <br />
              with RCorp
            </p>
          </div>
          <div
            className="feature-container2 relative  flex items-center basis-full md:basis-2/5 hover:border-transparent lg:basis-1/4 bg-white  rounded border-2 border-dark-white flex-col"
            style={{ height: '438px' }}
          >
            <div className="bg-black feature-box2 mt-12 mb-9 p-6 rounded">
              <img className="w-16 " src={stats} alt="" />
            </div>
            <span className="text-xl text-center hover:text-pink-600 duration-300 cursor-pointer font-medium text-black">
              Business <br /> Intelligence
            </span>
            <p className="mt-10 text-grey text-center">
              Best enterprises use, <br /> on regular basis <br />
              historical data. <br />
              Learn from it <br />
              with RCorp
            </p>
          </div>
          <div
            className="feature-container3 relative  flex items-center basis-full md:basis-2/5 hover:border-transparent lg:basis-1/4 bg-white  rounded border-2 border-dark-white flex-col"
            style={{ height: '438px' }}
          >
            <div className="bg-black feature-box3 mt-12 mb-9 p-6 rounded">
              <img className="w-16 " src={target} alt="" />
            </div>
            <span className="text-xl text-center hover:text-pink-600 duration-300 cursor-pointer font-medium text-black">
              Accurate <br /> Solution
            </span>
            <p className="mt-10 text-grey text-center">
              Adapting our Sofware, <br />
              to your business is <br /> our main goal. <br />
              Automate your business <br />
              with RCorp
            </p>
          </div>
          <div
            className="feature-container4 relative  flex items-center basis-full md:basis-2/5 hover:border-transparent lg:basis-1/4 bg-white  rounded border-2 border-dark-white flex-col"
            style={{ height: '438px' }}
          >
            <div className="bg-black feature-box4 mt-12 mb-9 p-6 rounded">
              <img className="w-16 " src={idea} alt="" />
            </div>
            <span className="text-xl text-center hover:text-pink-600 duration-300 cursor-pointer font-medium text-black">
              Process <br /> Improve
            </span>
            <p className="mt-10 text-grey text-center">
              Automating tasks, <br /> allows RCorp members <br /> to reduce
              times. <br />
              Improve cost efficieny <br />
              with RCorp
            </p>
          </div>
        </div>
        <Video />
      </div>
      <img className="absolute -z-30 bottom-0 left-0" src={bg} alt="" />
    </div>
  )
}

export default Feature
