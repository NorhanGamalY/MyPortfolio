import React from 'react';

const Projects = ({id}) => {
  const projectData = [
    {
      title: "Fresh Cart",
      description: "Frontend e-commerce solution with payment integration, inventory management, and admin",
      techStack: ["Next.js", "Tailwind CSS"],
      img: "cart.png",
      demoLink: "https://fresh-cart-ivory-nine.vercel.app/",
      codeLink: "https://github.com/NorhanGamalY/Fresh-Cart"
    },
    {
      title: "Pet Store",
      description: "User interface using Angular for a Pet Store that includes product viewing, adding, and updating functionalities.",
      techStack: ["Angular.js", "Tailwind CSS"],
      img: "pet.png",
      demoLink: "https://fresh-cart-ivory-nine.vercel.app/",
      codeLink: "https://github.com/NorhanGamalY/Fresh-Cart"
    },
    {
      title: "Queue Management",
      description: "A web app that provides a digital queue system so users can take and track turns without standing in physical lines.",
      techStack: ["Next.js", "Tailwind CSS"],
      img: "queue.png",
      demoLink: "",
      codeLink: "https://github.com/NorhanGamalY/Queue-Management-System"
    },
    {
      title: "Chat Bot",
      description: "Interactive AI-powered chatbot with a clean, responsive interface and smooth message flow.",
      techStack: ["Vanilla JS", "CSS", "AI API"],
      img: "chatBot.png",
      demoLink: "https://chat-bot-vert-sigma.vercel.app/",
      codeLink: "https://github.com/NorhanGamalY/ChatBot"
    },
    {
      title: "Resturant Website",
      description: "Simple website mainly demonstrates frontend skills through organized sections and a mobile-friendly design.",
      techStack: ["Vanilla JS", "CSS"],
      img: "food.png",
      demoLink: "https://norhangamaly.github.io/Mealify-Project/",
      codeLink: "https://github.com/NorhanGamalY/Mealify-Project"
    },
    {
      title: "Personal Portfolio",
      description: "A personal portfolio website to showcase projects, skills, experience, and personal information.",
      techStack: ["Vanilla JS", "Bootstrap CSS"],
      img: "portfolio.png",
      demoLink: "https://norhangamaly.github.io/Daniels-Project/",
      codeLink: "https://github.com/NorhanGamalY/Daniels-Project"
    }
  ];
  
  return (
    <>
    <section id={id}>
      <div className="container min-h-screen mx-auto py-10 text-center text-white" >
      <div className="my-5 pt-10">
        <h1 className="text-4xl font-bold bg-linear-to-r from-amber-200 to-amber-600 bg-clip-text text-transparent pb-3">Featured Projects</h1>
        <p>A collection of my recent work and personal projects</p>
      </div>

      <div className=" p-6">
      <div className=" p-6 rounded-md flex   flex-wrap justify-center gap-5">
        {projectData.map((project, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4">

      <div className="relative group h-80 rounded-2xl overflow-hidden bg-[#242430] text-center">
      <div className="h-full flex flex-col items-center justify-center">
            <img
            src={project.img}
            className="w-40 mx-auto py-1"
            alt={project.title}
            />
            <h5 className='text-xl font-bold bg-linear-to-r from-purple-200 to-blue-600 bg-clip-text text-transparent'>{project.title}</h5>

      </div>

      <div
      className="absolute inset-x-0 bottom-0
      bg-[#0A0E1A] py-5
      transform translate-y-full
      group-hover:translate-y-[-10px] opacity-[80%]
      transition-transform duration-500 ease-out
      "
      >
            <p>{project.description}</p>
      <div className="my-8 flex gap-3 justify-center">
      {project.techStack?.map((tech, index) =>(
      <span key={index} className="rounded-xl bg-[#242430] p-2 hover:scale-[1.1]">
      {tech}
      </span>

      ))}
      </div>
      <div className="my-8 flex gap-3 justify-center">
            <a
            href={project.demoLink}
            target="_blank"
            rel="noreferrer"
            className="flex gap-3 justify-center rounded-xl bg-[#0F182B] p-3 hover:bg-pink-700"
            >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 inline-block"
            >
            <path d="M18 13a1 1 0 0 0-1 1v4H6V7h4a1 1 0 1 0 0-2H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-4a1 1 0 0 0-1-1Zm3-11h-6a1 1 0 0 0 0 2h3.59l-9.3 9.3a1 1 0 1 0 1.42 1.4L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1Z" />
            </svg>
            <p>Demo</p>
            </a>

            <a
            href={project.codeLink}
            target="_blank"
            rel="noreferrer"
            className="flex gap-3 justify-center rounded-xl bg-[#0F182B] p-3 hover:bg-purple-700"
            >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.8-.25.8-.57v-2c-3.26.71-3.95-1.39-3.95-1.39a3.1 3.1 0 0 0-1.3-1.71c-1.06-.73.08-.72.08-.72a2.45 2.45 0 0 1 1.79 1.2 2.5 2.5 0 0 0 3.42 1 2.5 2.5 0 0 1 .75-1.57c-2.6-.3-5.33-1.3-5.33-5.8a4.55 4.55 0 0 1 1.21-3.16 4.23 4.23 0 0 1 .12-3.12s.98-.31 3.2 1.2a11.06 11.06 0 0 1 5.82 0c2.22-1.51 3.2-1.2 3.2-1.2.43 1 .47 2.1.12 3.12a4.55 4.55 0 0 1 1.21 3.16c0 4.52-2.73 5.49-5.34 5.78a2.8 2.8 0 0 1 .8 2.17v3.22c0 .32.21.69.81.57A11.5 11.5 0 0 0 12 .5Z" />
            </svg>
            <p>Code</p>
            </a>
      </div>
      </div>
      </div>

          </div> 
          ))} 
      </div>
      
    </div>  
    </div>
    </section>
    </>
  );
};

export default Projects;
