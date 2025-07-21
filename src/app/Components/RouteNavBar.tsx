    "use client";

    import Link from "next/link";
    import Image from "next/image";
    import logo from "./../../../public/images/LogoPortfolio.png";
    import { useState } from "react";
    import about from "../../../public/images/about.png";
    import skills from "../../../public/images/skills.png";
    import contact from "../../../public/images/email (2).png";
    import home from "../../../public/images/home (2).png";
    import projects from "../../../public/images/projects (2).png";
    import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
    import { usePathname } from "next/navigation";
    import homeW from "../../../public/images/homeW.png";
    import aboutW from "../../../public/images/aboutW.png";
    import skillsW from "../../../public/images/skillsW.png";
    import projectsW from "../../../public/images/projectsW.png";
    import contactW from "../../../public/images/contactW.png";

    type RouteNavBarProps = {
    isOpen: boolean;
    toggleMenu: () => void;
    };

    export default function RouteNavBar({ isOpen, toggleMenu }: RouteNavBarProps) {
    const pathname = usePathname();
    const [hovered, setHovered] = useState<string | null>(null);

    const navItems = [
        { href: "/", label: "Home", icon: home, iconW: homeW },
        { href: "/About", label: "About", icon: about, iconW: aboutW },
        { href: "/Skills", label: "Skills", icon: skills, iconW: skillsW },
        { href: "/Project", label: "Projects", icon: projects, iconW: projectsW },
        { href: "/Contact", label: "Contact", icon: contact, iconW: contactW },
    ];

    const isAboutRoute = pathname.startsWith("/About");

    return (
        <header className="w-full px-4 mt-5 md:mt-0">
        <div className="md:flex text-xs flex flex-row justify-between items-center md:mt-3 md:mb-2 md:ml-5">
            <Image src={logo} alt="logo" className="md:w-48  w-36 priority" />

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden md:flex md:flex-row md:items-center mr-8 text-fuchsia-950 font-dm text-sm">
            <ul className="flex flex-row items-center gap-2">
                {navItems.map((item) => {
                const isActive =
                    pathname === item.href || (isAboutRoute && item.href === "/About");
                const isHoveredOrActive = hovered === item.href || isActive;

                return (
                    <Link href={item.href} className="flex items-center gap-2">
                    <li
                    key={item.href}
                    onMouseEnter={() => setHovered(item.href)}
                    onMouseLeave={() => setHovered(null)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 
                        ${isActive ? "border-b-2 border-fuchsia-700/45" : ""}
                        ${isHoveredOrActive ? "bg-fuchsia-950/45 text-white" : "text-fuchsia-950"}
                    `}
                    >
                        <Image
                        src={isHoveredOrActive ? item.iconW : item.icon}
                        alt={item.label}
                        className="w-5 h-5"
                        />
                        <p className="font-indie">{item.label}</p>
                    </li>
                    </Link>
                );
                })}
            </ul>
            </nav>

            {/* MOBILE TOGGLE BUTTON */}
            <button
            onClick={toggleMenu}
            className="md:hidden text-black focus:outline-none mr-2"
            aria-label="Toggle menu"
            >
            {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
            ) : (
                <Bars3Icon className="w-6 h-6" />
            )}
            </button>

            {/* MOBILE MENU */}
            <div
            className={`md:hidden fixed top-0 text-center right-0 w-64 bg h-full z-50 ${
                isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out`}
            >
            <div className="flex justify-end p-4">
                <button
                onClick={toggleMenu}
                className="text-fuchsia-950 hover:bg-fuchsia-950/45 rounded"
                >
                <XMarkIcon className="w-5 h-5" />
                </button>
            </div>
            <ul className="flex flex-col p-4 text-fuchsia-950 font-indie text-sm">
                {navItems.map((item) => {
                const isActive =
                    pathname === item.href || (isAboutRoute && item.href === "/About");
                return (
                    <li
                    key={item.href}
                    className={`my-4 p-2 rounded-2xl text-center transition-all duration-200 
                        ${isActive ? "bg-fuchsia-950/45 text-white" : "hover:bg-fuchsia-950/45 hover:text-white"}
                    `}
                    >
                    <Link href={item.href} onClick={toggleMenu}>
                        {item.label}
                    </Link>
                    </li>
                );
                })}
            </ul>
            </div>
        </div>
        </header>
    );
    }
