import React from 'react'
import { Styles } from './Styles';

export const HairStyle = () => {
  return (
    <>
      <div className="bg-[#161616] text-[#f6f6f6]">
        <div className="flex justify-center">
          <div className="flex flex-col my-8 text-center gap-2">
            <div className="font-clash text-5xl font-medium">Select</div>
            <div className="font-clash text-5xl font-medium">
              H<span className="font-aktura">A</span>IR STYLE
            </div>
            <p>
              Over the years, I've had the opportunity to do many incredible
              Hair Styles.
            </p>
            <p> Here are a few of my favorites.</p>
          </div>
        </div>
        <div>
          <div className="grid lg:grid-cols-4 grid-cols-2  p-4 shadow   gap-4">
            {Styles.map((style) => (
              <div key={style.id} className="flex flex-col items-center">
                <img
                  src={style.imagePath}
                  alt={style.name}
                  className="w-full h-auto rounded-xl mb-1"
                />
                <p className='font-clash text-xl font-medium'>{style.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
