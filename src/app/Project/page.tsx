    "use client";

    import bg from "../../../public/images/route3.png";
    import Image from 'next/image';
    import { useState } from 'react';
    import RouteNavBar from "../Components/RouteNavBar";
    import { projects} from "../Data/Data";
    import {Tooltip} from "@heroui/react";

import HomeFooter from "../Components/HomeFooter"; 
    export default function Projects() {
        const [isModalOpen, setIsModalOpen] = useState(false);
        const openModal = () => {
            setIsModalOpen(true);
        };
    
        const closeModal = () => {
            setIsModalOpen(false);
        };



        return (
            <div
              className="hidden md:flex bg-cover w-full min-h-screen flex-col justify-between relative overflow-hidden"
              style={{ backgroundImage: "url('/images/BG (4).jpg')" }}
            >
              <RouteNavBar openModal={openModal} isModalOpen={isModalOpen} closeModal={closeModal} />
              <div>
                <section className="flex flew-row justify-center gap-3">
                  <h2 className="text-2xl text-fuchsia-950 font-libre">My Projects</h2>
                </section>
                <div className="mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 overflow-y-auto scrollbar-custom h-[28rem] p-5 mb-14">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="div-style-mobile bg-fuchsia-950/10 h-[25rem] rounded-xl flex flex-col justify-between px-4 py-3"
                    >
                      {/* Header */}
                      <header className="text-center">
                        <h3 className="text-xl text-fuchsia-950 mb-2 font-libre">{project.title}</h3>
                      </header>
          
                      {/* Main */}
                      <main className="flex flex-col items-center">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={project.width}
                          height={project.height}
                          className="w-69 h-52 object-cover rounded"
                        />
                        <p className="text-xs mt-3 text-center font-libre">{project.description}</p>
                      </main>
          
                      {/* Footer */}
                      <footer className="flex ml-[-15rem] gap-4 mt-4 items-center">
                        <div className="tooltip relative">
                          <a href={project.repo} target="_blank" rel="noopener noreferrer">
                            <Image
                              src="/images/repo.png"
                              alt="Repository"
                              width={27}
                              height={27}
                            //   className="hover:scale-110 transition-transform"
                            />
                          </a>
                          <span className="tooltiptext absolute bottom-[120%] left-1/2 transform -translate-x-1/2 bg-fuchsia-900 text-white text-tiny font-libre rounded py-1 px-2 opacity-0 transition-opacity duration-300">
                            View Repository
                          </span>
                        </div>
          
                        <div className="tooltip relative">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <Image
                              src="/images/demo.png"
                              alt="Demo"
                              width={33}
                              height={33}
                            //   className="hover:scale-110 transition-transform"
                            />
                          </a>
                          <span className="tooltiptext absolute bottom-[120%] left-1/2 transform -translate-x-1/2 bg-fuchsia-900 text-white text-tiny font-libre rounded py-1 px-2 opacity-0 transition-opacity duration-300">
                            View Demo
                          </span>
                        </div>
                      </footer>
                    </div>
                  ))}
          
                  {/* More Button */}
                  <section className="col-span-full flex justify-center">
                    <a
                      href="https://github.com/zaraana?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="mt-4 mb-20 px-6 py-3 bg-fuchsia-950 text-white rounded hover:scale-105 hover:shadow-md transition-transform">
                        More..
                      </button>
                    </a>
                  </section>
                </div>
              </div>
              <HomeFooter />
            </div>
          );
          
            
    }
