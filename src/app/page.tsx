"use client";

import { useState } from 'react';
import HomeNav from './Components/HomeNav'; 
import ContactModal from './Components/ContactModal'; 
import TextAnimation from './Components/TextAnimation';
import pp from './../../public/images/pp10.png';
import floral from './../../public/images/fleur-de-lis.png';
import AnimatedText from './Components/AnimatedText';
import NavBaR from './Components/NavBar';
import Image from 'next/image';
import HomeFooter from './Components/HomeFooter';
import mobileBg from './../../public/images/bg2.jpg'; 
import download from './../../public/images/direct-download.png'; 

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="w-full min-h-screen">
            {/* Desktop Layout */}
            <div className="hidden md:flex bg-cover w-full h-full flex-col relative" 
                style={{ backgroundImage: "url('/images/BG (4).jpg')" }}>

                <NavBaR />
                <div className="absolute top-0 right-0">
                    <HomeNav openModal={() => setIsModalOpen(true)} closeModal={() => setIsModalOpen(false)} isModalOpen={isModalOpen} />
                </div>

                <section className="text-center">
                    <h1 className="text-4xl font-caveat">ᕼI EᐯEᖇYOᑎE, I ᗩᗰ:</h1>
                    <AnimatedText 
                text="Zahra, a passionate Web Developer!" 
                className="font-indie text-fuchsia-950 ml-10 text-4xl font-bold text-center mb-5" 
            />
                </section>

                <div className="flex justify-center gap-10 items-center w-3/4 mt-[-60px] mr-[30px] h-full"> 
                    <Image src={pp} alt="Profile Picture" className="w-[280px]  mt-[-30px] ml-10" />

                    <section className="top-0 w-2/3 p-8 ml-[30px]">
    <p className="text-2xl text-center mb-5">ᗯᕼᗩT I ᒪOᐯE TO ᗪO:</p>
    
    <div className="flex items-center mb-3">
        <Image src={floral} alt="icon" className="w-8 mr-3 mb-4" />
        <p className="text-xl  font-indie">
        Creating dynamic and responsive web applications that bring ideas to life;</p>
    </div>
    
    <div className="flex items-center">
        <Image src={floral} alt="icon" className="w-8 mr-3" />
        <p className="text-xl font-indie">Challenging myself to continuously learn and improve my skills;</p>
    </div>

    <p className="text-xl mt-3 font-indie">My Expertise include: <TextAnimation /></p>

    <div className="flex justify-end">
        <a href="/Zahra_CV.pdf" target="_blank" rel="noopener noreferrer">
        <button className="flex items-center gap-2 border-2 border-fuchsia-950 rounded-xl text-fuchsia-950 p-3 mt-8 bg-fuchsia-950/10 transition duration-300 ease-in-out hover:bg-fuchsia-950/45 hover:text-white">
                <Image src={download} alt="download" className="w-5 h-5" />
                𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝙼𝚢 𝚁𝚎𝚜𝚞𝚖𝚎
            </button>
        </a>
    </div>
</section>

                    
                </div>
                
                {isModalOpen && <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
                <HomeFooter />
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col min-h-screen">
                <div className="flex-1 bg-cover" style={{ backgroundImage: `url(${mobileBg.src})`, backgroundPosition: "left", backgroundRepeat: "repeat-y" }}>
                    <NavBaR />
                    <div className="p-5 flex flex-col flex-1 relative">
                        <HomeNav openModal={() => setIsModalOpen(true)} closeModal={() => setIsModalOpen(false)} isModalOpen={isModalOpen} />
                        <div className="flex flex-col items-center">
                            <Image src={pp} alt="Profile Picture" className="w-40 rounded-full shadow-lg" />
                            <p className="text-2xl text-center font-caveat mt-3">ɪ ᴇɴᴊᴏʏ:</p>
                            <div className="flex items-center mb-3">
                                <Image src={floral} alt="logo" className="w-8 mr-3" />
                                <p className="text-m font-bold">Building dynamic and responsive web applications;</p>
                            </div>
                            <div className="flex items-center">
                                <Image src={floral} alt="logo" className="w-8 mr-3" />
                                <p className="text-m font-bold">And constantly challenging myself to learn new skills.</p>
                            </div>
                            <p className="text-m mt-3">Skills include: <TextAnimation /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
