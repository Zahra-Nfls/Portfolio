"use client";

import Link from "next/link";
import Image from 'next/image';
import logo from "./../../../public/images/logo.png";
import home from "./../../../public/images/home.png";
import ContactModal from '../Components/ContactModal';
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface RouteNavBarProps {
    openModal: () => void;
    isModalOpen: boolean;
    closeModal: () => void;
}

export default function RouteNavBar({ openModal, isModalOpen, closeModal }: RouteNavBarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Mobile Header */}
            <div className="md:hidden flex justify-between items-center p-4 fixed top-0 left-0 right-0 z-50 ">
                <Image src={logo} alt="logo" className="w-36 h-auto" />
                <button onClick={toggleMenu} className="text-2xl">
                    {isOpen ? <XMarkIcon className="w-6 h-6 text-transparent" /> : <Bars3Icon className="w-6 h-6" />}
                </button>
            </div>

            {/* Desktop Header */}
            <div className="hidden md:flex justify-between items-center mt-5 mx-5">
                <Image src={logo} alt="logo" className="w-96 h-18" />
                <nav className="flex flex-row items-center gap-9 mr-5 text-fuchsia-950 font-dm text-xl">
                    <ul className="flex flex-row items-center gap-9">
                        <li className="my-4 hover:underline hover:text-2xl transition-all duration-200">
                            <Link href="/"><Image src={home} alt="home" className="w-10 h-10" /></Link>
                        </li>
                        <li className="my-4 hover:underline hover:text-2xl transition-all duration-200">
                            <Link href="/About">About Me</Link>
                        </li>
                        <li className="my-4 hover:underline hover:text-2xl transition-all duration-200">
                            <Link href="/Skills">Skills</Link>
                        </li>
                        <li className="my-4 hover:underline hover:text-2xl transition-all duration-200">
                            <Link href="/Resume">Resume</Link>
                        </li>
                        <li className="my-4 hover:underline hover:text-2xl transition-all duration-200">
                            <Link href="/Project">Projects</Link>
                        </li>
                        <li className="my-4">
                            <button className="hover:underline hover:text-2xl transition-all duration-200" onClick={openModal}>
                                Contact
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-0 right-0 w-64 bg text-fuchsia-950 h-full transition-transform duration-300 ease-in-out transform z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-end p-4 ">
                    <button onClick={toggleMenu} className="text-fuchsia-950">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>
                <ul className="flex flex-col p-4 font-dm">
                    <li className="my-4 hover:bg-fuchsia-500 hover:text-white p-2 rounded text-center">
                        <Link href="/" onClick={toggleMenu}>Home</Link>
                    </li>
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
                    <li className="my-4 hover:bg-fuchsia-500 hover:text-white p-2 rounded text-center">
                        <button onClick={() => { openModal(); toggleMenu(); }} className="w-full">Contact</button>
                    </li>
                </ul>
            </div>

            {/* Contact Modal */}
            {isModalOpen && <ContactModal isOpen={isModalOpen} onClose={closeModal} />}
        </>
    );
}
