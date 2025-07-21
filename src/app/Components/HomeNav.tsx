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


export default function HomeNav() {


    return (
        <div className="flex flex-col">


    {/* Desktop */}
    <div className="hidden mt-24 mr-24 justify-center bg-fuchsia-950/10 box-shadow md:flex md:w-14 md:flex-col text-black h-auto rounded-lg z-30">
        <div className="flex flex-col justify-center h-full">
            <ul className="flex flex-col justify-center items-center font-indie">
                <Tooltip text="About">
                <li className="my-5  hover:scale-125 transition-transform"><Link href="/About"><Image src={about} alt="logo" className="w-6 h-6" /></Link></li>
                </Tooltip>
                <Tooltip text="Skills">
                <li className="my-5  hover:scale-125 transition-transform"><Link href="/Skills"><Image src={skills} alt="skills" className="w-5 h-5" /></Link></li>
                </Tooltip>
                <Tooltip text="Projects">
                <li className="my-5  hover:scale-125 transition-transform"><Link href="/Project"><Image src={projects} alt="projects" className="w-5 h-5" /></Link></li>
                </Tooltip>
                <Tooltip text="Contact">
                <li className="my-5  hover:scale-125 transition-transform">
                    <Link href='/Contact'>
                    <button><Image src={contact} alt="contact" className="w-5 h-5" /></button> </Link></li>
                </Tooltip>
            </ul>
        </div>
    </div>
</div>
);
};
