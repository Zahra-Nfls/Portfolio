
    "use client";
    import Image from 'next/image';
    import Link from 'next/link';
    import motto from "../../../public/images/mottoNew.png";
    import { useState } from 'react';

    export default function AboutPage() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
        className="flex h-full w-full flex-col md:flex-row justify-center transition-all duration-300"
        style={{
            filter: isOpen ? "blur(6px)" : "none",
        }}
        >
        {/* Left Side - Motto */}
        <div className="md:w-1/2 p-2 flex-col-reverse md:flex-col mt-2 flex justify-center items-center mb-2 md:mb-0">
            <Image
            src={motto}
            alt="motto"
            className="md:w-[330px] w-[200px]"
            />
            <section className='flex flex-col justify-center'>
                <p className='md:mt-5 mt-[-1rem] text-bold text-center md:text-xl  text-fuchsia-950 font-semibold '>
                    My Life Philosophy:
                </p>
                <p className='mx-20 mt-3 text-xs md:text-lg text-center mb-3 md:mb-0'>
                    "The Japanese art of fixing broken pottery with gold. 
                    <br/>It teaches us to embrace our flaws and missteps in life. We can heal, grow stronger, and make our lives more beautiful."
                </p>
            </section>
        </div>

    
        <div className="md:w-1/2 flex flex-col justify-center text-xs md:p-5 md:ml-[-5rem] md:mr-10 ">
        <section className='mx-20 md:mx-0'>
            <p className="md:text-lg font-indie text-center">
            My journey began with strategy and numbers: clear, structured, logical.
            </p>
            <p className="md:text-lg font-indie text-center">
            But creativity and code brought new energy and meaning.
            </p>
            <p className="md:text-lg font-indie text-center">
            Now I’m building my own rhythm where everything I’ve learned comes together.
            </p>
        </section>

            {/* Navigation Buttons */}
            <section className="flex flex-row justify-center gap-6 text-xs md:text-sm">
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
