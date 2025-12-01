import React, { useEffect, useState } from 'react'

export default function Skills({id}) {
    const skillsData = [
  { skill: "React", rate: 90},
  { skill: "JavaScript/TypeScript", rate: 90},
  { skill: "CSS/Tailwind", rate: 95},
  { skill: "Material_UI", rate: 80},
  { skill: "Next.js", rate: 90},
  { skill: "Angular", rate: 50},
];

const maxrate = Math.max(...skillsData.map((d) => d.rate));
    const [animatedrate, setAnimatedrate] = useState(
    () => skillsData.map(() => 10) 
  );

    useEffect(() => {
    const timeouts = [];
    const intervals = [];

        skillsData.forEach((item, index) => {
        const timeout = setTimeout(() => {
        const targetValue = (item.rate / maxrate) * 100;
        const duration = 1000;
        const steps = 60;
        const increment = (targetValue - 10) / steps;
        let currentStep = 0;

        const interval = setInterval(() => {
          currentStep++;

          setAnimatedrate((prev) => {
            const next = [...prev];
            next[index] = 10 + increment * currentStep;
            return next;
          });

          if (currentStep >= steps) {
            setAnimatedrate((prev) => {
              const next = [...prev];
              next[index] = targetValue;
              return next;
            });
            clearInterval(interval);
          }
        }, duration / steps);

        intervals.push(interval);
      }, index * 100);

      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <>
    <section id={id}>
    <div className="container min-h-screen mx-auto py-1 md:py-5 text-center text-white" id={id}>
        <div className="my-5 py-10">
        <h1 className="text-4xl font-bold bg-linear-to-r from-green-200 to-green-600 bg-clip-text text-transparent">
            Skills & Expertise
        </h1>
        </div>
      {skillsData.map((data, i) => (
        <div key={data.skill} className="flex-col gap-4 items-center w-[80%] mx-auto md:w-[70%] mb-6 ">
        <div className="w-full text-lg font-semibold text-white text-gray-600 my-4 flex flex-wrap justify-between items-center">
          <span className='w-[90px] text-left'>{data.skill} </span>
          <span className="text-white text-right w-[40px] font-light"> {data.rate}%</span>
        </div>
          <div className="flex-1">
          <div className="bg-gray-200 rounded-full h-4 relative overflow-hidden">
          <div className="bg-gradient-to-r from-[#A955F6] to-pink-600 h-full rounded-full flex items-center justify-end pr-3 transition-all duration-1000 ease-out"
            style={{ width: `${animatedrate[i] || 10}%` }}>   
              </div>
    </div>
    </div>
    </div>
      ))}
    </div>
    </section>
</>
  )
}
