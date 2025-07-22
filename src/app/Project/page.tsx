

// "use client";

// import Image from "next/image";
// import React, { useState, useEffect, useRef } from "react";
// import RouteNavBar from "../Components/RouteNavBar";
// import HomeFooter from "../Components/HomeFooter";
// import { projects } from "../Data/Data";

// export default function Projects() {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => setIsOpen(!isOpen);
//   const menuRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     }

//     if (isOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//       document.body.style.overflow = "hidden";
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.body.style.overflow = "";
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.body.style.overflow = "";
//     };
//   }, [isOpen]);

//   return (
//     <div className="flex flex-col bg-cover w-full h-full md:h-full relative overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="fixed inset-0 bg-cover bg-center transition-filter duration-300"
//         style={{ backgroundImage: "url('/images/BG (4).jpg')" }}
//       />

//       {/* Blur Overlay on Mobile Menu Open */}
//       {isOpen && <div className="fixed inset-0 bg-black/30" style={{ zIndex: 5 }} />}

//         {/* Navbar */}
//         <div ref={menuRef} className="relative z-20">
//           <RouteNavBar isOpen={isOpen} toggleMenu={toggleMenu} />
//         </div>
//       {/* Main Content */}
//       <div
//   className={`relative z-10 flex flex-col w-screen md:min-h-screen justify-between transition-all duration-300 ${
//     isOpen ? "blur-md" : ""
//   }`}
// >

//         {/* Main Section */}
//         <section className="flex flew-row justify-center gap-3 p-8 ">
//               <h2 className="text-3xl text-fuchsia-950 font-indie md:mt-[-2rem] ">My Projects</h2>
//           </section>
//           <div className="mx-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 overflow-y-auto scrollbar-custom min-h-[27rem] md:h-[10rem] md:mt-[-5rem]">
//           {projects.map((project, index) => (
//     <div key={index} className="div-style-mobile bg-fuchsia-950/25 md:h-[25rem] rounded-xl flex flex-col justify-between p-5">
//       {/* Project Header */}
//       <header className="text-center">
//         <h3 className="text-2xl text-white mb-3 font-indie">
//           {project.title}
//         </h3>
//       </header>

//       {/* Project Main */}
//       <main className="flex flex-col items-center">
//         <Image
//           src={project.image}
//           alt={project.title}
//           width={project.width}
//           height={project.height}
//           className="w-69 h-52 object-cover rounded"
//           priority
//         />
//         <p className="md:text-s text-xs mt-3 text-center font-indie h-8">
//           {project.description}
//         </p>
//       </main>

//       <footer className="flex flex-row md:ml-[-12rem]  gap-4 mt-8 items-center font-indie">
//   {/* Repo Link */}
//   <div className="group flex flex-row gap-0.5">
//     <a href={project.repo} target="_blank" rel="noopener noreferrer">
//       <div className="relative">
//         <Image
//           src="/images/repo.png"
//           alt="Repository"
//           width={20}
//           height={20}
//           className="transition-opacity group-hover:opacity-0"
//         />
//         <Image
//           src="/images/repoW.png"
//           alt="Repository White"
//           width={20}
//           height={20}
//           className="absolute inset-0 opacity-0 group-hover:opacity-100  hover:scale-125 transition-transform"
//         />
//       </div>
//     </a>
//     <p className="text-fuchsia-950 text-xs flex items-center group-hover:text-white">Repo</p> 
//   </div>

//   {/* Demo Link */}
//   <div className="group flex flex-row gap-0.5">
//     <a href={project.demo} target="_blank" rel="noopener noreferrer">
//       <div className="relative">
//         <Image
//           src="/images/demo.png"
//           alt="Demo"
//           width={20}
//           height={20}
//           className="transition-opacity group-hover:opacity-0"
//         />
//         <Image
//           src="/images/demoW.png"
//           alt="Demo White"
//           width={20}
//           height={20}
//           className="absolute inset-0 opacity-0 group-hover:opacity-100 hover:scale-125 transition-transform"
//         />
//       </div>
//     </a>
//     <p className="text-fuchsia-950 text-xs flex items-center group-hover:text-white">Demo</p> {/* Text color change on hover */}
//   </div>
// </footer>



//     </div>
//   ))}
//                     <section className="font-indie text-lg mt-5">
//                         <p>
//                           For more information feel free to visit my Github account!
//                         </p>
//                     </section>
//                 </div>
            

//         {/* Footer */}
//         <HomeFooter />
//       </div>
//     </div>
//   );
// }



// "use client";


// import bg from "../../../public/images/route3.png";
// import Image from 'next/image';
// import RouteNavBar from "../Components/RouteNavBar";
// import { projects } from "../Data/Data";
// import HomeFooter from "../Components/HomeFooter";
// import React, { useState, useEffect, useRef } from "react";

// export default function Projects() {
//     const [isOpen, setIsOpen] = useState(false);
//       const toggleMenu = () => setIsOpen(!isOpen);
//       const menuRef = useRef<HTMLDivElement>(null);
  
//       useEffect(() => {
//           function handleClickOutside(event: MouseEvent) {
//           if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//               setIsOpen(false);
//           }
//           }
  
//           if (isOpen) {
//           document.addEventListener("mousedown", handleClickOutside);
//           document.body.style.overflow = "hidden"; // prevent scroll when menu is open
//           } else {
//           document.removeEventListener("mousedown", handleClickOutside);
//           document.body.style.overflow = "";
//           }
  
//           return () => {
//           document.removeEventListener("mousedown", handleClickOutside);
//           document.body.style.overflow = "";
//           };
//       }, [isOpen]);


//     return (
//         <div
//             className="flex bg-cover w-full h-full flex-col justify-between relative overflow-hidden cursor-pointer"
//             style={{ backgroundImage: "url('/images/BG (4).jpg')" }}
//         >
//         <div
//                   className="fixed inset-0 bg-cover bg-center transition-filter duration-300"
//                   style={{ backgroundImage: "url('/images/BG (4).jpg')" }}
//               />
      
//               {/* Blur Overlay */}
//               {isOpen && <div className="fixed inset-0 bg-black/30" style={{ zIndex: 5 }} />}
      
//                   {/* Navbar */}
//                   <div ref={menuRef} className="relative z-20">
//                   <RouteNavBar isOpen={isOpen} toggleMenu={toggleMenu} />
//                   </div>
//               {/* Content */}
//               <div
//   className="relative z-10 flex flex-col w-screen min-h-screen justify-between transition-all duration-300"
//   style={{ filter: isOpen ? "blur(6px)" : "none" }}
// >
      
//       <main>
//           <section className="flex flew-row justify-center gap-3">
//               <h2 className="text-3xl text-fuchsia-950 font-indie mb-2">My Projects</h2>
//           </section>
//           <div className="mx-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 overflow-y-auto scrollbar-custom h-[27rem] p-5 mb-5">
//           {projects.map((project, index) => (
//     <div key={index} className="div-style-mobile bg-fuchsia-950/25 h-[25rem] rounded-xl flex flex-col justify-between p-5 h">
//       {/* Project Header */}
//       <header className="text-center">
//         <h3 className="text-2xl text-white mb-3 font-indie">
//           {project.title}
//         </h3>
//       </header>

//       {/* Project Main */}
//       <main className="flex flex-col items-center">
//         <Image
//           src={project.image}
//           alt={project.title}
//           width={project.width}
//           height={project.height}
//           className="w-69 h-52 object-cover rounded"
//           priority
//           unoptimized
//         />
//         <p className="md:text-s mt-3 text-center font-indie h-8 text-xs">
//           {project.description}
//         </p>
//       </main>

//       <footer className="flex flex-row md:ml-[-12rem]  gap-4 mt-8 items-center font-indie md:mt-0">
//   {/* Repo Link */}
//   <div className="group flex flex-row gap-0.5 ">
//     <a href={project.repo} target="_blank" rel="noopener noreferrer">
//       <div className="relative">
//         <Image
//           src="/images/repo.png"
//           alt="Repository"
//           width={20}
//           height={20}
//           className="transition-opacity group-hover:opacity-0"
//         />
//         <Image
//           src="/images/repoW.png"
//           alt="Repository White"
//           width={20}
//           height={20}
//           className="absolute inset-0 opacity-0 group-hover:opacity-100  hover:scale-125 transition-transform"
//         />
//       </div>
//     </a>
//     <p className="text-fuchsia-950 text-xs flex items-center group-hover:text-white">Repo</p> 
//   </div>

//   {/* Demo Link */}
//   <div className="group flex flex-row gap-0.5">
//     <a href={project.demo} target="_blank" rel="noopener noreferrer">
//       <div className="relative">
//         <Image
//           src="/images/demo.png"
//           alt="Demo"
//           width={20}
//           height={20}
//           className="transition-opacity group-hover:opacity-0"
//         />
//         <Image
//           src="/images/demoW.png"
//           alt="Demo White"
//           width={20}
//           height={20}
//           className="absolute inset-0 opacity-0 group-hover:opacity-100 hover:scale-125 transition-transform"
//         />
//       </div>
//     </a>
//     <p className="text-fuchsia-950 text-xs flex items-center group-hover:text-white">Demo</p> {/* Text color change on hover */}
//   </div>
// </footer>



//     </div>
//   ))}

//                     {/* More Button */}
//                     <section className="font-indie text-lg ">
//                         <p>
//                           For more information feel free to visit my Github account!
//                         </p>
//                     </section>
//                 </div>
//             </main>
//             <HomeFooter />
//             </div>
//         </div>
//     );
// }

"use client";

import bg from "../../../public/images/route3.png";
import Image from "next/image";
import RouteNavBar from "../Components/RouteNavBar";
import { projects } from "../Data/Data";
import HomeFooter from "../Components/HomeFooter";
import React, { useState, useEffect, useRef } from "react";

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/images/BG (4).jpg')" }}
      />

      {/* Optional Blur Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/30 z-10" />}

      {/* Navbar */}
      <div ref={menuRef} className="relative z-20">
        <RouteNavBar isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>

      {/* Main Content */}
      <main
        className="flex-grow flex flex-col justify-start items-center px-5 pt-5 pb-6 min-h-0 relative z-10"
        style={{ filter: isOpen ? "blur(6px)" : "none" }}
      >
        {/* Header */}
        <section className="mb-7">
          <h2 className="md:text-2xl text-lg text-fuchsia-950 font-semibold font-indie text-center">
            My Projects
          </h2>
        </section>

        {/* Projects Grid */}
        <div className="w-full max-w-7xl flex-grow overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-10 scrollbar-custom h-full md:h-[24rem]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-fuchsia-950/25 rounded-xl flex flex-col justify-between p-5 "
            >
              {/* Project Header */}
              <h3 className="text-2xl text-white mb-3 font-indie text-center">
                {project.title}
              </h3>

              {/* Project Main */}
              <div className="flex flex-col items-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={project.width}
                  height={project.height}
                  className="w-69 h-52 object-cover rounded"
                  priority
                  unoptimized
                />
                <p className="text-xs mt-3 text-center font-indie">
                  {project.description}
                </p>
              </div>

              {/* Footer Links */}
              <footer className="flex gap-4 mt-6 items-center font-indie">
                {/* Repo */}
                <div className="group flex flex-row gap-1">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative">
                      <Image
                        src="/images/repo.png"
                        alt="Repository"
                        width={20}
                        height={20}
                        className="transition-opacity group-hover:opacity-0"
                      />
                      <Image
                        src="/images/repoW.png"
                        alt="Repository White"
                        width={20}
                        height={20}
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 hover:scale-125 transition-transform"
                      />
                    </div>
                  </a>
                  <p className="text-fuchsia-950 text-xs flex items-center group-hover:text-white">
                    Repo
                  </p>
                </div>

                {/* Demo */}
                <div className="group flex flex-row gap-1">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative">
                      <Image
                        src="/images/demo.png"
                        alt="Demo"
                        width={20}
                        height={20}
                        className="transition-opacity group-hover:opacity-0"
                      />
                      <Image
                        src="/images/demoW.png"
                        alt="Demo White"
                        width={20}
                        height={20}
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 hover:scale-125 transition-transform"
                      />
                    </div>
                  </a>
                  <p className="text-fuchsia-950 text-xs flex items-center group-hover:text-white">
                    Demo
                  </p>
                </div>
              </footer>
            </div>
          ))}
        </div>

        {/* Message Below Grid */}
        <section className="mt-2 md:mt-4 md:mb-[-1rem] font-indie text-xs md:text-lg text-center">
          <p>For more projects feel free to visit my Github account!</p>
        </section>
      </main>

      {/* Footer */}
      <HomeFooter />
    </div>
  );
}
