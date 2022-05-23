import React from 'react'
import moc from '../assets/moc-2.png'
import scheme from '../assets/scheme.png'
import task from '../assets/task.png'
const Tools = () => {
  return (
    <div id="tools" className="relative px-2">
      <div className="flex relative flex-col lg:flex-row items-center container mx-auto gap-14 justify-between">
        <img className="-ml-32 moc2" src={moc} alt="" />
        <div className="mt-12">
          <img className="w-16 mb-7" src={scheme} alt="" />
          <span className="text-black text-5xl ">
            We <font className="font-medium">Design</font> Powerful{' '}
            <font className="font-medium">Tools</font> for Your Business.
          </span>
          <p className="text-grey mt-11 text-2xl mb-11">
            Convert all your business knowladge in to process improvement,
            automate tasks, implement ERP, design your own algorithms, we never
            limit our advice.
          </p>
          <div className="flex gap-3 flex-col mb-12">
            <span className="text-grey flex items-center">
              <img src={task} className="w-4 mr-4" alt="" />
              Direct contact.
            </span>
            <span className="text-grey flex items-center">
              <img src={task} className="w-4 mr-4" alt="" />
              International Advice.
            </span>
            <span className="text-grey flex items-center">
              <img src={task} className="w-4 mr-4" alt="" />
              Displacement to client.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tools
