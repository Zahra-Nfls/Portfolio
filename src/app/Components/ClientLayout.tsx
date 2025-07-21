    "use client";

    import RouteNavBar from "../Components/RouteNavBar";
    import HomeFooter from "../Components/HomeFooter";
    import { useState, useEffect, useRef } from "react";
    import { usePathname } from "next/navigation";

    export default function ClientLayout({
    children,
    }: {
    children: React.ReactNode;
    }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const menuRef = useRef<HTMLDivElement>(null);

    const pathname = usePathname();
  const showNavBar = pathname !== "/";
  const showFooter = true;

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
        {/* Background */}
        <div
            className="fixed inset-0 bg-cover bg-center transition-filter duration-300"
            // style={{ backgroundImage: "url('/images/BG (4).jpg')" }}
        />

        {/* Overlay when menu is open */}
        {isOpen && <div className="fixed inset-0 bg-black/30" style={{ zIndex: 5 }} />}

     <div className="relative z-10 flex flex-col w-screen min-h-screen justify-between">
  {showNavBar && (
    <div ref={menuRef} className="relative z-20">
      <RouteNavBar isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
  )}

  <main
    className="flex-grow flex items-center justify-center"
    style={{ filter: isOpen ? "blur(20px)" : "none", zIndex: 0 }}
  >
    {children}
  </main>

  {showFooter && <HomeFooter />}
</div>

        </div>
    );
    }
