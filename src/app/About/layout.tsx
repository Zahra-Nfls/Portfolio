
    "use client";
    import React from "react";
    import RouteNavBar from "../Components/RouteNavBar";
    import HomeFooter from "../Components/HomeFooter";
    import { useState, useEffect, useRef, ReactNode, ReactElement } from 'react';

    export default function AboutLayout({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
        }

        if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        } else {
        document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <div className="relative w-screen min-h-screen overflow-hidden cursor-pointer">
        {/* Background Image */}
        <div
            className={`fixed inset-0 bg-cover bg-center transition-filter duration-300`}
            style={{
            backgroundImage: "url('/images/BG (4).jpg')",
            }}
        />

        {/* Blur Overlay */}
        {isOpen && (
            <div
            className="fixed inset-0 bg-black/30"
            style={{ zIndex: 5 }}
            />
        )}

        {/* Content */}
        <div className="relative z-10 flex flex-col w-screen min-h-screen justify-between">
            {/* Navbar */}
            <div ref={menuRef} className="relative z-20">
            <RouteNavBar isOpen={isOpen} toggleMenu={toggleMenu} />
            </div>

            {/* Children with blur */}
            <main
            className="flex-grow flex items-center justify-center transition-all duration-300"
            style={{
                filter: isOpen ? "blur(6px)" : "none",
            }}
            >
            {React.cloneElement(children as ReactElement, { isOpen })}
            </main>

            {/* Footer */}
            <HomeFooter />
        </div>
        </div>
    );
    }

