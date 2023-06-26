import React from 'react'

const About = () => {
  return (
    <>
      <div className="text-[#f6f6f6] bg-[#161616]">
        <div className="flex flex-col font-clash p-3 sm:flex-row justify-between">
          <p>MON - SAT: 8 AM - 7 PM</p>
          <p>8944 BURTON WAY, Lahore, CA, 90211</p>
        </div>
        <div className="font-clash flex justify-center">
          <div className="flex flex-col items-center text-[4rem] md:text-[8rem]">
            <div>
              <span className="font-aktura">A</span>BOUT
            </div>
            <div>
              S<span className="font-aktura">A</span>EED
            </div>
          </div>
        </div>
        <div className="flex p-3 justify-end">
          <div className="flex flex-col gap-2">
            <img className="h-[30.5rem] rounded" src="./Saeed.png" alt="" />
            <h5 className="text-3xl font-medium font-clash">SAEED AZEEM</h5>
          </div>
        </div>
        <div className="flex flex-col p-2 font-clash text-xl gap-2 w-full lg:w-2/5">
          <p>
            Whether or not you’ve ever even heard the name Saeed Azeem, chances
            are your life has been touched by his work.
          </p>
          <p>
            When a certain rock star wanted a whole new image to shake the
            foundation,Saeed—and Miley Cyrus’ new look was born.
            Saeed is pure Lahori—he was born in Lahore and never truly left
            Lahore. In 2012,The Saeed Azeem Salon opened in Lahore.
          </p>
          <p>
            And those signature styles, those cool, laidback looks that he
            picked up from a lifetime on the beach—have made him the most
            celebrated hairstylist in the country.
          </p>
          <p>Interested in getting a hair cut?</p>
          <p>
            <span className="cursor-pointer underline">Contact me</span> to book
            an appointment.
          </p>
        </div>
      </div>
    </>
  );
}

export default About