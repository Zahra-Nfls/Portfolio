    "use client";

    import { useRouter } from "next/navigation";
    import { FaArrowLeft } from "react-icons/fa";
    import Image from 'next/image';
import Link from 'next/link';

    import {
    timeline,
    recentTechsIcons,
    nextTechsIcons,
    favoriteTechsIcons,
    } from "../../Data/Data";

    export default function Professional() {
    const router = useRouter();

    return (
        <>
        <section className="w-full h-auto md:h-full flex flex-col scrollbar-custom-professional">

            <div className="flex flex-row items-center justify-center md:justify-start md:gap-6 mt-[-0.5rem] md:mt-[-2.5rem] ml-[-8rem] md:ml-14 mb-5 md:mb-0">
            <button
                onClick={() => router.push("/About")}
                className="flex items-center gap-2 text-fuchsia-950 hover:text-fuchsia-950/45 transition font-indie mb-2 md:mb-0 md:mt-[-0.5rem]"
            >
                <FaArrowLeft size={15} />
                <span className="md:text-lg text-xs font-semibold">Back</span>
            </button>
            <h2 className="md:text-2xl text-lg font-semibold text-center mb-1 mt-9 ml-10 md:ml-44  md:mt-10 font-indie text-fuchsia-950 md:mb-3">Professional Journey</h2>
            </div>


            <div className="flex flex-col md:flex-row w-full h-full">

            <div className="md:w-2/3 relative flex flex-col justify-center items-center md:ml-[-8vh] h-full md:h-[450px] md:mr-14 md:overflow-y-auto ">
                {/* Timeline Container */}
                <div className="relative w-full md:w-2/3 h-full md:ml-28 mx-5 md:mx-10">

                {/* Timeline Line */}
                <div
                    className="absolute left-[50%] top-0 bottom-0 w-1 h-[980px] bg-fuchsia-900 dark:bg-fuchsia-950 hidden md:block"
                    style={{ left: "50%" }}
                ></div>

                {/* Timeline Items */}
                <div className="flex flex-col items-center space-y-4 w-full px-[30px]">
                    {timeline.map((item, index) => (
                    <div
                        key={item.year}
                        className={`relative flex items-center ${
                        index % 2 === 0
                            ? "md:justify-start"
                            : "md:justify-end"
                        } justify-center`}
                    >
                        {/* Timeline Dot */}
                        <div className="hidden md:block absolute w-5 h-5 rounded-full bg-fuchsia-900 dark:bg-fuchsia-950 z-10 left-[50.5%] -translate-x-1/2"></div>


                        {/* Timeline Card */}
                        <div
                        className={`rounded-xl text-fuchsia-950 bg-fuchsia-950/10 transition p-4 md:w-[65%] md:h-auto text-sm mx-5
                        ${index % 2 === 0 ? "md:mr-auto md:ml-[-120px]" : "md:ml-auto md:mr-[-120px]"}`}
                        >
                        <div className="flex items-center gap-2 text-m md:text-lg font-semibold font-indie text-fuchsia-950">
                            {item.year}
                            {item.src && (
                            <div className="tooltip relative">
                                <a
                                className="flex"
                                key={item.title}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <Image
                                    src="/images/repo.png"
                                    alt="Repository"
                                    width={20}
                                    height={20}
                                    className="hover:scale-125 transition-transform"
                                />
                                </a>
                                <span className="tooltiptext absolute bottom-[120%] left-1/2 transform -translate-x-1/2 bg-fuchsia-900 text-white text-xs font-libre rounded py-1 px-2 opacity-0 transition-opacity duration-300">
                                Repositories
                                </span>
                            </div>
                            )}
                        </div>

                        <p className="text-m md:text-lg font-semibold font-indie">
                            {item.title}
                        </p>
                        <p className="text-sm md:text-m font-semibold mb-1 font-indie">
                            At: {item.where}
                        </p>
                        <p className="text-sm md:text-m font-indie text-black">
                            - {item.description}
                        </p>
                        <section className="flex justify-end mt-3 mr-3">
                            <a href={item.href}>
                        <p className="text-sm md:text-m font-indie text-black hover:text-blue-400">
                                More
                            </p>
                            </a>
                        </section>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>


            <div className="md:w-[30rem] h-full ml-[0px] mb-10 md:mb-0 flex flex-col gap-5 p-3 md:mr-12 justify-center items-center md:justify-end cursor-pointer md:mt-[-2rem]">
                <section>
                    <h2 className="text-fuchsia-950 font-semibold md:text-2xl text-lg mt-10 md:mt-0">
                        Technologies:
                    </h2>
                </section>
                <div className="border-fuchsia-950 rounded-xl bg-fuchsia-950/45 hover:bg-fuchsia-950/10 hover:text-fuchsia-950 text-white md:w-full w-80 p-6 shadow-lg ">
                <h3 className="text-lg font-indie mb-4 font-semibold">
                    Favorites:
                </h3>
                <div className="gap-3 flex justify-center">
                    <section className="flex flex-row flex-wrap gap-2 md:gap-5 ">
                    {favoriteTechsIcons.map((icon, index) => (
                        <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
                        <Image
                        key={index}
                        className="hover:scale-125 transition-transform"
                        width={30}
                        height={30}
                        src={icon.src}
                        alt={icon.alt}
                        title={icon.title}
                        />
                        </a>
                    ))}
                    </section>
                </div>
                </div>

                {/* Recent Techs */}
                <div className="border-fuchsia-950 rounded-xl bg-fuchsia-950/45 hover:bg-fuchsia-950/10 hover:text-fuchsia-950 text-white md:w-full w-80 p-6 shadow-lg">
                <h3 className="text-lg font-indie mb-4 font-semibold">
                    Recent:
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {recentTechsIcons.map((icon, index) => (
                    <a
                        key={index}
                        href={icon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                        className="hover:scale-125 transition-transform"
                        width={30}
                        height={30}
                        src={icon.src}
                        alt={icon.alt}
                        title={icon.title} // you can also use icon.name here
                        />
                    </a>
                    ))}
                </div>
                </div>


                {/* Next Techs */}
                <div className="border-fuchsia-950 rounded-xl bg-fuchsia-950/45 hover:bg-fuchsia-950/10 hover:text-fuchsia-950 text-white md:w-full w-80 p-6 shadow-lg">
                <h3 className="text-lg font-indie mb-4 font-semibold">
                    Next:
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {nextTechsIcons.map((icon, index) => (
                        <a
                        key={index}
                        href={icon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <Image
                        key={index}
                        className="hover:scale-125 transition-transform"
                        width={30}
                        height={30}
                        src={icon.src}
                        alt={icon.alt}
                    />
                    </a>
                    ))}
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    );
    }

