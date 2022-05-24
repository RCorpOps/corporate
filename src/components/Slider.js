import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import brand from '../assets/brand-1.png'
import brand_ from '../assets/0.png'
import eco from '../assets/eco.png'
import goat from '../assets/goat.png'
import coffe from '../assets/coffe.png'
import camping from '../assets/camping.png'
import dog from '../assets/dog.png'
import surf from '../assets/surf.png'
import gang from '../assets/gang.png'
import shark from '../assets/shark.png'
const Slider = () => {
  const responsive = {
    0: { items: 3 },
    568: { items: 3 },
    1024: { items: 5 },
  }

  const items = [
    <img
      src={surf}
      className="opacity-60 mx-auto hover:opacity-100  w-18 md:w-auto"
      alt=""
    />,
    <img
      src={brand_}
      className="opacity-60 mx-auto hover:opacity-100  w-18 md:w-auto"
      alt=""
    />,
    <img
      src={eco}
      className="opacity-60 mx-auto hover:opacity-100  w-18 md:w-auto"
      alt=""
    />,
    <img
      src={goat}
      className="opacity-60 mx-auto hover:opacity-100  w-18 md:w-auto"
      alt=""
    />,
    <img
      src={coffe}
      className="opacity-60 mx-auto hover:opacity-100  w-18 md:w-auto"
      alt=""
    />,
    <img
      src={shark}
      className="opacity-60 mx-auto hover:opacity-100  w-18 md:w-auto"
      alt=""
    />,
    <img
      src={dog}
      className="opacity-60 mx-auto hover:opacity-100  w-18 md:w-auto"
      alt=""
    />,
    <img
      src={gang}
      className="opacity-60 mx-auto hover:opacity-100  w-18 md:w-auto"
      alt=""
    />,
  ]
  return (
    <div className="container  px-8 my-32">
      <div className="-ml-12 md:ml-0">
        <AliceCarousel
          autoPlay="true"
          infinite="true"
          autoPlayInterval={3000}
          disableButtonsControls
          disableDotsControls
          items={items}
          responsive={responsive}
        />
      </div>
      <hr className="mt-32" />
    </div>
  )
}

export default Slider
