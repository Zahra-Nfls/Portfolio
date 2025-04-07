"use client";

import NavBar from "../Components/RouteNavBar";
import bg from "../../../public/images/route3.png";
import Image from 'next/image';
import pc from '../../../public/images/pc.png';
import React, { ReactNode } from 'react';
import RouteNavBar from "../Components/RouteNavBar";
import HomeFooter from "../Components/HomeFooter"; 
import { useState } from 'react';
                
import { frontEndIcons, backendIcons, generalTools, softSkills } from "../Data/Data";

export default function Skills(){
        
        const [isModalOpen, setIsModalOpen] = useState(false);
        
        const openModal = () => {
            setIsModalOpen(true);
        };
    
        const closeModal = () => {
            setIsModalOpen(false);
        };
    
    return (
        <>
            <div 
            className="hidden md:flex bg-cover w-full min-h-screen flex-col relative overflow-hidden" 
            style={{ backgroundImage: "url('/images/BG (4).jpg')" }}
            >
                    <RouteNavBar openModal={openModal} isModalOpen={isModalOpen} closeModal={closeModal} />

    <div className="flex h-full w-full">

        <div className="w-1/2 p-2 flex-col flex items-center ml-[-10px] mt-[-0.5rem]">
        <h2  className="font-indie text-fuchsia-950  text-3xl  ml-[-18px]" >
            Tech Skills
        </h2>
        <div className="w-[510px] mb-[-40px]  flex flex-col gap-5 p-4 mr-10 justify-end">
                
                        <div className="border-fuchsia-950 rounded-xl text-fuchsia-950 bg-fuchsia-950/10 transition duration-300 ease-in-out hover:bg-fuchsia-950/45 hover:text-white p-6 shadow-lg">
                            <h3 className="text-lg font-indie mb-4 font-semibold">FrontEnd</h3>
                            <div className="flex flex-wrap gap-3">
                            <section className="flex flex-row gap-5 flex-wrap justify-center items-center">
                            {frontEndIcons.map((frontEndIcon, index) => (
                            <a key={index} href={frontEndIcon.link} target="_blank" rel="noopener noreferrer">
                                <Image
                                    className="hover:scale-125 transition-transform"
                                    width={30}
                                    height={30}
                                    src={frontEndIcon.src}
                                    alt={frontEndIcon.alt}
                                    title={frontEndIcon.name}
                                />
                            </a>
                        ))}
                </section>
                            </div>
                        </div> 
        
        
                        <div className="border-fuchsia-950 rounded-xl text-fuchsia-950 bg-fuchsia-950/10 transition duration-300 ease-in-out hover:bg-fuchsia-950/45 hover:text-white p-6 shadow-lg">
                            <h3 className="text-lg font-indie mb-4 font-semibold">BackEnd</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                            {backendIcons.map((backendIcon, index) => (
                            <a key={index} href={backendIcon.link} target="_blank" rel="noopener noreferrer">
                                <Image
                                    className="hover:scale-125 transition-transform"
                                    width={40}
                                    height={40}
                                    src={backendIcon.src}
                                    alt={backendIcon.alt}
                                    title={backendIcon.name}
                                />
                            </a>
                        ))} 
                            </div>
                        </div>
                        <div className="border-fuchsia-950 rounded-xl text-fuchsia-950 bg-fuchsia-950/10 transition duration-300 ease-in-out hover:bg-fuchsia-950/45 hover:text-white p-6 shadow-lg">
                            <h3 className="text-lg font-indie mb-4 font-semibold">General Tools</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                            {generalTools.map((generalTool, index) => (
                                <a key={index} href={generalTool.link} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        className="hover:scale-125 transition-transform"
                                        width={30}
                                        height={30}
                                        src={generalTool.src}
                                        alt={generalTool.alt}
                                    />
                                </a>
                            ))}
                            </div>
                        </div>
        
                    </div>
        </div>
            

                        <div className="w-[120vh] ml-[-80px] mt-[-2rem] flex flex-col justify-center p-5 mr-10">
                <h3 className="font-indie text-fuchsia-950 text-3xl text-dm ml-[-18px] text-center mt-6 ">
                    Soft Skills
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-[2.5vh]  p-5 overflow-x-auto ml-[-1.9vh] h-[65.5vh]">
                    {softSkills.map((skill) => (
                    <div
                        key={skill.id}
                        className="bg-fuchsia-950/45  w-full h-50 p-3 rounded-xl shadow-lg"
                    >
                        <h4 className="text-lg font-semibold text-white mb-1 font-indie">{skill.title}</h4>
                        <p className="text-black text-m font-indie">{skill.description}</p>
                    </div>
                    ))}
                </div>
                </div>

                    </div>


            <HomeFooter />
            </div>
        </>
    );
};


