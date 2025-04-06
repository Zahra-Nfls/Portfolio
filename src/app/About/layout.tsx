        "use client";
        import RouteNavBar from "../Components/RouteNavBar"; 
        import HomeFooter from "../Components/HomeFooter"; 
        import { useState } from 'react';
        import { useRouter } from "next/navigation";

        export default function AboutLayout({ children }: { children: React.ReactNode }) {
            const [isModalOpen, setIsModalOpen] = useState(false);
                
            const openModal = () => {
                setIsModalOpen(true);
            };

            const closeModal = () => {
                setIsModalOpen(false);
            };

            const router = useRouter();
        return (
            <div 
            className="hidden md:flex bg-cover w-full min-h-screen flex-col relative overflow-hidden" 
            style={{ backgroundImage: "url('/images/BG (4).jpg')" }}
            >

                    <RouteNavBar openModal={openModal} isModalOpen={isModalOpen} closeModal={closeModal} />


            <div className="flex-grow flex items-center justify-center">
                {children} 
            </div>


            <HomeFooter />
            </div>
        );
        }
