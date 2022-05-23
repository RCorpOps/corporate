import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import appMoc from '../assets/app-screen-moc.png'
import appShot1 from '../assets/app-shot-1.jpeg'
import appShot2 from '../assets/app-shot-2.jpeg'
import appShot3 from '../assets/app-shot-3.jpeg'
import appShot4 from '../assets/app-shot-4.jpeg'
import appShot5 from '../assets/app-shot-5.jpeg'
const Interface = () => {
  const responsive = {
    0: { items: 3 },
    1324: { items: 3 },
    1500: { items: 5 },
  }

  const items = [
    <img src={appShot1} alt="" />,
    <img src={appShot2} alt="" />,
    <img src={appShot3} alt="" />,
    <img src={appShot4} alt="" />,
    <img src={appShot5} alt="" />,
  ]
  return (
    <div
      id="interface"
      className="hidden md:flex relative mx-auto  items-center mb-44 pr-8 flex-col"
    >
      <span className="mb-32 text-5xl text-black text-center">
        Some RCorp <br /> <font className="font-medium">UI/Ux </font> Examples.
      </span>
      <img className="hidden lg:flex absolute top-24" src={appMoc} alt="" />
      <AliceCarousel
        autoPlay="true"
        infinite="true"
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
      />
    </div>
  )
}

export default Interface
