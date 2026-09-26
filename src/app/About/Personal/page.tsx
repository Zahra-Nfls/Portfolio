// // "use client";
// // import React, { useState } from "react";
// // import { nationalities, movies, books, singers, countries, languages } from "../../Data/Data";
// // import Image from 'next/image';
// // import AnimatedText from '../../Components/AnimatedText';
// // import { useRouter } from "next/navigation";
// // import { FaArrowLeft } from "react-icons/fa";

// // type Item = {
// //   id: number;
// //   name?: string;
// //   title?: string;
// //   description: string;
// //   image?: string;
// //   cityUrl?: string;
// // };

// // export default function PersonalAbout() {
// //   const [selectedItem, setSelectedItem] = useState<Item | null>(null);
// //   const [isOpen, setIsOpen] = useState(false);

// //   const openModal = (item: Item) => {
// //     setSelectedItem(item);
// //     setIsOpen(true);
// //   };

// //   const closeModal = () => {
// //     setSelectedItem(null);
// //     setIsOpen(false);
// //   };

// //   const router = useRouter();

// //   return (
// //     <div className="w-full h-auto md:h-full flex flex-col scrollbar-custom-professional">
// //       <div className="flex flex-col justify-center md:justify-start md:gap-6 mt-[-0.5rem]  ml-[2rem] md:ml-14 md:mt-[-2rem]">
// //             <button
// //                 onClick={() => router.push("/About")}
// //                 className="mt-[-2rem] flex items-center gap-2 text-fuchsia-950 hover:text-fuchsia-950/45 transition font-indie md:mt-0"
// //             >
// //                 <FaArrowLeft size={15} />
// //                 <span className="md:text-lg text-xs font-semibold">Back</span>
// //             </button>
            
// //             <section className="flex justify-center items-center md:ml-[-5rem] md:mb-0">
// //                   <AnimatedText
// //           text="About Me..."
// //           className="font-indie text-fuchsia-950 text-xl md:text-3xl font-bold text-center md:mt-[-2rem] mb-2 md:mb-0 ml-0 md:ml-7"
// //         />
// //             </section>

// //             </div>
  
// //         <div className="relative md:flex-wrap text-lg font-dm h-full flex flex-col max-h-[2rem] p-3 overflow-y-auto w-full ">
// //           <div className="relative grid grid-cols-1 md:grid-cols-2 gap-7 w-full mb-5 place-items-center px-10">
// //             <div className="border-fuchsia-950 rounded-xl bg-fuchsia-950/10 w-96 md:w-[37rem] h-full p-5 shadow-lg mx-5 md:mx-0">
// //               <div className="flex items-center gap-2 mb-4">
// //                 <h2 className="text-sm md:text-lg font-semibold font-indie">My Nationalities</h2>
// //                 <Image src="/images/passport (1).png" alt="Nationalities" width={35} height={35} />
// //               </div>
// //               <ul className="font-indie pl-5 space-y-2 text-xs md:text-base">
// //                 {nationalities.map((nation) => (
// //                   <li key={nation.id}>
// //                     <a
// //                       href={nation.cityUrl}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       className="text-fuchsia-950 hover:underline font-bold"
// //                     >
// //                       {nation.name}
// //                     </a>
// //                     : {nation.description}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
  
// //             {/* Favorite Categories */}
// //             <Category title="Favorite Movies" data={movies} openModal={openModal} imageUrl="/images/movie.png" />
// //             <Category title="Favorite Books" data={books} openModal={openModal} imageUrl="/images/book.png" />
// //             <Category title="Favorite Singers" data={singers} openModal={openModal} imageUrl="/images/karaoke.png" />
// //             <Category title="Favorite Countries" data={countries} openModal={openModal} imageUrl="/images/travel-and-tourism.png" />
// //             <Category title="Favorite Languages" data={languages} openModal={openModal} imageUrl="/images/language (1).png" />
// //           </div>
// //         </div>
      
  
// //       {isOpen && (
// //         <div
// //           className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[6px] font-indie shadow-xl "
// //           onClick={closeModal}
// //         >
// //           <div
// //             className="modal p-6 rounded-xl max-w-lg w-full relative border border-fuchsia-950 shadow-xl mx-10"
// //             onClick={(e) => e.stopPropagation()}
// //           >
// //             <div className="flex flex-col items-center">
// //               <h2 className="text-3xl text-white font-semibold font-indie mt-4 mb-4 text-center">
// //                 {selectedItem?.name || selectedItem?.title}
// //               </h2>
  
// //               {selectedItem?.image && (
// //                 <img
// //                   src={selectedItem.image}
// //                   alt={selectedItem.name || selectedItem.title}
// //                   className="h-52 rounded-lg shadow-md mb-4"
// //                 />
// //               )}
  
// //               <p className="text-center mb-4 mx-5">{selectedItem?.description}</p>
  
// //               {selectedItem?.cityUrl && (
// //                 <a
// //                   href={selectedItem.cityUrl}
// //                   target="_blank"
// //                   className="hover:text-blue-500 underline mb-4 text-right"
// //                 >
// //                   Discover
// //                 </a>
// //               )}
// //             </div>
  
// //             <section className="flex items-end justify-end">
// //               <button
// //                 onClick={closeModal}
// //                 className="rounded-full px-4 py-2 bg-fuchsia-950/50 text-white font-semibold hover:bg-fuchsia-950/80 transition-all"
// //               >
// //                 Close
// //               </button>
// //             </section>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
  
// //   // 📌 Reusable Category Component
// //   function Category({
// //     title,
// //     data,
// //     openModal,
// //     imageUrl,
// //   }: {
// //     title: string;
// //     data: Item[];
// //     openModal: (item: Item) => void;
// //     imageUrl: string;
// //   }) {
// //       return (
// //           <div className="border-fuchsia-950 rounded-xl bg-fuchsia-950/10 p-4 shadow-lg w-96 md:w-[37rem] h-full flex flex-col justify-center mx-5 md:mx-10">
// //             <div className="flex items-center">
// //               <p className="text-sm md:text-lg font-semibold font-indie mt-3 mb-2">{title}</p>
// //               <Image className="mb-2 mt-2 ml-2" src={imageUrl} alt={title} width={35} height={35} />
// //             </div>
// //             <ul className="grid col-2 md:grid-cols-2 gap-x-0 gap-y-1 mt-0">
// //               {data.map((item, index) => (
// //                 <li
// //                   key={index}
// //                   className="text-black text-xs md:text-m cursor-pointer relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/images/fleur-de-lis.png')] before:bg-cover before:bg-no-repeat"
// //                   onClick={() => openModal(item)}
// //                 >
// //                   <span className="inline-block px-2 py-1 text-[15px] font-indie rounded-md hover:bg-fuchsia-950/50 hover:text-white transition-all duration-150">
// //                     {item.name || item.title}
// //                   </span>
// //                 </li>
// //         ))}
// //         </ul>
// //       </div>
// //     );
// //   }
  

// // "use client";
// // import React, { useState } from "react";
// // import { nationalities, movies, books, singers, countries, languages } from "../../Data/Data";
// // import Image from 'next/image';
// // import AnimatedText from '../../Components/AnimatedText';
// // import { useRouter } from "next/navigation";
// // import { FaArrowLeft } from "react-icons/fa";

// // type Item = {
// //   id: number;
// //   name?: string;
// //   title?: string;
// //   description: string;
// //   image?: string;
// //   cityUrl?: string;
// // };

// // export default function PersonalAbout() {
// //   const [selectedItem, setSelectedItem] = useState<Item | null>(null);
// //   const router = useRouter();

// //   const openModal = (item: Item) => setSelectedItem(item);
// //   const closeModal = () => setSelectedItem(null);

// //   return (
// //     <div className="w-full h-auto md:h-full flex flex-col scrollbar-custom-professional relative">
      
// //       <div className="flex flex-col justify-center md:justify-start md:gap-6 mt-[-0.5rem] ml-[2rem] md:ml-14 md:mt-[-2rem]">
// //         <button
// //           onClick={() => router.push("/About")}
// //           className="mt-[-2rem] flex items-center gap-2 text-fuchsia-950 hover:text-fuchsia-950/45 transition font-indie md:mt-0"
// //         >
// //           <FaArrowLeft size={15} />
// //           <span className="md:text-lg text-xs font-semibold">Back</span>
// //         </button>

// //         <section className="flex justify-center items-center md:ml-[-5rem] md:mb-0">
// //           <AnimatedText
// //             text="About Me..."
// //             className="font-indie text-fuchsia-950 text-xl md:text-3xl font-bold text-center md:mt-[-2rem] mb-2 md:mb-0 ml-0 md:ml-7"
// //           />
// //         </section>
// //       </div>

// //       {/* Content Grid */}
// //        <div className={`transition-all duration-300 ${selectedItem ? 'blur-sm' : ''}`}>
// //       <div className="relative md:flex-wrap text-lg font-dm h-full flex flex-col max-h-[28rem] p-3 overflow-y-auto w-full">
// //         <div className="relative grid grid-cols-1 md:grid-cols-2 gap-7 w-full mb-5 place-items-center px-10">
// //           {/* Nationalities Card */}
// //           <div className="border-fuchsia-950 rounded-xl bg-fuchsia-950/10 w-96 md:w-[37rem] h-full p-5 shadow-lg mx-5 md:mx-0">
// //             <div className="flex items-center gap-2 mb-4">
// //               <h2 className="text-sm md:text-lg font-semibold font-indie">My Nationalities</h2>
// //               <Image src="/images/passport (1).png" alt="Nationalities" width={35} height={35} />
// //             </div>
// //             <ul className="font-indie pl-5 space-y-2 text-xs md:text-base">
// //               {nationalities.map((nation) => (
// //                 <li key={nation.id}>
// //                   <a
// //                     href={nation.cityUrl}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="text-fuchsia-950 hover:underline font-bold"
// //                   >
// //                     {nation.name}
// //                   </a>
// //                   : {nation.description}
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Other Categories */}
// //           <Category title="Favorite Movies" data={movies} openModal={openModal} imageUrl="/images/movie.png" />
// //           <Category title="Favorite Books" data={books} openModal={openModal} imageUrl="/images/book.png" />
// //           <Category title="Favorite Singers" data={singers} openModal={openModal} imageUrl="/images/karaoke.png" />
// //           <Category title="Favorite Countries" data={countries} openModal={openModal} imageUrl="/images/travel-and-tourism.png" />
// //           <Category title="Favorite Languages" data={languages} openModal={openModal} imageUrl="/images/language (1).png" />
// //         </div>
// //       </div>

// //       {/* Modal Overlay */}
// //       {selectedItem && (
// //         <div
// //           className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[6px] bg-black/30 font-indie shadow-xl"
// //           onClick={closeModal}
// //         >
// //           <div
// //             className="modal p-6 rounded-xl max-w-lg w-full relative border border-fuchsia-950 shadow-xl bg-white mx-5"
// //             onClick={(e) => e.stopPropagation()}
// //           >
// //             <div className="flex flex-col items-center">
// //               <h2 className="text-3xl text-white font-semibold font-indie mt-4 mb-4 text-center">
// //                 {selectedItem.name || selectedItem.title}
// //               </h2>

// //               {selectedItem.image && (
// //                 <img
// //                   src={selectedItem.image}
// //                   alt={selectedItem.name || selectedItem.title}
// //                   className="h-52 rounded-lg shadow-md mb-4 object-cover"
// //                 />
// //               )}

// //               <p className="text-center mb-4 mx-5 text-sm md:text-base text-white">{selectedItem.description}</p>

// //               {selectedItem.cityUrl && (
// //                 <a
// //                   href={selectedItem.cityUrl}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="text-fuchsia-700 hover:text-fuchsia-500 underline mb-4 text-right"
// //                 >
// //                   Discover
// //                 </a>
// //               )}
// //             </div>

// //             <div className="flex justify-end">
// //               <button
// //                 onClick={closeModal}
// //                 className="rounded-full px-4 py-2 bg-fuchsia-950/70 text-white font-semibold hover:bg-fuchsia-950 transition-all"
// //               >
// //                 Close
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //     </div>
// //   );
// // }

// // // ✅ Reusable Category Component
// // function Category({
// //   title,
// //   data,
// //   openModal,
// //   imageUrl,
// // }: {
// //   title: string;
// //   data: Item[];
// //   openModal: (item: Item) => void;
// //   imageUrl: string;
// // }) {
// //   return (
// //     <div className="border-fuchsia-950 rounded-xl bg-fuchsia-950/10 p-4 shadow-lg w-96 md:w-[37rem] h-full flex flex-col justify-center mx-5 md:mx-10">
// //       <div className="flex items-center">
// //         <p className="text-sm md:text-lg font-semibold font-indie mt-3 mb-2">{title}</p>
// //         <Image className="mb-2 mt-2 ml-2" src={imageUrl} alt={title} width={35} height={35} />
// //       </div>
// //       <ul className="grid col-2 md:grid-cols-2 gap-x-0 gap-y-1 mt-0">
// //         {data.map((item, index) => (
// //           <li
// //             key={index}
// //             className="text-black text-xs md:text-m cursor-pointer relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/images/fleur-de-lis.png')] before:bg-cover before:bg-no-repeat"
// //             onClick={() => openModal(item)}
// //           >
// //             <span className="inline-block px-2 py-1 text-[15px] font-indie rounded-md hover:bg-fuchsia-950/50 hover:text-white transition-all duration-150">
// //               {item.name || item.title}
// //             </span>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }


// "use client";
// import React, { useState } from "react";
// import { nationalities, movies, books, singers, countries, languages } from "../../Data/Data";
// import Image from "next/image";
// import AnimatedText from "../../Components/AnimatedText";
// import { useRouter } from "next/navigation";
// import { FaArrowLeft } from "react-icons/fa";

// type Item = {
//   id: number;
//   name?: string;
//   title?: string;
//   description: string;
//   image?: string;
//   cityUrl?: string;
// };

// export default function PersonalAbout() {
//   const [selectedItem, setSelectedItem] = useState<Item | null>(null);
//   const router = useRouter();

//   const openModal = (item: Item) => setSelectedItem(item);
//   const closeModal = () => setSelectedItem(null);

//   return (
//     <div className="w-full h-auto md:h-full flex flex-col scrollbar-custom-professional relative">
//       {/* Navbar / Header - NOT blurred */}
//       <div className="flex flex-col justify-center md:justify-start md:gap-6 ml-[2rem] md:ml-14 md:mt-[-1rem] mt-12 z-30 relative">
//         <button
//           onClick={() => router.push("/About")}
//           className="mt-[-2rem] flex items-center gap-2 text-fuchsia-950 hover:text-fuchsia-950/45 transition font-indie md:mt-0"
//         >
//           <FaArrowLeft size={15} />
//           <span className="md:text-lg text-xs font-semibold">Back</span>
//         </button>

//         <section className="flex justify-center items-center md:ml-[-5rem] ml-[-2rem] md:mb-0">
//           <AnimatedText
//             text="About Me..."
//             className="font-indie text-fuchsia-950 text-xl md:text-3xl font-bold text-center md:mt-[-2rem] mb-3 md:mb-0 ml-0 md:ml-7"
//           />
//         </section>
//       </div>

//       {/* Content and Modal Wrapper */}
//       <div className={`transition-all duration-300 flex-1 ${selectedItem ? "blur-sm" : ""}`}>
//         <div className="relative md:flex-wrap text-lg font-dm h-full flex flex-col lg:max-h-[28rem] p-3 overflow-y-auto w-full">
//           <div className="relative grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-5 w-full mb-5 place-items-center px-10">
//             {/* Nationalities Card */}
//             <div className="border-fuchsia-950 rounded-xl bg-fuchsia-950/10 w-80 md:w-[37rem] h-full p-5 shadow-lg mx-5 md:mx-0">
//               <div className="flex items-center gap-2 mb-4 ">
//                 <h2 className="text-sm md:text-lg font-semibold font-indie">My Nationalities</h2>
//                 <Image src="/images/passport (1).png" alt="Nationalities" width={35} height={35} />
//               </div>
//               <ul className="font-indie pl-5 space-y-2 text-xs md:text-base">
//                 {nationalities.map((nation) => (
//                   <li key={nation.id}>
//                     <a
//                       href={nation.cityUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-fuchsia-950 hover:underline font-bold"
//                     >
//                       {nation.name}
//                     </a>
//                     : {nation.description}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Other Categories */}
//             <Category title="Favorite Movies" data={movies} openModal={openModal} imageUrl="/images/movie.png" />
//             <Category title="Favorite Countries" data={countries} openModal={openModal} imageUrl="/images/travel-and-tourism.png" />
//             <Category title="Favorite Languages" data={languages} openModal={openModal} imageUrl="/images/language (1).png" />
//             <Category title="Favorite Books" data={books} openModal={openModal} imageUrl="/images/book.png" />
//             <Category title="Favorite Singers" data={singers} openModal={openModal} imageUrl="/images/karaoke.png" />
//           </div>
//         </div>
//       </div>

//       {/* Modal Overlay */}
//       {selectedItem && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[6px] bg-black/30 font-indie shadow-xl"
//           onClick={closeModal}
//         >
//           <div
//             className="modal p-6 rounded-xl max-w-lg w-80 md:w-full relative border border-fuchsia-950 shadow-xl bg-white mx-5"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex flex-col items-center">
//               <h2 className="text-3xl text-white font-semibold font-indie mt-4 mb-4 text-center">
//                 {selectedItem.name || selectedItem.title}
//               </h2>

//               {selectedItem.image && (
//                 <img
//                   src={selectedItem.image}
//                   alt={selectedItem.name || selectedItem.title}
//                   className="h-52 rounded-lg shadow-md mb-4 object-cover"
//                 />
//               )}

//               <p className="text-center mb-4 mx-5 text-sm md:text-base text-black">{selectedItem.description}</p>

//               {selectedItem.cityUrl && (
//                 <a
//                   href={selectedItem.cityUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-fuchsia-700 hover:text-fuchsia-500 underline mb-4 text-right"
//                 >
//                   Discover
//                 </a>
//               )}
//             </div>

//             <div className="flex justify-end">
//               <button
//                 onClick={closeModal}
//                 className="rounded-full px-4 py-2 bg-fuchsia-950/70 text-white font-semibold hover:bg-fuchsia-950 transition-all"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // Reusable Category Component
// function Category({
//   title,
//   data,
//   openModal,
//   imageUrl,
// }: {
//   title: string;
//   data: Item[];
//   openModal: (item: Item) => void;
//   imageUrl: string;
// }) {
//   return (
//     <div className="border-fuchsia-950 rounded-xl bg-fuchsia-950/10 p-4 shadow-lg w-80 md:w-[37rem] h-full flex flex-col justify-center mx-5 md:mx-10">
//       <div className="flex items-center mx-10">
//         <p className="text-sm md:text-lg font-semibold font-indie mt-3 mb-2 ml-[-2rem]">{title}</p>
//         <Image className="mb-2 mt-2 ml-2" src={imageUrl} alt={title} width={35} height={35} />
//       </div>
//       <ul className="grid col-2 md:grid-cols-2 gap-x-0 gap-y-1 mt-0">
//         {data.map((item, index) => (
//           <li
//             key={index}
//             className="text-black text-xs md:text-m cursor-pointer relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/images/fleur-de-lis.png')] before:bg-cover before:bg-no-repeat"
//             onClick={() => openModal(item)}
//           >
//             <span className="inline-block px-2 py-1 text-xs md:text-[15px] font-indie rounded-md hover:bg-fuchsia-950/50 hover:text-white transition-all duration-150">
//               {item.name || item.title}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaChevronDown, FaTimes } from "react-icons/fa";
import AnimatedText from "../../Components/AnimatedText";
import {
  nationalities,
  movies,
  books,
  singers,
  countries,
  languages,

  // Import your 3 missing arrays here.
  // hobbies,
  // foods,
  // series,
} from "../../Data/Data";

type Item = {
  id: number;
  name?: string;
  title?: string;
  description: string;
  image?: string;
  cityUrl?: string;
};

type Section = {
  id: string;
  title: string;
  icon: string;
  items: Item[];
};

const sections: Section[] = [
  {
    id: "nationalities",
    title: "My Nationalities",
    icon: "/images/passport (1).png",
    items: nationalities,
  },
  {
    id: "movies",
    title: "Favorite Movies",
    icon: "/images/movie.png",
    items: movies,
  },
  {
    id: "books",
    title: "Favorite Books",
    icon: "/images/book.png",
    items: books,
  },
  {
    id: "singers",
    title: "Favorite Singers",
    icon: "/images/karaoke.png",
    items: singers,
  },
  {
    id: "countries",
    title: "Favorite Countries",
    icon: "/images/travel-and-tourism.png",
    items: countries,
  },
  {
    id: "languages",
    title: "Favorite Languages",
    icon: "/images/language (1).png",
    items: languages,
  },
];

export default function PersonalAbout() {
  const router = useRouter();
  const [expandedId, setExpandedId] = useState<string>(sections[0].id);

  const expandedSection =
    sections.find((section) => section.id === expandedId) ?? sections[0];

  return (
    <main
      style={
        {
          /*
            Space reserved for the global navigation + footer.
            Change only this value if your layout needs a little more
            or less room.
          */
          "--about-page-offset": "7.25rem",
        } as React.CSSProperties
      }
      className="
        relative flex min-h-0 w-full flex-col overflow-hidden
        h-[calc(100svh-var(--about-page-offset))]
        supports-[height:100dvh]:h-[calc(100dvh-var(--about-page-offset))]
      "
    >
      {/* Compact header */}
      <header className="relative z-20 shrink-0 px-5 pt-2 md:px-10 md:pt-3">
        <button
          type="button"
          onClick={() => router.push("/About")}
          className="
            flex items-center gap-2 font-indie text-xs font-semibold
            text-fuchsia-950 transition hover:opacity-55 md:text-sm
          "
        >
          <FaArrowLeft size={13} />
          <span>Back</span>
        </button>

        <div className="-mt-3 flex justify-center md:-mt-4">
          <AnimatedText
            text="About Me..."
            className="
              text-center font-indie text-lg font-bold
              text-fuchsia-950 md:text-2xl
            "
          />
        </div>
      </header>

      <section
        className="
          grid min-h-0 flex-1 gap-4 overflow-hidden
          px-5 pb-2 pt-1
          md:grid-cols-[minmax(0,1fr)_minmax(250px,31%)]
          md:px-10 md:pb-3
          xl:grid-cols-[minmax(0,1fr)_minmax(320px,29%)]
        "
      >
        {/* LEFT: 6 larger selector cards in a 3 × 2 grid + expanded content */}
        <div
          className="
            grid min-h-0 overflow-hidden
            grid-rows-[auto_minmax(0,1fr)]
            gap-3
          "
        >
          {/* Six larger selector cards: 3 columns × 2 rows */}
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {sections.map((section) => {
              const isActive = section.id === expandedId;

              return (
                <button
                  key={section.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setExpandedId(section.id)}
                  className={`
                    group flex h-12 min-w-0 items-center justify-between
                    rounded-lg border px-3 shadow-sm
                    transition duration-150
                    focus:outline-none focus-visible:ring-2
                    focus-visible:ring-fuchsia-950/40
                    md:h-14 md:px-4
                    ${
                      isActive
                        ? "border-fuchsia-950/25 bg-fuchsia-950/20"
                        : "border-fuchsia-950/10 bg-fuchsia-950/8 hover:bg-fuchsia-950/15"
                    }
                  `}
                >
                  <span className="flex min-w-0 items-center gap-1.5">
                    <span className="relative h-5 w-5 shrink-0 md:h-6 md:w-6">
                      <Image
                        src={section.icon}
                        alt=""
                        fill
                        sizes="24px"
                        className="object-contain"
                      />
                    </span>

                    <span
                      className="
                        truncate font-indie text-[11px] font-semibold
                        leading-none text-fuchsia-950
                        sm:text-xs md:text-sm xl:text-base
                      "
                    >
                      {section.title}
                    </span>
                  </span>

                  <FaChevronDown
                    size={10}
                    className={`
                      shrink-0 text-fuchsia-950 transition-transform
                      ${isActive ? "rotate-180" : ""}
                    `}
                  />
                </button>
              );
            })}
          </div>

          {/* Expanded content always stays inside the remaining viewport */}
          <article
            className="
              grid min-h-0 max-h-[calc(100%-0.5rem)] self-start
              overflow-hidden
              grid-rows-[auto_minmax(0,1fr)]
              rounded-2xl border border-fuchsia-950/15
              bg-fuchsia-950/[0.07] shadow-md backdrop-blur-sm
            "
          >
            <header
              className="
                flex shrink-0 items-center justify-between
                border-b border-fuchsia-950/10
                px-4 py-2 md:px-5
              "
            >
              <div className="flex min-w-0 items-center gap-2">
                <span className="relative h-5 w-5 shrink-0 md:h-6 md:w-6">
                  <Image
                    src={expandedSection.icon}
                    alt=""
                    fill
                    sizes="24px"
                    className="object-contain"
                  />
                </span>

                <h2
                  className="
                    truncate font-indie text-sm font-bold
                    text-fuchsia-950 md:text-base xl:text-lg
                  "
                >
                  {expandedSection.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setExpandedId(sections[0].id)}
                aria-label="Reset section"
                className="
                  rounded-full p-1 text-fuchsia-950
                  transition hover:bg-fuchsia-950/10
                "
              >
                <FaTimes size={12} />
              </button>
            </header>

            <div className="min-h-0 overflow-hidden px-4 py-2.5 md:px-5 md:py-3">
              {expandedSection.items.length > 0 ? (
                <ul
                  className="
                    grid h-full min-h-0 content-center
                    grid-cols-2 gap-x-4 gap-y-1
                    lg:grid-cols-3
                    xl:gap-x-5
                  "
                >
                  {expandedSection.items.map((item) => (
                    <li
                      key={item.id}
                      className="
                        relative min-w-0 pl-3.5
                        font-indie text-[9px] leading-[1.2]
                        text-black
                        before:absolute before:left-0 before:top-[0.25em]
                        before:h-2 before:w-2
                        before:bg-[url('/images/fleur-de-lis.png')]
                        before:bg-contain before:bg-center
                        before:bg-no-repeat
                        sm:text-[10px] md:text-xs xl:text-[13px]
                      "
                    >
                      {item.cityUrl ? (
                        <a
                          href={item.cityUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            font-semibold text-fuchsia-950
                            hover:underline
                          "
                        >
                          {item.name || item.title}
                        </a>
                      ) : (
                        <span className="font-semibold text-fuchsia-950">
                          {item.name || item.title}
                        </span>
                      )}

                      {item.description && (
                        <span className="ml-1 text-black/70">
                          — {item.description}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="flex h-full items-center justify-center">
                  <p className="font-indie text-xs text-fuchsia-950/45">
                    Add this section&apos;s real data.
                  </p>
                </div>
              )}
            </div>
          </article>
        </div>

        {/* RIGHT IMAGE */}
        <aside
          className="
            relative hidden min-h-0 overflow-hidden
            rounded-[1.5rem] border border-fuchsia-950/10
            shadow-lg md:block
          "
        >
          <Image
            src="/images/about-karma.png"
            alt="Karma"
            fill
            priority
            sizes="(max-width: 1279px) 31vw, 29vw"
            className="object-cover object-top"
          />
        </aside>
      </section>
    </main>
  );
}