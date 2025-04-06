"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import about from '../../../public/images/about.png';
import skills from '../../../public/images/skills.png';
import resume from '../../../public/images/cv.png';
import contact from '../../../public/images/email (2).png';
import projects from '../../../public/images/projects (2).png';
import Tooltip from './Tooltip';

interface HomeNavProps {
    openModal: () => void;
    isModalOpen: boolean;
    closeModal: () => void;
}

export default function HomeNav({ openModal, isModalOpen, closeModal }: HomeNavProps) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="flex flex-col">
            {/* Mobile Menu Hamburger */}
            <div className="md:hidden flex justify-end items-center fixed top-0 right-0 z-50">
                <button onClick={toggleMenu} className="text-2xl">
                    {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                </button>
            </div>

            {/* Desktop */}
            <div className="hidden mt-20 mr-10 justify-center bg-fuchsia-950/10 box-shadow md:flex md:w-14 md:flex-col text-black h-auto rounded-lg z-30">
                <div className="flex flex-col justify-center h-full">
                    <ul className="flex flex-col justify-center items-center">
                        <Tooltip text="About">
                        <li className="my-5"><Link href="/About"><Image src={about} alt="logo" className="w-6 h-6" /></Link></li>
                        </Tooltip>
                        <Tooltip text="Skills">
                        <li className="my-5"><Link href="/Skills"><Image src={skills} alt="skills" className="w-5 h-5" /></Link></li>
                        </Tooltip>
                        <Tooltip text="Projects">
                        <li className="my-5"><Link href="/Project"><Image src={projects} alt="projects" className="w-5 h-5" /></Link></li>
                        </Tooltip>
                        <Tooltip text="Contact">
                        <li className="my-5">
                            <Link href='/Contact'>
                            <button><Image src={contact} alt="contact" className="w-5 h-5" /></button> </Link></li>
                        </Tooltip>
                    </ul>
                </div>
            </div>

            {/* Mobile */}
            <div className={`md:hidden fixed top-0 text-center right-0 w-64 bg text-black h-full z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu} className="text-black">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>
                <ul className="flex flex-col p-4 text-fuchsia-950 font-dm ">
                    <li className="my-4 hover:bg-fuchsia-950 hover:text-white p-2 rounded text-center">
                        <Link href="/About" onClick={toggleMenu}>About Me</Link>
                    </li>
                    <li className="my-4 hover:bg-fuchsia-950 hover:text-white p-2 rounded text-center">
                        <Link href="/Skills" onClick={toggleMenu}>Skills</Link>
                    </li>
                    <li className="my-4 hover:bg-fuchsia-950 hover:text-white p-2 rounded text-center">
                        <Link href="/Resume" onClick={toggleMenu}>Resume</Link>
                    </li>
                    <li className="my-4 hover:bg-fuchsia-950 hover:text-white p-2 rounded text-center">
                        <Link href="/Project" onClick={toggleMenu}>Projects</Link>
                    </li>
                    {/* <li className="my-4 hover:bg-fuchsia-500 hover:text-white p-2 rounded text-center">
                        <button onClick={openModal} className="w-full">Contact</button>
                    </li> */}
                </ul>
            {/* {isModalOpen && <ContactModal isOpen={isModalOpen} onClose={closeModal} />} */}
            </div>
        </div>
    );
};
