import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="flex flex-col  bg-[#161616] text-[#f6f6f6] ">
        <div className="flex justify-center">
          <h1 className="font-clash text-center text-5xl mt-5">
            CONT<span className="font-aktura">A</span>CT
          </h1>
        </div>

        <h1 className="font-clash text-center">
          Are you interested in getting a Haircut from me?
          <br /> Let's find an amazing haircut for you together.
        </h1>

        <div className="text-center font-clash mt-6">Message me</div>
        <h1 className="text-center font-clash my-3 sm:text-xl text-3xl font-medium">
          contact@saeedazeem.com
        </h1>
        <div className="text-center font-clash">call me</div>
        <h1 className="text-center font-clash my-3 text-3xl sm:text-xl font-medium">
          (+92)-324-1064796
        </h1>

        <div className="flex justify-center mt-3 mb-6 ">
          <img src="/sci.png" alt="" className=" h-1/2 w-1/2" />
        </div>
      </div>
    </>
  );
}

export default Contact