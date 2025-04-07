"use client";

import bg from "../../../public/images/route3.png";
import Image from 'next/image';
import { useState } from 'react';
import RouteNavBar from "../Components/RouteNavBar";
import { projects } from "../Data/Data";
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
            className="hidden md:flex bg-cover w-full min-h-screen flex-col justify-between relative overflow-hidden cursor-pointer"
            style={{ backgroundImage: "url('/images/BG (4).jpg')" }}
        >
      <RouteNavBar openModal={openModal} isModalOpen={isModalOpen} closeModal={closeModal} />
      <div>
          <section className="flex flew-row justify-center gap-3">
              <h2 className="text-3xl text-fuchsia-950 font-indie mb-2">My Projects</h2>
          </section>
          <div className="mx-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 overflow-y-auto scrollbar-custom h-[27rem] p-5 mb-14 ">
          {projects.map((project, index) => (
    <div key={index} className="div-style-mobile bg-fuchsia-950/25 h-[25rem] rounded-xl flex flex-col justify-between p-5">
      {/* Project Header */}
      <header className="text-center">
        <h3 className="text-2xl text-white mb-3 font-indie">
          {project.title}
        </h3>
      </header>

      {/* Project Main */}
      <main className="flex flex-col items-center">
        <Image
          src={project.image}
          alt={project.title}
          width={project.width}
          height={project.height}
          className="w-69 h-52 object-cover rounded"
        />
        <p className="text-s mt-3 text-center font-indie">
          {project.description}
        </p>
      </main>

      <footer className="flex flex-row ml-[-15rem] mb-[-5px] gap-4 mt-4 items-center font-indie">
  {/* Repo Link */}
  <div className="group flex flex-row gap-0.5">
    <a href={project.repo} target="_blank" rel="noopener noreferrer">
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
          className="absolute inset-0 opacity-0 group-hover:opacity-100  hover:scale-125 transition-transform"
        />
      </div>
    </a>
    <p className="text-fuchsia-950 text-xs flex items-center group-hover:text-white">Repo</p> {/* Text color change on hover */}
  </div>

  {/* Demo Link */}
  <div className="group flex flex-row gap-0.5">
    <a href={project.demo} target="_blank" rel="noopener noreferrer">
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
    <p className="text-fuchsia-950 text-xs flex items-center group-hover:text-white">Demo</p> {/* Text color change on hover */}
  </div>
</footer>



    </div>
  ))}

                    {/* More Button */}
                    <section className="font-indie text-lg mt-5">
                        <p>
                          For more information feel free to visit my Github account!
                        </p>
                    </section>
                </div>
            </div>
            <HomeFooter />
        </div>
    );
}
