import React from 'react'
import blog from '../assets/blog-1-1.jpg'
import chain from '../assets/chain.svg'
const News = () => {
  return (
    <div
      id="news"
      className="bg-white-yellow w-full items-center flex-col mt-32 flex"
    >
      <div className="container mx-auto flex items-center flex-col">
        <span className="text-black text-5xl mt-28 mb-11 text-center">
          Checkout Our <font className="font-medium">Latest</font> <br /> News &
          Articles.
        </span>
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-8">
          <div
            className=" flex flex-col mx-2 sm:mx-6 md:mx-32 lg:mx-0  items-start bg-white basis-full lg:basis-1/3 border-white-yellow rounded mb-32"
            style={{ border: '1px solid grey' }}
          >
            <div className="relative mb-11 w-full">
              <div className="absolute flex items-center justify-center duration-300 bg-black bg-opacity-0 hover:bg-opacity-70 right-0 left-0 top-0 bottom-0 opacity-0 hover:opacity-100">
                <img
                  className="absolute w-14 z-30 cursor-pointer"
                  src={chain}
                  alt=""
                />
              </div>
              <img className="w-full rounded-t" src={blog} alt="" />
            </div>
            <div className="flex flex-col text-black px-12">
              <span className="text-sm cursor-pointer text-grey mb-4">
                <font className="hover:text-pink">22 Oct, 2019</font>
                <font className="hover:text-pink">. 2 Comments</font>
              </span>
              <span className="text-2xl cursor-default hover:text-pink font-medium mb-7">
                Pre and post launch mobile app marketing pitfalls to avoid
              </span>
              <a
                className="mb-12 text-sm text-pink hover:text-black  font-medium"
                href=""
              >
                READ MORE
              </a>
            </div>
          </div>

          <div
            className=" flex flex-col mx-2 sm:mx-6 md:mx-32 lg:mx-0  items-start bg-white basis-full lg:basis-1/3 border-white-yellow rounded mb-32"
            style={{ border: '1px solid grey' }}
          >
            <div className="relative mb-11 w-full">
              <div className="absolute flex items-center justify-center duration-300 bg-black bg-opacity-0 hover:bg-opacity-70 right-0 left-0 top-0 bottom-0 opacity-0 hover:opacity-100">
                <img
                  className="absolute w-14 z-30 cursor-pointer"
                  src={chain}
                  alt=""
                />
              </div>
              <img className="w-full rounded-t" src={blog} alt="" />
            </div>
            <div className="flex flex-col text-black px-12">
              <span className="text-sm cursor-pointer text-grey mb-4">
                <font className="hover:text-pink">22 Oct, 2019</font>
                <font className="hover:text-pink">. 2 Comments</font>
              </span>
              <span className="text-2xl cursor-default hover:text-pink font-medium mb-7">
                Pre and post launch mobile app marketing pitfalls to avoid
              </span>
              <a
                className="mb-12 text-sm text-pink hover:text-black  font-medium"
                href=""
              >
                READ MORE
              </a>
            </div>
          </div>
          <div
            className=" flex flex-col mx-2 sm:mx-6 md:mx-32 lg:mx-0 items-start bg-white basis-full lg:basis-1/3 border-white-yellow rounded mb-32"
            style={{ border: '1px solid grey' }}
          >
            <div className="relative mb-11 w-full">
              <div className="absolute flex items-center justify-center duration-300 bg-black bg-opacity-0 hover:bg-opacity-70 right-0 left-0 top-0 bottom-0 opacity-0 hover:opacity-100">
                <img
                  className="absolute w-14 z-30 cursor-pointer"
                  src={chain}
                  alt=""
                />
              </div>
              <img className="w-full rounded-t" src={blog} alt="" />
            </div>

            <div className="flex flex-col text-black px-12">
              <span className="text-sm cursor-pointer text-grey mb-4">
                <font className="hover:text-pink">22 Oct, 2019</font>
                <font className="hover:text-pink">. 2 Comments</font>
              </span>
              <span className="text-2xl cursor-default hover:text-pink font-medium mb-7">
                Pre and post launch mobile app marketing pitfalls to avoid
              </span>
              <a
                className="mb-12 text-sm text-pink hover:text-black  font-medium"
                href=""
              >
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
