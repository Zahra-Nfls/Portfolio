    "use client";
    import { useRouter } from "next/navigation";
    import NavBar from "../Components/RouteNavBar";
    import React from 'react';
    import Image from 'next/image';
    import { useState } from 'react';
    import Link from 'next/link';
    import motto from "../../../public/images/mottoNew.png";



    export default function AboutPage() {
    return (
        <div className="flex h-full w-full">
        {/* Left Side - Motto */}
        <div className="w-1/3 p-2 flex-col mt-4 flex justify-center items-center ml-14 mr-[-50px]">
        <h2  className="font-indie text-fuchsia-950  text-3xl text-dm mb-7 mt-[-2rem]" >
            My Life Motto:

        </h2>
            <Image src={motto} alt="motto" className="w-[400px]  " />
        </div>

        {/* Right Side - Buttons */}
        <div className="w-2/3 flex flex-col justify-center p-5 ml-14">
        {/* <AnimatedText 
                                text="From strategy and numbers to code and creativity, I love pushing boundaries.
                                Excited to bring my diverse skills into the tech world." 
                                className="font-caveat text-fuchsia-950  text-3xl font-bold text-center" 
                            /> */}
            <p className="text-2xl font-indie text-center">
            From strategy and numbers to code and creativity, 
            </p>
            <p className="text-2xl font-indie text-center">
            I love pushing boundaries.
            </p>
            {/* <AnimatedText 
                                text=" Excited to bring my diverse skills into the tech world." 
                                className="font-caveat text-fuchsia-950  text-3xl font-bold text-center" 
                            /> */}
            <p className="text-2xl font-indie text-center">
            Excited to bring my diverse skills into the tech world.
            </p>

            {/* Navigation Buttons */}
            <section className="flex flex-row justify-center gap-6">
            <Link href="/About/Professional">
                <button className="flex items-center gap-2 font-indie border-2 border-fuchsia-950 rounded-xl text-fuchsia-950 p-3 mt-5 bg-fuchsia-950/10 transition duration-300 ease-in-out hover:bg-fuchsia-950/45 hover:text-white">
                Professional About
                </button>
            </Link>

            <Link href="/About/Personal">
                <button className="flex items-center gap-2 font-indie border-2 border-fuchsia-950 rounded-xl text-fuchsia-950 p-3 mt-5 bg-fuchsia-950/10 transition duration-300 ease-in-out hover:bg-fuchsia-950/45 hover:text-white">
                Personal About
                </button>
            </Link>
            </section>
        </div>
        </div>
    );
    }
