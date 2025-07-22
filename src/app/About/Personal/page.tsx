// "use client";
// import React, { useState } from "react";
// import { nationalities, movies, books, singers, countries, languages } from "../../Data/Data";
// import Image from 'next/image';
// import AnimatedText from '../../Components/AnimatedText';
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
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = (item: Item) => {
//     setSelectedItem(item);
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedItem(null);
//     setIsOpen(false);
//   };

//   const router = useRouter();

//   return (
//     <div className="w-full h-auto md:h-full flex flex-col scrollbar-custom-professional">
//       <div className="flex flex-col justify-center md:justify-start md:gap-6 mt-[-0.5rem]  ml-[2rem] md:ml-14 md:mt-[-2rem]">
//             <button
//                 onClick={() => router.push("/About")}
//                 className="mt-[-2rem] flex items-center gap-2 text-fuchsia-950 hover:text-fuchsia-950/45 transition font-indie md:mt-0"
//             >
//                 <FaArrowLeft size={15} />
//                 <span className="md:text-lg text-xs font-semibold">Back</span>
//             </button>
            
//             <section className="flex justify-center items-center md:ml-[-5rem] md:mb-0">
//                   <AnimatedText
//           text="About Me..."
//           className="font-indie text-fuchsia-950 text-xl md:text-3xl font-bold text-center md:mt-[-2rem] mb-2 md:mb-0 ml-0 md:ml-7"
//         />
//             </section>

//             </div>
  
//         <div className="relative md:flex-wrap text-lg font-dm h-full flex flex-col max-h-[2rem] p-3 overflow-y-auto w-full ">
//           <div className="relative grid grid-cols-1 md:grid-cols-2 gap-7 w-full mb-5 place-items-center px-10">
//             <div className="border-fuchsia-950 rounded-xl bg-fuchsia-950/10 w-96 md:w-[37rem] h-full p-5 shadow-lg mx-5 md:mx-0">
//               <div className="flex items-center gap-2 mb-4">
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
  
//             {/* Favorite Categories */}
//             <Category title="Favorite Movies" data={movies} openModal={openModal} imageUrl="/images/movie.png" />
//             <Category title="Favorite Books" data={books} openModal={openModal} imageUrl="/images/book.png" />
//             <Category title="Favorite Singers" data={singers} openModal={openModal} imageUrl="/images/karaoke.png" />
//             <Category title="Favorite Countries" data={countries} openModal={openModal} imageUrl="/images/travel-and-tourism.png" />
//             <Category title="Favorite Languages" data={languages} openModal={openModal} imageUrl="/images/language (1).png" />
//           </div>
//         </div>
      
  
//       {isOpen && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[6px] font-indie shadow-xl "
//           onClick={closeModal}
//         >
//           <div
//             className="modal p-6 rounded-xl max-w-lg w-full relative border border-fuchsia-950 shadow-xl mx-10"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex flex-col items-center">
//               <h2 className="text-3xl text-white font-semibold font-indie mt-4 mb-4 text-center">
//                 {selectedItem?.name || selectedItem?.title}
//               </h2>
  
//               {selectedItem?.image && (
//                 <img
//                   src={selectedItem.image}
//                   alt={selectedItem.name || selectedItem.title}
//                   className="h-52 rounded-lg shadow-md mb-4"
//                 />
//               )}
  
//               <p className="text-center mb-4 mx-5">{selectedItem?.description}</p>
  
//               {selectedItem?.cityUrl && (
//                 <a
//                   href={selectedItem.cityUrl}
//                   target="_blank"
//                   className="hover:text-blue-500 underline mb-4 text-right"
//                 >
//                   Discover
//                 </a>
//               )}
//             </div>
  
//             <section className="flex items-end justify-end">
//               <button
//                 onClick={closeModal}
//                 className="rounded-full px-4 py-2 bg-fuchsia-950/50 text-white font-semibold hover:bg-fuchsia-950/80 transition-all"
//               >
//                 Close
//               </button>
//             </section>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
  
//   // 📌 Reusable Category Component
//   function Category({
//     title,
//     data,
//     openModal,
//     imageUrl,
//   }: {
//     title: string;
//     data: Item[];
//     openModal: (item: Item) => void;
//     imageUrl: string;
//   }) {
//       return (
//           <div className="border-fuchsia-950 rounded-xl bg-fuchsia-950/10 p-4 shadow-lg w-96 md:w-[37rem] h-full flex flex-col justify-center mx-5 md:mx-10">
//             <div className="flex items-center">
//               <p className="text-sm md:text-lg font-semibold font-indie mt-3 mb-2">{title}</p>
//               <Image className="mb-2 mt-2 ml-2" src={imageUrl} alt={title} width={35} height={35} />
//             </div>
//             <ul className="grid col-2 md:grid-cols-2 gap-x-0 gap-y-1 mt-0">
//               {data.map((item, index) => (
//                 <li
//                   key={index}
//                   className="text-black text-xs md:text-m cursor-pointer relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/images/fleur-de-lis.png')] before:bg-cover before:bg-no-repeat"
//                   onClick={() => openModal(item)}
//                 >
//                   <span className="inline-block px-2 py-1 text-[15px] font-indie rounded-md hover:bg-fuchsia-950/50 hover:text-white transition-all duration-150">
//                     {item.name || item.title}
//                   </span>
//                 </li>
//         ))}
//         </ul>
//       </div>
//     );
//   }
  

// "use client";
// import React, { useState } from "react";
// import { nationalities, movies, books, singers, countries, languages } from "../../Data/Data";
// import Image from 'next/image';
// import AnimatedText from '../../Components/AnimatedText';
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
      
//       <div className="flex flex-col justify-center md:justify-start md:gap-6 mt-[-0.5rem] ml-[2rem] md:ml-14 md:mt-[-2rem]">
//         <button
//           onClick={() => router.push("/About")}
//           className="mt-[-2rem] flex items-center gap-2 text-fuchsia-950 hover:text-fuchsia-950/45 transition font-indie md:mt-0"
//         >
//           <FaArrowLeft size={15} />
//           <span className="md:text-lg text-xs font-semibold">Back</span>
//         </button>

//         <section className="flex justify-center items-center md:ml-[-5rem] md:mb-0">
//           <AnimatedText
//             text="About Me..."
//             className="font-indie text-fuchsia-950 text-xl md:text-3xl font-bold text-center md:mt-[-2rem] mb-2 md:mb-0 ml-0 md:ml-7"
//           />
//         </section>
//       </div>

//       {/* Content Grid */}
//        <div className={`transition-all duration-300 ${selectedItem ? 'blur-sm' : ''}`}>
//       <div className="relative md:flex-wrap text-lg font-dm h-full flex flex-col max-h-[28rem] p-3 overflow-y-auto w-full">
//         <div className="relative grid grid-cols-1 md:grid-cols-2 gap-7 w-full mb-5 place-items-center px-10">
//           {/* Nationalities Card */}
//           <div className="border-fuchsia-950 rounded-xl bg-fuchsia-950/10 w-96 md:w-[37rem] h-full p-5 shadow-lg mx-5 md:mx-0">
//             <div className="flex items-center gap-2 mb-4">
//               <h2 className="text-sm md:text-lg font-semibold font-indie">My Nationalities</h2>
//               <Image src="/images/passport (1).png" alt="Nationalities" width={35} height={35} />
//             </div>
//             <ul className="font-indie pl-5 space-y-2 text-xs md:text-base">
//               {nationalities.map((nation) => (
//                 <li key={nation.id}>
//                   <a
//                     href={nation.cityUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-fuchsia-950 hover:underline font-bold"
//                   >
//                     {nation.name}
//                   </a>
//                   : {nation.description}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Other Categories */}
//           <Category title="Favorite Movies" data={movies} openModal={openModal} imageUrl="/images/movie.png" />
//           <Category title="Favorite Books" data={books} openModal={openModal} imageUrl="/images/book.png" />
//           <Category title="Favorite Singers" data={singers} openModal={openModal} imageUrl="/images/karaoke.png" />
//           <Category title="Favorite Countries" data={countries} openModal={openModal} imageUrl="/images/travel-and-tourism.png" />
//           <Category title="Favorite Languages" data={languages} openModal={openModal} imageUrl="/images/language (1).png" />
//         </div>
//       </div>

//       {/* Modal Overlay */}
//       {selectedItem && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[6px] bg-black/30 font-indie shadow-xl"
//           onClick={closeModal}
//         >
//           <div
//             className="modal p-6 rounded-xl max-w-lg w-full relative border border-fuchsia-950 shadow-xl bg-white mx-5"
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

//               <p className="text-center mb-4 mx-5 text-sm md:text-base text-white">{selectedItem.description}</p>

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
//     </div>
//   );
// }

// // ✅ Reusable Category Component
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
//     <div className="border-fuchsia-950 rounded-xl bg-fuchsia-950/10 p-4 shadow-lg w-96 md:w-[37rem] h-full flex flex-col justify-center mx-5 md:mx-10">
//       <div className="flex items-center">
//         <p className="text-sm md:text-lg font-semibold font-indie mt-3 mb-2">{title}</p>
//         <Image className="mb-2 mt-2 ml-2" src={imageUrl} alt={title} width={35} height={35} />
//       </div>
//       <ul className="grid col-2 md:grid-cols-2 gap-x-0 gap-y-1 mt-0">
//         {data.map((item, index) => (
//           <li
//             key={index}
//             className="text-black text-xs md:text-m cursor-pointer relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/images/fleur-de-lis.png')] before:bg-cover before:bg-no-repeat"
//             onClick={() => openModal(item)}
//           >
//             <span className="inline-block px-2 py-1 text-[15px] font-indie rounded-md hover:bg-fuchsia-950/50 hover:text-white transition-all duration-150">
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
import { nationalities, movies, books, singers, countries, languages } from "../../Data/Data";
import Image from "next/image";
import AnimatedText from "../../Components/AnimatedText";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

type Item = {
  id: number;
  name?: string;
  title?: string;
  description: string;
  image?: string;
  cityUrl?: string;
};

export default function PersonalAbout() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const router = useRouter();

  const openModal = (item: Item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return (
    <div className="w-full h-auto md:h-full flex flex-col scrollbar-custom-professional relative">
      {/* Navbar / Header - NOT blurred */}
      <div className="flex flex-col justify-center md:justify-start md:gap-6 ml-[2rem] md:ml-14 md:mt-[-1rem] mt-12 z-30 relative">
        <button
          onClick={() => router.push("/About")}
          className="mt-[-2rem] flex items-center gap-2 text-fuchsia-950 hover:text-fuchsia-950/45 transition font-indie md:mt-0"
        >
          <FaArrowLeft size={15} />
          <span className="md:text-lg text-xs font-semibold">Back</span>
        </button>

        <section className="flex justify-center items-center md:ml-[-5rem] ml-[-2rem] md:mb-0">
          <AnimatedText
            text="About Me..."
            className="font-indie text-fuchsia-950 text-xl md:text-3xl font-bold text-center md:mt-[-2rem] mb-3 md:mb-0 ml-0 md:ml-7"
          />
        </section>
      </div>

      {/* Content and Modal Wrapper */}
      <div className={`transition-all duration-300 flex-1 ${selectedItem ? "blur-sm" : ""}`}>
        <div className="relative md:flex-wrap text-lg font-dm h-full flex flex-col md:max-h-[28rem] p-3 overflow-y-auto w-full">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5 w-full mb-5 place-items-center px-10">
            {/* Nationalities Card */}
            <div className="border-fuchsia-950 rounded-xl bg-fuchsia-950/10 w-80 md:w-[37rem] h-full p-5 shadow-lg mx-5 md:mx-0">
              <div className="flex items-center gap-2 mb-4 ">
                <h2 className="text-sm md:text-lg font-semibold font-indie">My Nationalities</h2>
                <Image src="/images/passport (1).png" alt="Nationalities" width={35} height={35} />
              </div>
              <ul className="font-indie pl-5 space-y-2 text-xs md:text-base">
                {nationalities.map((nation) => (
                  <li key={nation.id}>
                    <a
                      href={nation.cityUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-fuchsia-950 hover:underline font-bold"
                    >
                      {nation.name}
                    </a>
                    : {nation.description}
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Categories */}
            <Category title="Favorite Movies" data={movies} openModal={openModal} imageUrl="/images/movie.png" />
            <Category title="Favorite Countries" data={countries} openModal={openModal} imageUrl="/images/travel-and-tourism.png" />
            <Category title="Favorite Languages" data={languages} openModal={openModal} imageUrl="/images/language (1).png" />
            <Category title="Favorite Books" data={books} openModal={openModal} imageUrl="/images/book.png" />
            <Category title="Favorite Singers" data={singers} openModal={openModal} imageUrl="/images/karaoke.png" />
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[6px] bg-black/30 font-indie shadow-xl"
          onClick={closeModal}
        >
          <div
            className="modal p-6 rounded-xl max-w-lg w-80 md:w-full relative border border-fuchsia-950 shadow-xl bg-white mx-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center">
              <h2 className="text-3xl text-white font-semibold font-indie mt-4 mb-4 text-center">
                {selectedItem.name || selectedItem.title}
              </h2>

              {selectedItem.image && (
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name || selectedItem.title}
                  className="h-52 rounded-lg shadow-md mb-4 object-cover"
                />
              )}

              <p className="text-center mb-4 mx-5 text-sm md:text-base text-black">{selectedItem.description}</p>

              {selectedItem.cityUrl && (
                <a
                  href={selectedItem.cityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fuchsia-700 hover:text-fuchsia-500 underline mb-4 text-right"
                >
                  Discover
                </a>
              )}
            </div>

            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="rounded-full px-4 py-2 bg-fuchsia-950/70 text-white font-semibold hover:bg-fuchsia-950 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Reusable Category Component
function Category({
  title,
  data,
  openModal,
  imageUrl,
}: {
  title: string;
  data: Item[];
  openModal: (item: Item) => void;
  imageUrl: string;
}) {
  return (
    <div className="border-fuchsia-950 rounded-xl bg-fuchsia-950/10 p-4 shadow-lg w-80 md:w-[37rem] h-full flex flex-col justify-center mx-5 md:mx-10">
      <div className="flex items-center mx-10">
        <p className="text-sm md:text-lg font-semibold font-indie mt-3 mb-2 ml-[-2rem]">{title}</p>
        <Image className="mb-2 mt-2 ml-2" src={imageUrl} alt={title} width={35} height={35} />
      </div>
      <ul className="grid col-2 md:grid-cols-2 gap-x-0 gap-y-1 mt-0">
        {data.map((item, index) => (
          <li
            key={index}
            className="text-black text-xs md:text-m cursor-pointer relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/images/fleur-de-lis.png')] before:bg-cover before:bg-no-repeat"
            onClick={() => openModal(item)}
          >
            <span className="inline-block px-2 py-1 text-xs md:text-[15px] font-indie rounded-md hover:bg-fuchsia-950/50 hover:text-white transition-all duration-150">
              {item.name || item.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
