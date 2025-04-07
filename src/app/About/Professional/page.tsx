    "use client";

    import { useRouter } from "next/navigation";
    import { FaArrowLeft } from "react-icons/fa";
    import Image from 'next/image';

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
        <section className="w-full h-full flex flex-col">

            <div className="flex flex-row items-center justify-start gap-6 mt-[-1rem] ml-14">
            <button
                onClick={() => router.push("/About")}
                className="flex items-center gap-2 text-fuchsia-950 hover:text-fuchsia-950/45 transition font-indie"
            >
                <FaArrowLeft size={15} />
                <span className="text-m font-semibold">Back</span>
            </button>
            <h2 className="text-3xl ml-44 mt-[1.2rem] font-indie text-fuchsia-950 ">Professional Journey</h2>
            </div>


            <div className="flex flex-row w-full h-full mt-3">

            <div className="w-2/3 relative flex flex-col items-center ml-[-8vh] h-[450px]  mr-14 overflow-y-auto scrollbar-custom-professional">
                {/* Timeline Container */}
                <div className="relative w-2/3 h-full ml-28 mx-10">
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
                        <div className="absolute w-5 h-5 rounded-full bg-fuchsia-900 dark:bg-fuchsia-950 z-10 left-[50.5%] -translate-x-1/2"></div>

                        {/* Timeline Card */}
                        <div
                        className={`rounded-xl text-fuchsia-950 bg-fuchsia-950/10 transition p-4 md:w-[65%] md:h-[210px] text-sm 
                        ${index % 2 === 0 ? "md:mr-auto md:ml-[-100px]" : "md:ml-auto md:mr-[-100px]"}`}
                        >
                        <div className="flex items-center gap-2 text-lg font-semibold font-indie text-fuchsia-950">
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

                        <p className="text-lg font-semibold font-indie">
                            {item.title}
                        </p>
                        <p className="text-m font-semibold mb-1 font-indie">
                            At: {item.where}
                        </p>
                        <p className="text-m font-indie text-black">
                            - {item.description}
                        </p>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>

 
            <div className="w-[30rem] mb-[8vh] ml-[0px] flex flex-col gap-5 p-3 mr-12 justify-end cursor-pointer">
                {/* Favorite Techs */}
                <div className="border-fuchsia-950 rounded-xl bg-fuchsia-950/45 hover:bg-fuchsia-950/10 hover:text-fuchsia-950 text-white  p-6 shadow-lg">
                <h3 className="text-lg font-indie mb-4 font-semibold">
                    Favorite Techs
                </h3>
                <div className="flex flex-wrap gap-3">
                    <section className="flex flex-row gap-5 flex-wrap justify-center items-center">
                    {favoriteTechsIcons.map((icon, index) => (
                        <Image
                        key={index}
                        className="hover:scale-125 transition-transform"
                        width={35}
                        height={35}
                        src={icon.src}
                        alt={icon.alt}
                        title={icon.title}
                        />
                    ))}
                    </section>
                </div>
                </div>

                {/* Recent Techs */}
                <div className="border-fuchsia-950 rounded-xl bg-fuchsia-950/45 hover:bg-fuchsia-950/10 hover:text-fuchsia-950 text-white  p-6 shadow-lg">
                <h3 className="text-lg font-indie mb-4 font-semibold">
                    Recent Techs
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {recentTechsIcons.map((icon, index) => (
                    <Image
                        key={index}
                        className="hover:scale-125 transition-transform"
                        width={30}
                        height={30}
                        src={icon.src}
                        alt={icon.alt}
                        title={icon.name}
                    />
                    ))}
                </div>
                </div>

                {/* Next Techs */}
                <div className="border-fuchsia-950 rounded-xl bg-fuchsia-950/45 hover:bg-fuchsia-950/10 hover:text-fuchsia-950 text-white  p-6 shadow-lg">
                <h3 className="text-lg font-indie mb-4 font-semibold">
                    Next Techs
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {nextTechsIcons.map((icon, index) => (
                    <Image
                        key={index}
                        className="hover:scale-125 transition-transform"
                        width={30}
                        height={30}
                        src={icon.src}
                        alt={icon.alt}
                    />
                    ))}
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    );
    }
