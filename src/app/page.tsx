"use client";

import { useState } from 'react';
import HomeNav from './Components/HomeNav'; 
import ContactModal from './Components/ContactModal'; 
import TextAnimation from './Components/TextAnimation';
import bg from './../../public/images/bg10.png';
import pp from './../../public/images/pp.png';
import mobileBg from './../../public/images/bg2.jpg'; // Add your mobile background image here
import img from './../../public/images/sakura (5).png';
import sakura from './../../public/images/sakura (2).png';
import H1Animation  from './Components/H1Animation';
import NavBaR from './Components/NavBar';
import Image from 'next/image';
import Footer from './Components/Footer';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div className="desktop-layout relative " style={{ width: '1400px', height: '800px', overflow: 'hidden' }}>
                <div className="absolute inset-0 bg-cover bg-center mt-5 mb-5" style={{ backgroundImage: `url(${bg.src})` }}>
                    <NavBaR/>
                    <div className="absolute top-0 left-0 w-full z-20 flex justify-end ">
                        <HomeNav openModal={openModal} isModalOpen={isModalOpen} closeModal={closeModal} />
                    </div>
                    <div className="relative z-10 flex flex-row h-full text-fuchsia-950">
                        <div className="w-1/3 flex items-center justify-center">
                        <Image src={pp} alt="pp" className='ml-5'/> 
                        </div>
                        <div className="w-2/3 flex flex-col items-start justify-center mr-20 mb-10 p-10 mx-5 ">
                            <section className='div-style bg-opacity-50 ml-10 mb-40'>
                                <H1Animation/> 
                                <section className='flex flex-row justify-center items-center'>
                                    <h2 className="mb-4 mt-4 font-bold text-3xl font-caveat">ᴀ ᴘᴀssɪᴏɴᴀᴛᴇ ᴡᴇʙ ᴅᴇᴠᴇʟᴏᴘᴇʀ</h2>
                                    <Image src={img} alt="img" className="w-20 flex items-center justify-center"/> 
                                </section>
                                <p className='text-2xl font-bold text-center font-caveat mb-3'>ɪ ᴇɴᴊᴏʏ:</p> 
                                <section className='flex flex-row items-center mb-3'>
                                    <Image src={sakura} alt="logo" className="w-12 mr-3 flex items-center justify-center"/> 
                                    <p className='text-xl font-bold font-caveat'> 𝙱𝚞𝚒𝚕𝚍𝚒𝚗𝚐 𝚍𝚢𝚗𝚊𝚖𝚒𝚌 𝚊𝚗𝚍 𝚛𝚎𝚜𝚙𝚘𝚗𝚜𝚒𝚟𝚎 𝚠𝚎𝚋 𝚊𝚙𝚙𝚕𝚒𝚌𝚊𝚝𝚒𝚘𝚗𝚜;</p>
                                </section>
                                <section className='flex flex-row justify-start items-center'>
                                    <Image src={sakura} alt="logo" className="w-12 mr-3 flex items-center justify-center"/> 
                                    <p className='text-xl font-bold font-caveat mt-3'>𝙰𝚗𝚍 𝚌𝚘𝚗𝚜𝚝𝚊𝚗𝚝𝚕𝚢 𝚌𝚑𝚊𝚕𝚕𝚎𝚗𝚐𝚎 𝚖𝚢𝚜𝚎𝚕𝚏 𝚝𝚘 𝚕𝚎𝚊𝚛𝚗 𝚗𝚎𝚠 𝚜𝚔𝚒𝚕𝚕𝚜.</p>
                                </section>
                                <p className='text-xl font-bold font-caveat mt-3'>𝚂𝚔𝚒𝚕𝚕𝚜 𝚒𝚗𝚌𝚕𝚞𝚍𝚎: <TextAnimation/></p>
                            </section>
                        </div>
                    </div>
                    {isModalOpen && <ContactModal isOpen={isModalOpen} onClose={closeModal} />}
                </div>
            </div>

            <div className="mobile-layout hidden flex flex-col min-h-screen">
                <div className="mobile-bg flex-1 bg-cover" style={{ backgroundImage: `url(${mobileBg.src})`, backgroundPosition: 'left', backgroundRepeat: 'repeat-y' }}>
                    <NavBaR/>
                    <div className="mobile-content p-5 relative flex flex-col flex-1">
                        <HomeNav openModal={openModal} isModalOpen={isModalOpen} closeModal={closeModal} />
                        <div className='flex flex-col justify-around'>
                            <section className='relative mb-0 flex justify-center'>
                                <Image src={pp} alt="logo" className="flex items-center justify-center mb-8  w-64"/> 
                            </section>
                            <section className='div-style-mobile'>
                                <H1Animation/> 
                                <section className='flex flex-row justify-center items-center'>
                                    <h2 className="mb-4 mt-4 mr-2 font-bold text-l font-caveat text-center">ᴀ ᴘᴀssɪᴏɴᴀᴛᴇ ᴡᴇʙ ᴅᴇᴠᴇʟᴏᴘᴇʀ</h2>
                                    <Image src={img} alt="logo" className="w-12 flex items-center justify-center mr-3"/> 
                                </section>
                                <p className='text-2xl font-bold text-center font-caveat mb-3'>ɪ ᴇɴᴊᴏʏ:</p> 
                                <section className='flex flex-row items-center mb-3'>
                                    <Image src={sakura} alt="logo" className="w-10 mr-3 flex items-center justify-center"/> 
                                    <p className='text-m font-bold font-caveat'> 𝙱𝚞𝚒𝚕𝚍𝚒𝚗𝚐 𝚍𝚢𝚗𝚊𝚖𝚒𝚌 𝚊𝚗𝚍 𝚛𝚎𝚜𝚙𝚘𝚗𝚜𝚒𝚟𝚎 𝚠𝚎𝚋 𝚊𝚙𝚙𝚕𝚒𝚌𝚊𝚝𝚒𝚘𝚗𝚜;</p>
                                </section>
                                <section className='flex flex-row justify-start items-center'>
                                    <Image src={sakura} alt="logo" className="w-10 mr-3 flex items-center justify-center"/> 
                                    <p className='text-m font-bold font-caveat mt-3'>𝙰𝚗𝚍 𝚌𝚘𝚗𝚜𝚝𝚊𝚗𝚝𝚕𝚢 𝚌𝚑𝚊𝚕𝚕𝚎𝚗𝚐𝚎 𝚖𝚢𝚜𝚎𝚕𝚏 𝚝𝚘 𝚕𝚎𝚊𝚛𝚗 𝚗𝚎𝚠 𝚜𝚔𝚒𝚕𝚕𝚜.</p>
                                </section>
                                <p className='text-5 font-bold font-caveat mt-3'>𝚂𝚔𝚒𝚕𝚕𝚜 𝚒𝚗𝚌𝚕𝚞𝚍𝚎: <TextAnimation/></p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @media (max-width: 768px) {
                    .desktop-layout {
                        display: none;
                    }
                    .mobile-layout {
                        display: flex;
                    }
                }
                @media (min-width: 769px) {
                    .mobile-layout {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
}
