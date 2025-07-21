    // components/MobileLayout.tsx
 
"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  backgroundUrl: string;
  NavBar: React.ReactNode;
  Footer: React.ReactNode;
};

export default function MobileLayout({
  children,
  backgroundUrl,
  NavBar,
  Footer,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('${backgroundUrl}')` }}
      />

      {/* Optional modal blur overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-10" />
      )}

      <div className="relative z-20 flex flex-col min-h-screen justify-between">
        {/* NavBar stays above background */}
        <div ref={menuRef} className="z-30">{NavBar}</div>

        {/* Page content */}
        <main
          style={{
            filter: isOpen ? "blur(6px)" : "none",
            transition: "filter 0.3s ease",
          }}
          className="flex-grow flex flex-col md:flex-row w-full"
        >
          {children}
        </main>

        {/* Footer */}
        <div className="z-20">{Footer}</div>
      </div>

      {/* Example modal trigger (remove this if modal is triggered differently) */}
      {/* <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-40 p-2 bg-white rounded shadow"
      >
        Toggle Modal
      </button> */}
    </div>
  );
}
