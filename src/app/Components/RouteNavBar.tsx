    "use client";

    import Link from "next/link";
    import Image from "next/image";
    import logo from "./../../../public/images/logo (3)(1).png";
    import ContactModal from "../Components/ContactModal";
    import { useState } from "react";
    import about from "../../../public/images/about.png";
    import skills from "../../../public/images/skills.png";
    import contact from "../../../public/images/email (2).png";
    import home from "../../../public/images/home (2).png";
    import projects from "../../../public/images/projects (2).png";
    import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

    interface RouteNavBarProps {
    openModal: () => void;
    isModalOpen: boolean;
    closeModal: () => void;
    }

    export default function RouteNavBar({
    openModal,
    isModalOpen,
    closeModal,
    }: RouteNavBarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center p-4 fixed top-0 left-0 right-0 z-50 text-fuchsia-950 hover:bg-purple-800/50">
            <Image src={logo} alt="logo" className="w-24 h-auto" />
            <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? (
                <XMarkIcon className="w-6 h-6 text-transparent" />
            ) : (
                <Bars3Icon className="w-6 h-6" />
            )}
            </button>
        </div>

        {/* Desktop Header */}
        <div className="md:flex text-xs justify-between items-center mt-2 mb-2 ml-5">
            <Image src={logo} alt="logo" className="w-40" />

            <nav className="flex flex-row items-center mr-8 text-fuchsia-950 font-dm text-m">
            <ul className="flex flex-row items-center gap-5">
                <li className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-fuchsia-950/10">
                <Link href="/" className="flex items-center gap-2">
                    <Image src={home} alt="home" className="w-[20px] h-[20px] transition-none" />
                    <p className="font-indie">Home</p>
                </Link>
                </li>
                <li className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-fuchsia-950/10">
                <Link href="/About" className="flex items-center gap-2">
                    <Image src={about} alt="About" className="w-6 h-6 transition-none" />
                    <p className="font-indie">About</p>
                </Link>
                </li>

                <li className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-fuchsia-950/10">
                <Link href="/Skills" className="flex items-center gap-2">
                    <Image src={skills} alt="Skills" className="w-5 h-5 transition-none" />
                    <p className="font-indie">Skills</p>
                </Link>
                </li>

                <li className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-fuchsia-950/10">
                <Link href="/Project" className="flex items-center gap-2">
                    <Image src={projects} alt="Projects" className="w-5 h-5 transition-none" />
                    <p className="font-indie">Projects</p>
                </Link>
                </li>

                <li className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-fuchsia-950/10">
                <Link href="/Contact">
                    <button className="flex items-center gap-2">
                    <Image src={contact} alt="Contact" className="w-5 h-5 transition-none" />
                    <p className="font-indie">Contact</p>
                    </button>
                </Link>
                </li>
            </ul>
            </nav>
        </div>

        {/* Mobile Menu */}
        <div
            className={`md:hidden fixed top-0 right-0 w-64 bg text-fuchsia-950 h-full transition-transform duration-300 ease-in-out transform z-40 ${
            isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-fuchsia-950">
                <XMarkIcon className="w-6 h-6" />
            </button>
            </div>
            <ul className="flex flex-col p-4 font-dm">
            <li className="my-4 hover:bg-fuchsia-500 hover:text-white p-2 rounded text-center">
                <Link href="/" onClick={toggleMenu}>
                Home
                </Link>
            </li>
            <li className="my-4 hover:bg-fuchsia-500 hover:text-white p-2 rounded text-center">
                <Link href="/About" onClick={toggleMenu}>
                About Me
                </Link>
            </li>
            <li className="my-4 hover:bg-fuchsia-500 hover:text-white p-2 rounded text-center">
                <Link href="/Skills" onClick={toggleMenu}>
                Skills
                </Link>
            </li>
            <li className="my-4 hover:bg-fuchsia-500 hover:text-white p-2 rounded text-center">
                <Link href="/Resume" onClick={toggleMenu}>
                Resume
                </Link>
            </li>
            <li className="my-4 hover:bg-fuchsia-500 hover:text-white p-2 rounded text-center">
                <Link href="/Project" onClick={toggleMenu}>
                Projects
                </Link>
            </li>
            <li className="my-4 hover:bg-fuchsia-500 hover:text-white p-2 rounded text-center">
                <button
                onClick={() => {
                    openModal();
                    toggleMenu();
                }}
                className="w-full"
                >
                Contact
                </button>
            </li>
            </ul>
        </div>

        {/* Contact Modal */}
        {isModalOpen && <ContactModal isOpen={isModalOpen} onClose={closeModal} />}
        </>
    );
    }
