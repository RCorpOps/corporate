import React from 'react'

const Question = () => {
  return (
    <div
      id="question"
      className="container px-2 mx-auto flex flex-col items-center"
    >
      <span className="text-5xl text-black text-center">
        Want to Ask <font className="font-medium mb-11">Something</font> <br />{' '}
        From Us?
      </span>
      <div className="flex flex-col items-center gap-5 mt-11">
        <div className="question-container1 px-10 py-8 bg-white rounded relative">
          <span className="text-pink text-lg mb-6 font-medium">
            Want to create an App? What is the process?
          </span>
          <p className="text-grey">
            This depends on the App you want to create, the first is to contact
            RCorp Team. Explain us your idea try to be as much precise as
            possible, one of our agents will review it and send you an estimate
            based on your email, after that if you still interested we will
            arrange a meeting in order to discuss the idea and get the main key
            points. Once fifty percent of the payment is done RCorp will
            allocate a Team in order to develop your App idea. Review meetings
            might vary based on your{' '}
            <font color="orange">
              <a href="#pricing"> RCorp plan</a>
            </font>
            .
          </p>
        </div>{' '}
        <div className="question-container1 px-10 py-8 bg-white rounded relative">
          <span className="text-pink text-lg mb-6 font-medium">
            What does RCorp marketing include?
          </span>
          <p className="text-grey">
            First of all we need to clarify what does marketing mean for us. For
            RCorp marketing involves nearly everything, launch, communication,
            business improvement, basically for us marketing == strategy. In
            order to deal with your business marketing we need to understand
            your: past, present and future of your Company. We adapt to our
            clients needs but we always recommend to go through our whole
            process, so we can maxime the impact of our Marketing.
          </p>
        </div>{' '}
        <div className="question-container1 px-10 py-8 bg-white rounded relative">
          <span className="text-pink text-lg mb-6 font-medium">
            How much does RCorp take to create an SSS{' '}
            <i>(Specific Software Solution)</i>?
          </span>
          <p className="text-grey">
            Timming depends on client's budget and app requirements. We can
            develop it really fast but client has to be conscious of RCorp
            resource allocation, we talk about this on the meeting after first
            estimate invoice is sent and approved, so you must be conscious that
            the first invoice is just a reference, we deliver the software you
            need, no templates or replicates, the software you need for your
            business.
          </p>
        </div>{' '}
        <div className="question-container1 px-10 py-8 bg-white rounded relative">
          <span className="text-pink text-lg mb-6 font-medium">
            Does RCorp get some share of the final Software?
          </span>
          <p className="text-grey">
            We normally do not like to get business shares, not because we do
            not trust our product, it is due to we provide a service and this
            ends when client gets what we designed and implemented. With{' '}
            <font color="orange">
              <a href="#pricing"> RCorp plans</a>
            </font>{' '}
            clients can still in contact with RCorp. But depending on the
            created Software we can agree with clients to get a billing
            percentage in order to get a discount in their invoicing. On regular
            basis RCorp stops owning the software source code once our clients
            complete their payment.
          </p>
        </div>{' '}
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}

export default Question
