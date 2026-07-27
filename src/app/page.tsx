// "use client";

// import { useState, useEffect, useRef } from 'react';
// import HomeNav from './Components/HomeNav'; 
// import TextAnimation from './Components/TextAnimation';
// import pp from './../../public/images/pp10.png';
// import floral from './../../public/images/fleur-de-lis.png';
// import AnimatedText from './Components/AnimatedText';
// import NavBaR from './Components/NavBar';
// import Image from 'next/image';
// import HomeFooter from './Components/HomeFooter';
// import download from './../../public/images/direct-download.png'; 
// import translation from './../../public/images/translation (1).png'; 

// export default function Home() {
//     const [isOpen, setIsOpen] = useState(false);
//     const toggleMenu = () => setIsOpen(!isOpen);
//     const menuRef = useRef<HTMLDivElement>(null);

//     // Close menu when clicking outside
//     useEffect(() => {
//         function handleClickOutside(event: MouseEvent) {
//             if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//                 setIsOpen(false);
//             }
//         }

//         if (isOpen) {
//             document.addEventListener("mousedown", handleClickOutside);
//         } else {
//             document.removeEventListener("mousedown", handleClickOutside);
//         }

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [isOpen]);

//     return (
//         <div 
//             className="flex flex-col bg-cover w-full h-screen md:min-h-screen justify-between relative overflow-hidden cursor-pointer"
//             style={{ backgroundImage: "url('/images/BG (4).png')" }}
//         >
//             {/* Black Overlay */}
//             {isOpen && <div className="fixed inset-0 bg-black/30 z-10" />}

//             {/* Navigation */}
//             <div className="relative z-20" ref={menuRef}>
//                 <NavBaR isOpen={isOpen} toggleMenu={toggleMenu} />
//                 <div className="absolute top-0 right-0">
//                     <HomeNav />
//                 </div>
//             </div>

//             {/* Main Content with Blur */}
//             <div
//                 className="relative z-10 flex-grow transition-all duration-300 ease-in-out"
//                 style={{ filter: isOpen ? 'blur(8px)' : 'none' }}
//             >
//                 {/* Introduction Section */}
//                 <section className="text-center px-4 ">
//                     <h1 className="mt-10 md:mt-0 text-xl md:text-3xl font-indie">HEY THERE!</h1>
//                     <p className='text-lg md:text-2xl md:mb-2'>I am 𝐙𝐚𝐡𝐫𝐚 カルマ(𝐊𝐚𝐫𝐦𝐚)</p>
//                     <AnimatedText 
//                         text="A Junior Full-Stack Web Developer!" 
//                         className="font-yeseva text-fuchsia-950 text-lg md:text-3xl  font-bold md:mt-2 md:mb-5 text-center transition-all duration-300 ease-in-out" 
//                     />
//                 </section>

//                 {/* Main Content */}
//                 <div className="flex flex-row justify-end items-center gap-5 md:gap-10 px-1 md:px-0 mt-[-6rem] md:mt-[-3rem] w-full md:w-3/4 mx-auto h-full md:mb-[-1rem]">
//                     <Image 
//                         src={pp} 
//                         alt="Profile Picture" 
//                         className="w-44 md:w-[400px] md:ml-[-20rem] md:mt-[-8rem]" 
//                     />
//                     <section className="ml-[-1.5rem] mt-20 mr:2 md:mt-0 md:w-2/3 p-4 md:p-5 md:ml-14 flex justify-end flex-col">
//                         <p className="text-m md:text-2xl md:text-left mb-5 font-indie text-fuchsia-950 font-semibold">What I’m Passionate About:</p>
                        
//                         <div className="flex items-start mb-2">
//                             <Image src={floral} alt="icon" className="w-5 md:w-6 mr-2" />
//                             <p className="text-xs md:text-lg font-indie">
//                                 Creating dynamic and responsive web applications;
//                             </p>
//                         </div>
                        
//                         <div className="flex items-start mb-4">
//                             <Image src={floral} alt="icon" className="w-5 md:w-6 mr-2"/>
//                             <p className="text-xs md:text-lg font-indie">
//                                 Challenging myself to continuously learn and improve my skills;
//                             </p>
//                         </div>
                        
//                         <div className="flex items-start mb-4">
//                             <Image src={floral} alt="icon" className="w-5 md:w-6 mr-2"/>
//                             <p className="text-xs md:text-lg font-indie">
//                                 Exploring and applying new technologies;
//                             </p>
//                         </div>
                        
//                         <div className="flex items-start mb-4">
//                             <Image src={floral} alt="icon" className="w-5 md:w-6 mr-2"/>
//                             <p className="text-xs md:text-lg font-indie">
//                                 Building projects that matter and solve real problems;
//                             </p>
//                         </div>
                        
//                         <div className="flex items-start mb-4">
//                             <Image src={floral} alt="icon" className="w-5 md:w-6 mr-2"/>
//                             <p className="text-xs md:text-lg font-indie">
//                                 Turning raw ideas into interactive digital experiences;
//                             </p>
//                         </div>

//                         <div className="flex items-start mb-4">
//                             <Image src={floral} alt="icon" className="w-5 md:w-6 mr-2"/>
//                             <p className="text-xs md:text-lg font-indie">
//                                 My Expertise include: <TextAnimation />
//                             </p>
//                         </div>

//                         <div className="flex justify-center md:justify-end mt-5 md:mt-0 gap-3">
//                             <a href="/𝚉𝚊𝚑𝚛𝚊'𝚜 𝙲𝚟 .pdf" target="_blank" rel="noopener noreferrer">
//                                 <button className="flex items-center gap-2 border-2 border-fuchsia-950 font-indie rounded-xl text-xs sm:text-xs md:text-sm text-fuchsia-950 px-3 py-3 mb-10 bg-fuchsia-950/10 transition duration-300 ease-in-out hover:bg-fuchsia-950/45 hover:text-white">
//                                     <Image src={download} alt="download" className="w-4 sm:w-5 h-4 sm:h-5" />
//                                     My Resume
//                                 </button>
//                             </a>
//                             <a href="https://multilingual-cv.vercel.app/" target="_blank" rel="noopener noreferrer">
//                                 <button className="flex items-center gap-2 border-2 border-fuchsia-950 font-indie rounded-xl text-xs sm:text-xs md:text-sm text-fuchsia-950 px-3 py-3 mb-10 bg-fuchsia-950/10 transition duration-300 ease-in-out hover:bg-fuchsia-950/45 hover:text-white">
//                                     <Image src={translation} alt="download" className="w-4 sm:w-5 h-4 sm:h-5" />
//                                     Multilingual Resume
//                                 </button>
//                             </a>
//                         </div>
//                     </section>
//                 </div>
//             </div>

//             <HomeFooter />
//         </div>
//     );
// }


        'use client';

        import { useEffect, useRef, useState } from 'react';
        import Image from 'next/image';

        import HomeNav from './Components/HomeNav';
        import TextAnimation from './Components/TextAnimation';
        import AnimatedText from './Components/AnimatedText';
        import NavBaR from './Components/NavBar';
        import HomeFooter from './Components/HomeFooter';

        import pp from './../../public/images/pp10.png';
        import floral from './../../public/images/fleur-de-lis.png';
        import download from './../../public/images/direct-download.png';
        import translation from './../../public/images/translation (1).png';
        import lotusImage from './../../public/images/lotus-image.png';
        // import divider from './../../public/images/divider.png';

        export default function Home() {
        const [isOpen, setIsOpen] = useState(false);
        const menuRef = useRef<HTMLDivElement>(null);

        const toggleMenu = () => {
            setIsOpen((previousState) => !previousState);
        };

        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
            };

            if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            }

            return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [isOpen]);

        return (
            <div
            className="
                relative
                flex
                min-h-dvh
                w-full
                flex-col
                overflow-x-hidden
                overflow-y-auto
                bg-cover
                bg-center
                bg-no-repeat
                text-fuchsia-950

                lg:h-dvh
                lg:overflow-hidden
            "
            style={{
                backgroundImage: "url('/images/BG (4).png')",
            }}
            >
            {isOpen && (
                <div
                aria-hidden="true"
                className="fixed inset-0 z-10 bg-black/30"
                />
            )}

            <div
                ref={menuRef}
                className="relative z-20 shrink-0"
            >
                <NavBaR
                isOpen={isOpen}
                toggleMenu={toggleMenu}
                />

                <div className="absolute right-0 top-0">
                <HomeNav />
                </div>
            </div>

            <main
                className={`
                relative
                z-0
                flex
                min-h-0
                flex-1
                flex-col

                lg:overflow-hidden
                transition-all
                duration-300
                ease-in-out
                ${isOpen ? 'blur-md' : 'blur-none'}
                `}
            >
                <section
                className="
                    mx-auto
                    w-full
                    shrink-0
                    px-3
                    pb-0
                    pt-1
                    text-center
                    sm:px-4
                    md:pb-2
                "
                >
                <h1
                    className="
                    font-indie
                    text-lg
                    leading-tight
                    sm:text-xl
                    md:text-2xl
                    lg:text-3xl
                    "
                >
                    HEY THERE!
                </h1>

                <p
                    className="
                    mt-0.5
                    text-sm
                    leading-tight
                    sm:text-base
                    md:text-lg
                    lg:text-xl
                    "
                >
                    I am{' '}
                    <strong>
                    Zahra カルマ (Karma)
                    </strong>
                </p>

                <AnimatedText
                    text="A Junior Full-Stack Web Developer!"
                    className="
                    mt-0.5
                    text-center
                    font-yeseva
                    text-base
                    font-bold
                    leading-tight
                    text-fuchsia-950
                    transition-all
                    duration-300
                    ease-in-out
                    sm:text-lg
                    md:text-xl
                    lg:text-2xl
                    "
                />
                </section>

                <section
                className="
                    mx-auto
                    grid
                    min-h-0
                    w-full
                    max-w-7xl
                    flex-none

                    -mt-1
                    lg:mt-0
                    lg:flex-1
                    grid-cols-[minmax(120px,35%)_minmax(0,1fr)]
                    items-start
                    gap-2
                    px-2
                    pb-1

                    md:items-center
                    sm:grid-cols-[minmax(150px,36%)_minmax(0,1fr)]
                    sm:gap-4
                    sm:px-4
                    md:grid-cols-[minmax(300px,42%)_minmax(0,1fr)]
                    md:gap-6
                    md:px-6
                    lg:grid-cols-[minmax(420px,44%)_minmax(0,1fr)]
                    lg:gap-8
                "
                >
                <div
                    className="
                    relative
                    flex
                    h-full
                    min-h-[330px]
                    items-end
                    justify-center
                    overflow-visible
                    translate-x-4

                    sm:min-h-[410px]
                    sm:translate-x-6

                    md:min-h-0
                    md:translate-x-8
                    md:items-end
                    md:justify-start

                    lg:translate-x-10
                    xl:translate-x-12
                    "
                >
                    {/* Lotus behind the portrait */}
                    <Image
                    src={lotusImage}
                    alt=""
                    aria-hidden="true"
                    priority
                    className="
                        pointer-events-none
                        absolute
                        bottom-[12%]
                        left-[42%]
                        z-0
                        h-auto
                        w-[145%]
                        max-w-[560px]
                        -translate-x-1/2
                        object-contain
                        opacity-40

                        sm:bottom-[8%]
                        sm:left-[40%]
                        sm:w-[150%]
                        sm:max-w-[650px]

                        md:bottom-[4%]
                        md:left-[35%]
                        md:w-[152%]
                        md:max-w-none
                        md:opacity-38

                        lg:bottom-[2%]
                        lg:left-[31%]
                        lg:w-[150%]

                        xl:left-[29%]
                        xl:w-[148%]
                    "
                    />

                    {/* Girl in front of the lotus */}
                    <Image
                    src={pp}
                    alt="Portrait of Zahra"
                    priority
                    className="
                        relative
                        z-10
                        h-auto
                        max-h-[58dvh]
                        w-auto
                        max-w-[360px]
                        object-contain
                        object-bottom

                        sm:max-h-[64dvh]
                        sm:max-w-[430px]

                        md:ml-[1.25rem]
                        md:max-h-[72dvh]
                        md:max-w-none

                        lg:ml-[3rem]
                        lg:max-h-[78dvh]

                        xl:ml-[3.5rem]
                        xl:max-h-[81dvh]
                    "
                    />
                </div>

                <section
                    className="
                    flex
                    min-h-0
                    min-w-0
                    flex-col
                    justify-start
                    rounded-xl

                    md:justify-center
                    bg-white/10
                    p-2
                    backdrop-blur-[1px]
                    sm:p-3
                    md:bg-transparent
                    md:p-0
                    md:backdrop-blur-none
                    "
                >
                    <h2
                    className="
                    mt-5
                        mb-0
                        font-indie
                        text-sm
                        font-semibold
                        leading-tight
                        sm:text-base
                        md:text-lg
                        lg:text-xl
                    "
                    >
                    What I’m Passionate About:
                    </h2>

                    {/* <Image
                    src={divider}
                    alt=""
                    aria-hidden="true"
                    className="
                        mx-auto
                        mb-1
                        mt-0
                        h-auto
                        w-20
                        object-contain

                        sm:w-24
                        md:mx-0
                        md:w-28
                        lg:w-32
                    "
                    /> */}

                    <div
                    className="
                        space-y-1
                        sm:space-y-1.5
                        md:space-y-2
                    "
                    >
                    <PassionItem>
                        Creating dynamic and responsive web applications;
                    </PassionItem>

                    <PassionItem>
                        Challenging myself to continuously learn and improve my skills;
                    </PassionItem>

                    <PassionItem>
                        Exploring and applying new technologies;
                    </PassionItem>

                    <PassionItem>
                        Building projects that matter and solve real problems;
                    </PassionItem>

                    <PassionItem>
                        Turning raw ideas into interactive digital experiences;
                    </PassionItem>

                    <div className="flex min-w-0 items-start">
                        <Image
                        src={floral}
                        alt=""
                        aria-hidden="true"
                        className="
                            me-1.5
                            mt-0.5
                            h-auto
                            w-4
                            shrink-0
                            md:w-5
                        "
                        />

                        <div
                        className="
                            min-w-0
                            font-indie
                            text-[10px]
                            leading-tight
                            sm:text-xs
                            md:text-sm
                            lg:text-base
                        "
                        >
                        My expertise includes:{' '}
                        <TextAnimation />
                        </div>
                    </div>
                    </div>

                    <div
                    className="
                        mt-3
                        flex
                        flex-wrap
                        justify-center
                        gap-2
                        md:justify-end
                    "
                    >
                    <a
                        href="/zahra-cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        inline-flex
                        items-center
                        justify-center
                        gap-1.5
                        rounded-lg
                        border-2
                        border-fuchsia-950
                        bg-fuchsia-950/10
                        px-2.5
                        py-1.5
                        font-indie
                        text-[10px]
                        text-fuchsia-950
                        transition
                        duration-300
                        hover:bg-fuchsia-950/45
                        hover:text-white
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-fuchsia-700
                        focus-visible:ring-offset-2
                        sm:text-xs
                        md:px-3
                        md:py-2
                        md:text-sm
                        "
                    >
                        <Image
                        src={download}
                        alt=""
                        aria-hidden="true"
                        className="
                            size-3.5
                            shrink-0
                            md:size-4
                        "
                        />

                        <span>My Resume</span>
                    </a>

                    <a
                        href="https://multilingual-cv.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        inline-flex
                        items-center
                        justify-center
                        gap-1.5
                        rounded-lg
                        border-2
                        border-fuchsia-950
                        bg-fuchsia-950/10
                        px-2.5
                        py-1.5
                        font-indie
                        text-[10px]
                        text-fuchsia-950
                        transition
                        duration-300
                        hover:bg-fuchsia-950/45
                        hover:text-white
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-fuchsia-700
                        focus-visible:ring-offset-2
                        sm:text-xs
                        md:px-3
                        md:py-2
                        md:text-sm
                        "
                    >
                        <Image
                        src={translation}
                        alt=""
                        aria-hidden="true"
                        className="
                            size-3.5
                            shrink-0
                            md:size-4
                        "
                        />

                        <span>Multilingual Resume</span>
                    </a>
                    </div>
                </section>
                </section>
            </main>

            <div className="relative z-0 mt-3 shrink-0 lg:mt-0">
                <HomeFooter />
            </div>
            </div>
        );
        }

        interface PassionItemProps {
        children: React.ReactNode;
        }

        function PassionItem({
        children,
        }: PassionItemProps) {
        return (
            <div className="flex min-w-0 items-start">
            <Image
                src={floral}
                alt=""
                aria-hidden="true"
                className="
                me-1.5
                mt-0.5
                h-auto
                w-4
                shrink-0
                md:w-5
                "
            />

            <p
                className="
                min-w-0
                font-indie
                text-[10px]
                leading-tight
                sm:text-xs
                md:text-sm
                lg:text-base
                "
            >
                {children}
            </p>
            </div>
        );
        }