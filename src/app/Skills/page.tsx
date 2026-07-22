
    "use client";
    import Image from "next/image";
    import React, { useState, useEffect, useRef } from "react";
    import RouteNavBar from "../Components/RouteNavBar";
    import HomeFooter from "../Components/HomeFooter";
    import { frontEndIcons, backendIcons, generalTools, softSkills } from "../Data/Data";

    export default function Skills() {
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
        document.body.style.overflow = "hidden"; // prevent scroll when menu is open
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
        <div className="flex flex-col bg-cover w-full h-full relative overflow-hidden">
        {/* Background Image */}
        <div
            className="fixed inset-0 bg-cover bg-center transition-filter duration-300"
            style={{ backgroundImage: "url('/images/BG (4).png')" }}
        />

        {/* Blur Overlay */}
        {isOpen && <div className="fixed inset-0 bg-black/30" style={{ zIndex: 5 }} />}

        {/* Content */}
        <div className="relative z-10 flex flex-col w-screen min-h-screen justify-between">
            {/* Navbar */}
            <div ref={menuRef} className="relative z-20">
            <RouteNavBar isOpen={isOpen} toggleMenu={toggleMenu} />
            </div>

            {/* Main content with blur effect */}
            <main
            className="flex-grow flex flex-col md:flex-row w-full h-full"
            style={{ filter: isOpen ? "blur(6px)" : "none", transition: "filter 0.3s ease" }}
            >
            {/* Left side - Tech Skills */}
            <div className="w-full md:w-1/2 p-2 flex flex-col items-center mb-[-1rem]">
                <h2 className="font-indie text-fuchsia-950 text-xl font-semibold mt-5 md:mt-0.5 md:text-2xl md:ml-[-18px] mb-[-0.5rem]">Tech Skills</h2>

                <div className="w-full max-w-[510px] flex flex-col gap-5 p-4">
                {/* FrontEnd */}
                <div className="border-fuchsia-950 rounded-xl text-fuchsia-950 bg-fuchsia-950/10 transition duration-300 ease-in-out hover:bg-fuchsia-950/45 hover:text-white p-6 shadow-lg">
                    <h3 className="text-lg font-indie mb-4 font-semibold">FrontEnd</h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                    {frontEndIcons.map((icon, index) => (
                        <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
                        <Image
                            className="hover:scale-125 transition-transform"
                            width={30}
                            height={30}
                            src={icon.src}
                            alt={icon.alt}
                            title={icon.name}
                        />
                        </a>
                    ))}
                    </div>
                </div>

                {/* BackEnd */}
                <div className="border-fuchsia-950 rounded-xl text-fuchsia-950 bg-fuchsia-950/10 transition duration-300 ease-in-out hover:bg-fuchsia-950/45 hover:text-white p-6 shadow-lg">
                    <h3 className="text-lg font-indie mb-4 font-semibold">BackEnd</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                    {backendIcons.map((icon, index) => (
                        <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
                        <Image
                            className="hover:scale-125 transition-transform"
                            width={40}
                            height={40}
                            src={icon.src}
                            alt={icon.alt}
                            title={icon.name}
                        />
                        </a>
                    ))}
                    </div>
                </div>

                {/* General Tools */}
                <div className="border-fuchsia-950 rounded-xl text-fuchsia-950 bg-fuchsia-950/10 transition duration-300 ease-in-out hover:bg-fuchsia-950/45 hover:text-white p-6 shadow-lg">
                    <h3 className="text-lg font-indie mb-4 font-semibold">General Tools</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                    {generalTools.map((tool, index) => (
                        <a key={index} href={tool.link} target="_blank" rel="noopener noreferrer">
                        <Image
                            className="hover:scale-125 transition-transform"
                            width={30}
                            height={30}
                            src={tool.src}
                            alt={tool.alt}
                            title={tool.name}
                        />
                        </a>
                    ))}
                    </div>
                </div>
                </div>
            </div>

            {/* Right side - Soft Skills */}
            <div className="w-full h-full md:w-[60%] flex flex-col justify-center px-5 mt-5 mb-10 md:mb-0">
                <h3 className="font-indie text-fuchsia-950 font-semibold text-2xl text-center mt-6 md:mb-[-0.5rem]">Soft Skills</h3>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 md:overflow-x-auto h-full md:h-[65.5vh]">
                {softSkills.map((skill) => (
                    <div
                    key={skill.id}
                    className="bg-fuchsia-950/45 w-full p-3 rounded-xl shadow-lg"
                    >
                    <h4 className="text-lg font-semibold text-white mb-1 font-indie">{skill.title}</h4>
                    <p className="text-black font-indie">{skill.description}</p>
                    </div>
                ))}
                </div>
            </div>
            </main>

            {/* Footer */}
            <HomeFooter />
        </div>
        </div>
    );
    }

