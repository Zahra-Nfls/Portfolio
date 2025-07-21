"use client";

import { useState, useEffect, useRef } from 'react';
import HomeNav from './Components/HomeNav'; 
import TextAnimation from './Components/TextAnimation';
import pp from './../../public/images/pp10.png';
import floral from './../../public/images/fleur-de-lis.png';
import AnimatedText from './Components/AnimatedText';
import NavBaR from './Components/NavBar';
import Image from 'next/image';
import HomeFooter from './Components/HomeFooter';
import download from './../../public/images/direct-download.png'; 

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div 
            className="flex flex-col bg-cover w-full h-screen md:min-h-screen justify-between relative overflow-hidden cursor-pointer"
            style={{ backgroundImage: "url('/images/BG (4).jpg')" }}
        >
            {/* Black Overlay */}
            {isOpen && <div className="fixed inset-0 bg-black/30 z-10" />}

            {/* Navigation */}
            <div className="relative z-20" ref={menuRef}>
                <NavBaR isOpen={isOpen} toggleMenu={toggleMenu} />
                <div className="absolute top-0 right-0">
                    <HomeNav />
                </div>
            </div>

            {/* Main Content with Blur */}
            <div
                className="relative z-10 flex-grow transition-all duration-300 ease-in-out"
                style={{ filter: isOpen ? 'blur(8px)' : 'none' }}
            >
                {/* Introduction Section */}
                <section className="text-center px-4 ">
                    <h1 className="mt-10 md:mt-0 text-xl md:text-3xl font-indie">HEY THERE!</h1>
                    <p className='text-lg md:text-2xl md:mb-2'>I am 𝐙𝐚𝐡𝐫𝐚 カルマ(𝐊𝐚𝐫𝐦𝐚)</p>
                    <AnimatedText 
                        text="A Junior Full-Stack Web Developer!" 
                        className="font-yeseva text-fuchsia-950 text-lg md:text-3xl  font-bold md:mt-2 md:mb-5 text-center transition-all duration-300 ease-in-out" 
                    />
                </section>

                {/* Main Content */}
                <div className="flex flex-row justify-end items-center gap-5 md:gap-10 px-1 md:px-0 mt-[-6rem] md:mt-[-3rem] w-full md:w-3/4 mx-auto h-full md:mb-[-1rem]">
                    <Image 
                        src={pp} 
                        alt="Profile Picture" 
                        className="w-36 md:w-[280px] ml-2 md:ml-[-20rem] md:mt-[-7rem]" 
                    />
                    <section className="w-2/3 mt-20 md:mt-0 md:w-2/3 p-4 md:p-5 md:ml-14 flex justify-end flex-col">
                        <p className="text-m md:text-2xl md:text-left mb-5 font-indie text-fuchsia-950 font-semibold">What I’m Passionate About:</p>
                        
                        <div className="flex items-start mb-2">
                            <Image src={floral} alt="icon" className="w-5 md:w-6 mr-2" />
                            <p className="text-xs md:text-lg font-indie">
                                Creating dynamic and responsive web applications;
                            </p>
                        </div>
                        
                        <div className="flex items-start mb-4">
                            <Image src={floral} alt="icon" className="w-5 md:w-6 mr-2"/>
                            <p className="text-xs md:text-lg font-indie">
                                Challenging myself to continuously learn and improve my skills;
                            </p>
                        </div>
                        
                        <div className="flex items-start mb-4">
                            <Image src={floral} alt="icon" className="w-5 md:w-6 mr-2"/>
                            <p className="text-xs md:text-lg font-indie">
                                Exploring and applying new technologies;
                            </p>
                        </div>
                        
                        <div className="flex items-start mb-4">
                            <Image src={floral} alt="icon" className="w-5 md:w-6 mr-2"/>
                            <p className="text-xs md:text-lg font-indie">
                                Building projects that matter and solve real problems;
                            </p>
                        </div>
                        
                        <div className="flex items-start mb-4">
                            <Image src={floral} alt="icon" className="w-5 md:w-6 mr-2"/>
                            <p className="text-xs md:text-lg font-indie">
                                Turning raw ideas into interactive digital experiences;
                            </p>
                        </div>

                        <div className="flex items-start mb-4">
                            <Image src={floral} alt="icon" className="w-5 md:w-6 mr-2"/>
                            <p className="text-xs md:text-lg font-indie">
                                My Expertise include: <TextAnimation />
                            </p>
                        </div>

                        <div className="flex justify-center md:justify-end mt-5 md:mt-0">
                            <a href="/Zahra_CV.pdf" target="_blank" rel="noopener noreferrer">
                                <button className="flex items-center gap-2 border-2 border-fuchsia-950 font-indie rounded-xl text-xs sm:text-xs md:text-sm text-fuchsia-950 px-3 py-3 mb-10 bg-fuchsia-950/10 transition duration-300 ease-in-out hover:bg-fuchsia-950/45 hover:text-white">
                                    <Image src={download} alt="download" className="w-4 sm:w-5 h-4 sm:h-5" />
                                    Download my Resume
                                </button>
                            </a>
                        </div>
                    </section>
                </div>
            </div>

            <HomeFooter />
        </div>
    );
}
