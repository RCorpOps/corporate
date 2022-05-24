import React, { useState } from 'react'

const Pricing = () => {
  const [IsMonthly, setIsMonthly] = useState(true)
  return (
    <div
      id="pricing"
      className="container mx-auto flex items-center mb-32 flex-col mt-24"
    >
      <span className="text-5xl text-black text-center">
        Choose an <font className="font-medium">RCorp Plan</font> That <br />{' '}
        Suits Your Needs.
      </span>
      <div
        onClick={() => setIsMonthly(!IsMonthly)}
        className="flex items-center text-lg"
      >
        <span>One Month </span>
        <div className="w-20 h-10 rounded-full border-2 border-grey relative mt-11 mb-12 mx-3">
          <div
            style={{
              right: IsMonthly ? 'unset' : '6px',
              left: IsMonthly ? '6px' : 'unset',
            }}
            className="select-circle duration-500"
          ></div>
        </div>
        <span>All Year</span>
      </div>
      <div className="flex items-center flex-wrap lg:flex-nowrap gap-4 w-full justify-between">
        <div className="flex flex-col basis-full lg:basis-1/3 items-center">
          <span className="text-6xl tracking-tighter text-pink mb-6">
            {IsMonthly ? '450 €' : '4.500 €'}
          </span>
          <span className="text-sm text-black mb-12  tracking-wider font-normal">
            BASIC PACK
          </span>
          <div className="w-5/6 h-0.5 bg-slate-200 "></div>
          <ul className="flex text-grey gap-7 font-thin mb-12 flex-col mt-12 items-center">
            <li>Simple Market Study</li>
            <li>Email Contact 24/7</li>
            <li>1 Example Case</li>
            <li>1 Meeting/month</li>
          </ul>
          <button
            onClick={() => {
              window.open(
                'mailto:rcorpops@gmail.com?subject=Basic%20Plan%20Contact&body=Hi%20👋,%0AI%20am%20...%0AAnd%20I%20would%20like%20to%20contract%20the%20RCorp%20Basic%20Plan%20for ...',
              )
            }}
            className="login-btn mb-12  z-10 border-2 border-orange font-medium py-6 px-12 rounded bg-none"
          >
            Choose Plan
          </button>
          <span className="text-xs text-grey font-medium">
            NO HIDDEN CHARGES !
          </span>
        </div>
        <div className=" h-px lg:h-150 w-full lg:w-px bg-slate-200 my-10 md:my-0"></div>
        <div className="flex flex-col basis-full lg:basis-1/3 items-center">
          <span className="text-6xl tracking-tighter text-pink mb-6">
            {IsMonthly ? '850 €' : '8.500 €'}
          </span>
          <span className="text-sm text-black mb-12 tracking-wider font-normal">
            MEDIUM PACK
          </span>
          <div className="w-5/6 h-0.5 bg-slate-200"></div>
          <ul className="flex text-grey gap-7 mb-12  font-thin flex-col mt-12 items-center">
            <li>Elaborated Market Study</li>
            <li>Email + Whatsapp Contact 24/7</li>
            <li>3 Example Cases</li>
            <li>3 Meetings/month</li>
          </ul>
          <button
            onClick={() => {
              window.open(
                'mailto:rcorpops@gmail.com?subject=Medium%20Plan%20Contact&body=Hi%20👋,%0AI%20am%20...%0AAnd%20I%20would%20like%20to%20contract%20the%20RCorp%20Medium%20Plan%20for ...',
              )
            }}
            className="login-btn mb-12  z-10 border-2 border-orange font-medium py-6 px-12 rounded bg-none"
          >
            Choose Plan
          </button>
          <span className="text-xs text-grey font-medium">
            NO HIDDEN CHARGES !
          </span>
        </div>
        <div className="h-px lg:h-150 w-full lg:w-px bg-slate-200 my-10 md:my-0"></div>

        <div className="flex flex-col basis-full lg:basis-1/3 items-center">
          <span className="text-6xl tracking-tighter text-pink mb-6">
            {IsMonthly ? '2.000 €' : '20.000 €'}
          </span>
          <span className="text-sm text-black mb-12 tracking-wider font-normal">
            PREMIUM PACK
          </span>
          <div className="w-5/6 h-0.5 bg-slate-200"></div>
          <ul className="flex text-grey gap-7  font-thin mb-12 flex-col mt-12 items-center">
            <li>Market Study + Market Share increase</li>
            <li>Unlimited Contact (24/7)</li>
            <li>Unlimited Example Cases</li>
            <li>Unlimited Meetings/month</li>
          </ul>
          <button
            onClick={() => {
              window.open(
                'mailto:rcorpops@gmail.com?subject=Premium%20Plan%20Contact&body=Hi%20👋,%0AI%20am%20...%0AAnd%20I%20would%20like%20to%20contract%20the%20RCorp%20Premium%20Plan%20for ...',
              )
            }}
            className="login-btn mb-12  z-10 border-2 border-orange font-medium py-6 px-12 rounded bg-none"
          >
            Choose Plan
          </button>
          <span className="text-xs  text-grey font-medium">
            NO HIDDEN CHARGES !
          </span>
        </div>
      </div>
      <ul className="flex text-grey gap-7  font-thin mb-12 flex-col mt-12 items-center">
        <font size="1">
          *All clients located in Andorra (AND) are obliged to pay 4.5% I.G.I.
          Tax
        </font>
      </ul>
      <br></br>
      <br></br>
      <span className="text-5xl text-black text-center">
        Thinking about <font className="font-medium">reBranding</font>?{' '}
        <br></br>
        <font className="font-medium">We</font> help you.
      </span>
    </div>
  )
}

export default Pricing
