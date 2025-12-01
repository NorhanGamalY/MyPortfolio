import React from 'react'
import { Code, Palette, Zap, Github, Linkedin, Mail, ExternalLink, ChevronDown, Menu, X } from 'lucide-react';
import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';


export default function About({id}) {
  const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

  return (
    <>
    <section id="about">
    <div className="container min-h-screen mx-auto py-1 md:py-5  text-center text-white" id={id}>
        <div className="my-5 py-5">
        <h3 className="text-4xl font-bold text-4xl font-bold bg-linear-to-r from-blue-200 to-blue-600 bg-clip-text text-transparent">About Me</h3>
        <div className="flex justify-center mt-5 gap-4">
  <a href="https://github.com/NorhanGamalY" className="p-3 bg-gray-800 rounded-full hover:bg-purple-500 transition-all hover:scale-110" target="_blank">
    <Github size={24} />
  </a>
  <a href="https://www.linkedin.com/in/norhan-gamal-yousef/" className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 transition-all hover:scale-110" target="_blank">
    <Linkedin size={24} />
  </a> 
  <a href="mailto:norha25gamal@gmail.com" className="p-3 bg-gray-800 rounded-full hover:bg-red-500 transition-all hover:scale-110">
    <Mail size={24} />
  </a>
</div>
        </div>
        <div className="container mx-auto p-5 flex flex-col items-center gap-6 md:flex-row md:items-stretch  justify-center ">  
    <div className="w-full md:w-1/3 ">
    <img
                className="mx-auto shadow-xl w-[80%] md:w-full rounded-3 sm:mx-0 sm:shrink-0"
                src="about.jpg"
                alt="personal-Picture"
                style={{ height: '500px'}}
    />
        </div>  
    <div className="hidden md:flex md:w-1/6  md:w-1/8 flex-col items-center justify-evenly  bg-transparent">
    <div style={{ height: '500px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={techLogos}
        speed={80}
        direction="up"
        logoHeight={48}
        gap={40}
        hoverSpeed={20}
        fadeOut
      />
    </div>
    </div>
      <div className="w-[80%] md:hidden flex-col items-center justify-evenly  bg-transparent">
      <div style={{ height: '50px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={techLogos}
        speed={80}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={20}
        fadeOut
      />
      </div>
      </div>
      <div className="w-[80%] md:w-1/3 p-5 flex flex-col items-center justify-center bg-[#111827]" style={{ height: '500px' }}>
      <p className='text-start text-xl'> 
      I'm a Front-End Developer, my primary toolkit centers around React and Next.js, where I leverage their powerful ecosystems to build everything from single-page applications to full-stack solutions with server-side rendering and static site generation.
      </p>
      <div className='my-5 flex flex-wrap justify-between gap-2'>
        <div className='rounded-xl w-[48%] font-bold bg-[#242430] mb-1 p-3 hover:bg-[#22D3EE] transition-all hover:scale-110'>
                <span className='text-[#C084FC]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-icon lucide-code"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>
                </span>
                <span>Clean Code</span>
        </div>

        <div className='rounded-xl w-[48%] font-bold bg-[#242430] mb-1 p-3 hover:bg-[#FACC15] transition-all hover:scale-110'>
                <span className='text-[#F472B6]'> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette-icon lucide-palette"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg>
                </span>
                <span>Beautiful UI</span>       
        </div> 
                    
        <div className='rounded-xl w-[48%] font-bold bg-[#242430] p-3 hover:bg-[#F472B6] transition-all hover:scale-110'>
                <span className='text-[#FACC15]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>       
                </span>
                <span>Responsive</span> 
        </div> 
              
        <div className='rounded-xl w-[48%] font-bold bg-[#242430] p-3 hover:bg-[#C084FC] transition-all hover:scale-110'>
                <span className='text-[#22D3EE]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tablet-smartphone-icon lucide-tablet-smartphone"><rect width="10" height="14" x="3" y="8" rx="2"/><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"/><path d="M8 18h.01"/></svg>   </span>
                <span>Responsive</span>       
        </div> 
              
      </div>
    </div>
        </div>
      </div>
      </section>
    </>
  );
}