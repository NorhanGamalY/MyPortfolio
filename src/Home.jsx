import React from 'react'
import TextType from './TextType';
import { Download } from 'lucide-react';

export default function Home() {
  return (
    <>
    <div className=" min-h-screen oveerlow-hidden flex justify-center flex-col items-center">
      <div className="relative md:top-0 md:fixed z-10 w-[90%] mx-auto flex justify-between items-center py-2 md:py-7 bg-opacity-95">
  <div className="text-2xl font-bold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
    &lt; NorhaN /&gt;
  </div>
</div>
      <div className="absolute inset-0 overflow-hidden bg-linear-to-r from-black via-purple-300 to-black opacity-50 z-0"></div>
      <div className="relative z-10 ">
        <img className="mx-auto h-90 rounded-full" src="./norhan.jpg" alt="Norhan" />
        <h1 className="text-4xl font-bold bg-linear-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Norhan Gamal
        </h1>
        <TextType
          text={["Front End Developer | React Specialist", 'Front End Developer | React Specialist']}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="text-2xl text-white"
        />
      </div>
      
            <a className=' relative z-10 text-2xl border-[#17A6DF] border-2 bg-pink text-white px-8 py-3 rounded-3xl mt-4 hover:bg-purple-500  hover:scale-110 hover:border-none transition-all duration-300' href="./Norhan-Gamal-Resume.pdf" download>Resume <Download className='inline' size={20} /></a> 
    </div>
    </>
  )
}
