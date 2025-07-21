"use client";

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from "./../../../public/images/LogoPortfolio.png";
import Image from 'next/image';
import Link from 'next/link';


type NavBarProps = {
    isOpen: boolean;
    toggleMenu: () => void;
};


    export default function NavBaR({ isOpen, toggleMenu }: NavBarProps) {
    return (
        <header className="w-full px-4 mt-5 md:mt-3">
            <div className="flex justify-between items-center ">

                <Image src={logo} alt="logo" className="w-36 sm:w-32 md:w-48" priority />

                <button 
                    onClick={toggleMenu} 
                    className="md:hidden text-black focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <XMarkIcon className="w-6 h-6" />
                    ) : (
                        <Bars3Icon className="w-6 h-6" />
                    )}
                </button>

                <div className={`md:hidden fixed top-0 text-center right-0 w-64 bg  h-full z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-end p-4 ">
                    <button onClick={toggleMenu} className="text-fuchsia-950 hover:bg-fuchsia-950/45 rounded">
                        <XMarkIcon className="w-5 h-5" />
                    </button>
                </div>
                <ul className="flex flex-col p-4 text-fuchsia-950 font-indie ">
                    <li className="my-4 hover:bg-fuchsia-950/45 hover:text-white p-2 rounded-2xl text-center">
                        <Link href="/About" onClick={toggleMenu}>About Me</Link>
                    </li>
                    <li className="my-4 hover:bg-fuchsia-950/45 hover:text-white p-2 rounded-2xl text-center">
                        <Link href="/Skills" onClick={toggleMenu}>Skills</Link>
                    </li>
                    <li className="my-4 hover:bg-fuchsia-950/45 hover:text-white p-2 rounded-2xl text-center">
                        <Link href="/Resume" onClick={toggleMenu}>Resume</Link>
                    </li>
                    <li className="my-4 hover:bg-fuchsia-950/45 hover:text-white p-2 rounded-2xl text-center">
                        <Link href="/Project" onClick={toggleMenu}>Projects</Link>
                    </li>
                    <Link href="/Contact" >
                    <li className="my-4 hover:bg-fuchsia-950/45 hover:text-white p-2 rounded-2xl text-center">
                        <button  className="w-full">Contact</button>
                    </li>
                    </Link>
                </ul>
            {/* {isModalOpen && <ContactModal isOpen={isModalOpen} onClose={closeModal} />} */}
            </div>
            </div>
        </header>
    );
}
