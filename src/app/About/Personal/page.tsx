"use client";
import React, { useState, useRef } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@heroui/react";
import { nationalities, movies, books, singers, countries, languages} from "../../Data/Data";
import Image from 'next/image';
import AnimatedText from '../../Components/AnimatedText';
import { useRouter } from "next/navigation";
// import { FaArrowLeft } from "react-icons/fa";



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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const openModal = (item: Item) => {
    setSelectedItem(item);
    onOpen();
  };
  const router = useRouter();

  return (
    <div className="flex flex-col mt-[-3rem]">

      <AnimatedText 
                    text="About Me..." 
                    className="font-indie text-fuchsia-950 ml-10 text-3xl font-bold text-center mb-2" 
                />
    <div className="relative flex-wrap text-lg font-dm h-full flex flex-col max-h-[28rem] p-3 overflow-y-auto mx-12 ">
    
      <div className="relative grid grid-cols-2 md:grid-cols-2 gap-6 w-full mb-5">
      <div className="border-fuchsia-950 rounded-xl bg-fuchsia-950/10 p-5 shadow-lg">
          <div className="flex items-center gap-2 mb-4">


            <h2 className="text-m font-semibold font-indie"> My Nationalities</h2>
            <Image src="/images/passport (1).png" alt="Nationalities" width={35} height={35} />
          </div>
          <ul className="font-indie pl-5 space-y-2 text-black">
            {nationalities.map((nation) => (
              <li key={nation.id}>
                <a
                  href={nation.cityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fuchsia-700 hover:underline font-bold"
                >
                  {nation.name}
                </a>
                : {nation.description}
              </li>
            ))}
          </ul>
        </div>



        <Category title="Favorite Movies" data={movies} openModal={openModal} imageUrl="/images/movie.png" />
        <Category title="Favorite Books" data={books} openModal={openModal} imageUrl="/images/book.png" />
        <Category title="Favorite Singers" data={singers} openModal={openModal} imageUrl="/images/karaoke.png" />
        <Category title="Favorite Countries" data={countries} openModal={openModal} imageUrl="/images/travel-and-tourism.png" />
        <Category title="Favorite Languages" data={languages} openModal={openModal} imageUrl="/images/language (1).png" />



        <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="blur"
      className="fixed inset-0 flex flex-col font-indie z-50 my-16 backdrop-blur-md p-2 shadow-lg"
    >
      <ModalContent className="bg-white p-6 shadow-xl max-w-lg w-full bordered  border-fuchsia-950 rounded-xl bg-fuchsia-950/10 relative">
        {(onClose) => (
          <>
          
          <ModalHeader className="relative text-xl font-semibold font-libre flex justify-center w-full">
            {selectedItem?.name || selectedItem?.title}
          </ModalHeader>


            <ModalBody className="flex flex-col items-center text-center overflow-y-auto scrollbar-custom">
              {selectedItem?.image && (
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name || selectedItem.title}
                  className=" h-52 rounded-lg shadow-md"
                />
              )}
              <p className="mt-0.5">{selectedItem?.description}</p>
              {selectedItem?.cityUrl && (
                <a
                  href={selectedItem.cityUrl}
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  Discover
                </a>
              )}
            </ModalBody>

            {/* Modal Footer */}
            <ModalFooter className="flex justify-end">
              <Button
                color="danger"
                variant="light"
                onPress={onClose}
                className="rounded-full px-4 py-2 bg-fuchsia-500 text-white font-semibold hover:bg-fuchsia-600 transition-all"
              >
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
      </div>
    </div>
    </div>
  );
}

// 📌 Reusable Category Component 
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
    <div className="border-fuchsia-950 rounded-xl bg-fuchsia-950/10 p-4 shadow-lg">
      <div className="flex items-center">
        <p className="text-lg font-semibold font-indie mt-3 mb-2">{title}</p>
        <Image 
        className="mb-2 mt-2 ml-2"
        src={imageUrl} alt={title} width={35} height={35} />
      </div>
      <ul className="grid grid-cols-3 gap-x-0 gap-y-0.5 mt-0">
        {data.map((item, index) => (
      <li
            className="text-black cursor-pointer relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/images/fleur-de-lis.png')] before:bg-cover before:bg-no-repeat hover:bg-fuchsia-950/50 hover:text-white transition-all duration-150 hover:scale-110 rounded-md"
            key={index}
            onClick={() => openModal(item)}
        >
            <span className="text-[15px] font-indie">{item.name || item.title}</span>
        </li>
        ))}
      </ul> 
    </div>
  );
}
