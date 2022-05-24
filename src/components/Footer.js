import React from 'react'
import logo from '../assets/RCorp_logo.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import pinterest from '../assets/pinterest.svg'
const Footer = () => {
  return (
    <div className="container my-32 mb-8 mx-auto flex flex-col ">
      <div className="flex ml-3 flex-wrap justify-center items-center lg:flex-nowrap gap-28">
        <div className="basis-full flex sm:items-center lg:items-start items-center flex-col lg:basis-auto">
          <img className="w-28" src={logo} alt="" />
          <ul className="text-grey flex flex-col mt-10 gap-5">
            {/* <li className="hover:text-pink">
              <a href="tel:888 666 0000">+376 640 201</a>
            </li> */}
            <li className="hover:text-pink">
              <a href="mailto:needhelp@example.com">rcorpops@gmail.com</a>
            </li>
            <li className="hover:text-pink">
              43 Crta. d'Arinsal
              <br /> AND, Andorra
              <br /> AD 400
            </li>
          </ul>
        </div>
        <div className="basis-full items-center flex flex-col sm:basis-auto">
          <span className="text-black font-medium text-lg">Explore</span>
          <ul className="flex flex-col items-center md:items-start gap-5 text-grey mt-8">
            <li className="hover:text-orange">
              <a href="">About</a>
            </li>
            <li className="hover:text-orange">
              <a href="#feature">Features</a>
            </li>
            <li className="hover:text-orange">
              <a href="#pricing">Plans</a>
            </li>
            <li className="hover:text-orange">
              <a href="#question">FAQs</a>
            </li>
          </ul>
        </div>

        <div className="basis-full items-center flex flex-col  sm:basis-auto">
          <span className="text-black font-medium text-lg">Contact</span>
          <ul className="flex flex-col gap-5 items-center md:items-start text-grey mt-8">
            <li className="hover:text-orange">
              <a
                onClick={() => {
                  window.open(
                    'mailto:rcorpops@gmail.com?subject=RCorp%20Help%20&body=Hi%20👋,%0AI%20am%20...%0AAnd%20I%20would%20need%20help%20with%20 ...',
                  )
                }}
              >
                Help
              </a>
            </li>
            <li className="hover:text-orange">
              <a
                onClick={() => {
                  window.open(
                    'mailto:rcorpops@gmail.com?subject=RCorp%20Plans%20&body=Hi%20👋,%0AI%20am%20...%0AAnd%20I%20would%20like%20to%20get%20more%20info%20about%20RCorp%20Plans ...',
                  )
                }}
              >
                Plans
              </a>
            </li>
            <li className="hover:text-orange">
              <a
                onClick={() => {
                  window.open(
                    'mailto:rcorpops@gmail.com?subject=RCorp%20Branding%20&body=Hi%20👋,%0AI%20am%20...%0AAnd%20I%20would%20like%20to%20get%20branding%20advice%20 ...',
                  )
                }}
              >
                Branding
              </a>
            </li>
            <li className="hover:text-orange">
              <a
                onClick={() => {
                  window.open(
                    'mailto:rcorpops@gmail.com?subject=RCorp%20Plan%20Upgrade&body=Hi%20👋,%0AI%20am%20...%0AAnd%20I%20would%20like%20to%20upgrade%20from%20...%20to%20...',
                  )
                }}
              >
                Upgrade
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-3 basis-full items-center md:items-start justify-center md:justify-start lg:basis-auto">
          <div className="social1 w-14 h-14 flex items-center justify-center rounded-full">
            <img className=" w-4" src={facebook} alt="" />
          </div>
          <div className="social2 w-14 h-14 flex items-center justify-center  rounded-full">
            <img className=" w-4" src={twitter} alt="" />
          </div>
          <div className="social3 w-14 h-14 flex items-center justify-center  rounded-full">
            <img className=" w-4" src={instagram} alt="" />
          </div>
          <div className="social4 w-14 h-14 flex items-center justify-center  rounded-full">
            <img className=" w-4" src={pinterest} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
