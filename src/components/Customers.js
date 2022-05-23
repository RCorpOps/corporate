import React from 'react'
import presentation from '../assets/presentation.png'
import moc from '../assets/ia.png'
const Customers = () => {
  return (
    <div className="bg-yellowish px-2 pt-28">
      <div className="container flex flex-col lg:flex-row gap-14 items-center justify-between mx-auto">
        {' '}
        <div>
          <img className="w-16 mb-7" src={presentation} alt="" />
          <span className="text-black text-5xl">
            Boost with <font className="font-medium">BI</font> all Big Companies
            use it.
          </span>
          <p className="text-grey mt-9 text-lg">
            Understanding the whole process of desinging, building, implementing
            and improving process performance allows RCorp to deliver best
            Software Solutions.
          </p>
          <p className="mt-9 mb-12">
            Clients must understand that AI based solutions require a huge
            investment, due to all derived costs. Specific project Team, RCorp
            Computational Resources, for more detailed information contact us.
          </p>
          <button
            onClick={() => {
              window.open(
                'mailto:rcorpops@gmail.com?subject=AI%20Solution%20Based%20Contact&body=Hi%20👋,%0AI%20am%20...%0AAnd%20I%20would%20like%20to%20receive%20advice%20for ...',
              )
            }}
            className="login-btn  z-10 border-2 border-orange font-medium py-5 px-10 rounded bg-none"
          >
            AI Solution Contact
          </button>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <img width="500px" className="moc2 mb-32" src={moc} alt="" />
      </div>
    </div>
  )
}

export default Customers
