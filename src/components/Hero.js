import React from 'react'
import bg from '../assets/banner-bg.png'
import moc from '../assets/moc-1.png'
const Hero = () => {
  return (
    <div id="home" className="container px-6 mx-auto overflow-hidden">
      <div className="mt-32 flex flex-col-reverse sm:flex-row items-center justify-between">
        <div>
          <h1 className="text-5xl sm:text-8xl z-10 font-light text-black tracking-tighter">
            We Deliver the
            <br />
            <font className="font-medium"> Software</font> you <br /> Need.
          </h1>
          <p className="max-w-md z-10 text-grey text-xl mt-6 mb-10">
            We are committed to provide our customers with an exceptional
            service. Advising, exemplifying and implementing the best software
            solutions for your business.
          </p>
          <button
            onClick={() => {
              window.open(
                'mailto:rcorpops@gmail.com?subject=Would%20like%20to%20contact%20an%20RCorp%20Agent&body=Hi%20👋,%0AI%20am%20...%0AAnd%20I%20would%20like%20to%20receive%20advice%20for ...',
              )
            }}
            className="login-btn  z-10 border-2 border-orange font-medium py-3 px-10 rounded bg-none"
          >
            Get Started
          </button>
        </div>
        <img
          className="absolute hidden sm:flex top-0 right-0 left-0 -z-20"
          src={bg}
          alt=""
        />
        <div className="bg-circle1 hidden lg:flex"></div>
        <div className="bg-circle2 hidden lg:flex"></div>
        <div className="bg-circle3 hidden lg:flex"></div>
        <div className="bg-circle4 hidden -z-30 lg:flex"></div>
        <img
          className="moc hidden sm:hidden lg:flex justify-self-end"
          src={moc}
          alt=""
        />
      </div>
    </div>
  )
}

export default Hero
