"use client";

import { useState } from 'react';
import RouteNavBar from "../Components/RouteNavBar";
import bg from "../../../public/images/bg8.png";
import resume from "../../../public/images/resume.png";
import download from "../../../public/images/download.png";
import Image from 'next/image';

export default function Resume() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="relative" style={{ width: '1848px', height: '1000px', overflow: 'hidden' }}>
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg.src})`, backgroundSize: 'cover' }}>
                    {/* Pass the props to RouteNavBar */}
                    <RouteNavBar openModal={openModal} isModalOpen={isModalOpen} closeModal={closeModal} />

                    <div className="flex flex-row gap-3 justify-center items-center mt-16 mb-10">
                            <h2 className="text-4xl text-fuchsia-950 font-dm ">My Resume</h2>
                            <Image src={resume} alt="resume" className="w-12 h-12 flex"/>
                    </div>

                    <div className="flex flex-col overflow-y-auto scrollbar-custom " style={{ maxHeight: '700px' }}>
                        <div className="mb-10 flex justify-center mx-2">
                            <iframe
                                src="/Curriculum Vitae en.pdf"
                                width="400px"
                                height="560px"
                                title="CV Preview"
                                style={{ border: 'none' }}
                                className="scrollbar-custom"
                            />
                        </div>
                        <section className="flex flex-col justify-center items-center mb-16">
                            <a href="/Curriculum Vitae en.pdf" download="𝚉𝚊𝚑𝚛𝚊'𝚜 𝙲𝚟">
                                <Image src={download} alt="download" className="w-12 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md"/>
                            </a>
                            <p className="text-xl text-fuchsia-950 font-dm">Download here</p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
