"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ContactModal from '../Components/ContactModal';
import Image from 'next/image';

import about from '../../../public/images/about.png';
import skills from '../../../public/images/skills.png';
import resume from '../../../public/images/cv.png';
import contact from '../../../public/images/email.png';
import projects from '../../../public/images/projects.png';
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
            <div className="md:hidden flex justify-end items-center p-4 fixed top-0 right-0 z-50">
                <button onClick={toggleMenu} className="text-2xl">
                    {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                </button>
            </div>

            {/* Desktop */}
            <div className="hidden mt-40 mb-40 mr-5 justify-center box-shadow md:flex md:w-20 md:flex-col bg-white text-black h-auto mx-4 rounded-lg z-30">
                <div className="flex flex-col justify-center h-full">
                    <ul className="flex flex-col justify-center p-4 items-center">
                        <Tooltip text="About">
                        <li className="my-8"><Link href="/About"><Image src={about} alt="logo" className="w-15 h-15" /></Link></li>
                        </Tooltip>
                        <Tooltip text="Skills">
                        <li className="my-8"><Link href="/Skills"><Image src={skills} alt="skills" className="w-10 h-15" /></Link></li>
                        </Tooltip>
                        <Tooltip text="Resume">
                        <li className="my-8"><Link href="/Resume"><Image src={resume} alt="resume" className="w-15 h-15" /></Link></li>
                        </Tooltip>
                        <Tooltip text="Projects">
                        <li className="my-8"><Link href="/Project"><Image src={projects} alt="projects" className="w-15 h-15" /></Link></li>
                        </Tooltip>
                        {/* <Tooltip text="Contact">
                        <li className="my-8"><button onClick={openModal}><Image src={contact} alt="contact" className="w-10 h-15" /></button></li>
                        </Tooltip> */}
                    </ul>
                </div>
            </div>

            {/* Mobile */}
            <div className={`md:hidden fixed top-0 text-center right-0 w-64 bg text-black h-full transition-transform duration-300 ease-in-out transform z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu} className="text-black">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>
                <ul className="flex flex-col p-4 text-fuchsia-950 font-dm ">
                    <li className="my-4 hover:bg-fuchsia-500 hover:text-white p-2 rounded text-center">
                        <Link href="/About" onClick={toggleMenu}>About Me</Link>
                    </li>
                    <li className="my-4 hover:bg-fuchsia-500 hover:text-white p-2 rounded text-center">
                        <Link href="/Skills" onClick={toggleMenu}>Skills</Link>
                    </li>
                    <li className="my-4 hover:bg-fuchsia-500 hover:text-white p-2 rounded text-center">
                        <Link href="/Resume" onClick={toggleMenu}>Resume</Link>
                    </li>
                    <li className="my-4 hover:bg-fuchsia-500 hover:text-white p-2 rounded text-center">
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
