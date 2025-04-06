
                "use client";

                import { useRouter } from "next/navigation";
                // import { FaArrowLeft } from "react-icons/fa";
                import Image from 'next/image';
                
                import { timeline, recentTechsIcons, nextTechsIcons, favoriteTechsIcons} from "../../Data/Data";

                export default function Professional() {
                const router = useRouter();

                return (
                    <section className="w-full h-full flex flex-row">
            <button 
                onClick={() => router.push("/About")}
                className="self-start flex items-center ml-14 gap-2 text-fuchsia-950 hover:text-fuchsia-700 transition mb-6"
            >
                {/* <FaArrowLeft size={15} />
                <span className="text-m font-semibold">Back</span> */}
            </button>

            <div className="w-2/3 mt-8 relative flex flex-col items-center ml-[-5vh] h-[482px] mr-32 overflow-y-auto scrollbar-custom-professional">
                {/* Timeline Header */}
                <h2 className="text-3xl font-indie text-fuchsia-950 flex justify-center mb-5">My Career Path</h2>

                {/* Timeline Container */}
            <div className="relative w-2/3 h-full ml-20">
            {/* Timeline Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-1 h-[1000px] bg-fuchsia-900 dark:bg-fuchsia-950 hidden md:block" style={{ left: "50%" }}></div>

            {/* Timeline Items Container with padding to add margin on the sides */}
            <div className="flex flex-col items-center space-y-4 w-full px-[20px]">
                {/* Timeline Items */}
                {timeline.map((item, index) => (
                    <div
                        key={item.year}
                        className={`relative flex items-center ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"} justify-center`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute w-5 h-5 rounded-full bg-fuchsia-900 dark:bg-fuchsia-950 z-10 left-[50.5%] -translate-x-1/2"></div>

                        {/* Timeline Card */}
                        <div
    className={`rounded-xl text-fuchsia-950 bg-fuchsia-950/10 transition p-4 shadow-lg md:w-[60%] md:h-[200px] text-sm 
        ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"} 
        ${index % 2 === 0 ? "md:ml-[-90px]" : "md:mr-[-90px]"}
    `}
>
    <span className="text-m font-semibold font-indie text-fuchsia-950 flex flex-row items-center gap-2">
    {item.year}
    {item.src && (  
        <a 
            className="flex justify-end"
            key={item.title} 
            href={item.href} 
            target="_blank" 
            rel="noopener noreferrer"
        >
            <Image
                width={25}
                height={25}
                src={item.src}
                alt="Project image"
            />
        </a>
    )}
    </span>
    <p className="text-sm font-semibold font-indie">{item.title}</p>
    <p className="text-m font-semibold mb-1 font-indie">At: {item.where}</p>
    <p className="text-xs font-indie text-black">- {item.description}</p>
    <a href="https://www.linkedin.com/in/zahra-anaflous-dev/" target="_blank" rel="noopener noreferrer">
        <p className="text-xs flex mr-2 mt-1 justify-end font-semibold font-indie text-blue-600/55">
            More Details
        </p>
    </a>
</div>

                    </div>
                ))}
            </div>
        </div>


            </div>

            <div className="w-[30rem] mb-[8vh] ml-[0px] flex flex-col gap-5 p-3 mr-20 justify-end">
        
                <div className="border-fuchsia-950 rounded-xl  bg-fuchsia-950/45 text-white p-6 shadow-lg">
                    <h3 className="text-lg font-indie mb-4 font-semibold">Favorite Techs</h3>
                    <div className="flex flex-wrap gap-3">
                    <section className="flex flex-row gap-5 flex-wrap justify-center items-center">
        {favoriteTechsIcons.map((favoriteTechsIcon, index) => (

            <Image
                className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md"
                width={35}
                height={35}
                src={favoriteTechsIcon.src}
                alt={favoriteTechsIcon.alt}
                title={favoriteTechsIcon.title}
            />

        ))}
        </section>
                    </div>
                </div> 


                <div className="border-fuchsia-950 rounded-xl  bg-fuchsia-950/45 text-white p-6 shadow-lg">
                    <h3 className="text-lg font-indie mb-4 font-semibold">Recent Techs</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                    {recentTechsIcons.map((recentTechsIcon, index) => (
            <Image
                className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md"
                width={30}
                height={30}
                src={recentTechsIcon.src}
                alt={recentTechsIcon.alt}
                title={recentTechsIcon.name}
            />
            
        ))}
                    </div>
                </div>
                <div className="border-fuchsia-950 rounded-xl  bg-fuchsia-950/45 text-white p-6 shadow-lg">
                    <h3 className="text-lg font-indie mb-4 font-semibold">Next Techs</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                    {nextTechsIcons.map((nextTechsIcon, index) => (
            <Image
                className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md"
                width={30}
                height={30}
                src={nextTechsIcon.src}
                alt={nextTechsIcon.alt}
            />

        ))}
                    </div>
                </div>

            </div>
        </section>

                );
                }


