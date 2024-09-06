"use client";

import NavBar from "../Components/RouteNavBar";
import bg from "../../../public/images/route3.png";
import Image from 'next/image';
import pc from '../../../public/images/pc.png';
import React, { ReactNode } from 'react';
import RouteNavBar from "../Components/RouteNavBar";
import { useState } from 'react';

export default function Skills(){
        
        const [isModalOpen, setIsModalOpen] = useState(false);
        
        const openModal = () => {
            setIsModalOpen(true);
        };
    
        const closeModal = () => {
            setIsModalOpen(false);
        };
    
    return (
        <>
            <div className="relative" style={{width: '1848px', height: '1000px', overflow: 'hidden' }}>
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg.src})`, backgroundSize: 'cover' }}>
                    <RouteNavBar openModal={openModal} isModalOpen={isModalOpen} closeModal={closeModal} />
                    <section className="flex flex-row justify-center gap-3 items-center mb-5 mt-16" >
                    <h2 className="text-4xl text-fuchsia-950 font-dm text-center ">My Skills</h2>
                    <Image src={pc} alt="usb" className="w-12 hz-12"/>
                    </section>

                    <div className="flex flex-col overflow-y-auto scrollbar-custom mx-10" style={{ maxHeight: '700px' }}>
                        <div className="flex flex-col style-skills p-3 mb-5 box-shadow mx-16" >
                            <h2 className="text-center font-bold text-2xl text-fuchsia-950 font-dm mb-1">Front-End:</h2>
                            <section className="flex flex-row gap-5 flex-wrap justify-center items-center">
                                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML" />
                                </a>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS" />
                                </a>
                                <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://user-images.githubusercontent.com/25181517/192158956-48192682-23d5-4bfc-9dfb-6511ade346bc.png" alt="Sass" title="Sass" />
                                </a>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript" />
                                </a>
                                <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png" alt="Bootstrap" title="Bootstrap" />
                                </a>
                                <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="Tailwind CSS" title="Tailwind CSS" />
                                </a>
                                <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://user-images.githubusercontent.com/25181517/192158957-b1256181-356c-46a3-beb9-487af08a6266.png" alt="Wordpress" title="Wordpress" />
                                </a>
                                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React" />
                                </a>
                                <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704" alt="Next.js" title="Next.js" />
                                </a>
                                <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png" alt="Figma" title="Figma" />
                                </a>
                                <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png" alt="Postman" title="Postman" />
                                </a>
                                <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript" />
                                </a>
                            </section>
                        </div>

                        <div className="flex flex-col style-skills p-3 mb-5 box-shadow  mx-16">
                            <h2 className="text-center font-bold text-2xl text-fuchsia-950 font-dm">Back-end:</h2>
                            <section className="flex flex-row gap-5 flex-wrap justify-center items-center">
                                <a href="https://www.php.net/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="80" height="80" src="https://user-images.githubusercontent.com/25181517/183570228-6a040b9f-3ddf-47a2-a201-743121dac664.png" alt="php" title="php" />
                                </a>
                                <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="80" height="80" src="https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png" alt="MySQL" title="MySQL" />
                                </a>
                                <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="80" height="80" src="https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png" alt="Docker" title="Docker" />
                                </a>
                                <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="80" height="80" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js" />
                                </a>
                            </section>
                        </div>

                        <div className="flex flex-col style-skills p-3 mb-5 box-shadow box-shadow mx-16">
                            <h2 className="text-center font-bold text-2xl text-fuchsia-950 font-dm mb-1">Currently Learning:</h2>
                            <section className="flex flex-row gap-5 flex-wrap justify-center items-center">
                                <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://user-images.githubusercontent.com/25181517/117448124-a2da9800-af3e-11eb-85d2-bd1b69b65603.png" alt="Vue.js" title="Vue.js" />
                                </a>
                                <a href="https://bun.sh/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/7e9599e9-0570-4bb6-b17f-676ed589912f" alt="Bun.js" title="Bun.js" />
                                </a>
                                <a href="https://laravel.com/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://github.com/marwin1991/profile-technology-icons/assets/25181517/afcf1c98-544e-41fb-bf44-edba5e62809a" alt="Laravel" title="Laravel" />
                                </a>
                                <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://github-production-user-asset-6210df.s3.amazonaws.com/62091613/261395532-b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35.png" alt="Vite" title="Vite" />
                                </a>
                                <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png" alt="mongoDB" title="mongoDB" />
                                </a>
                            </section>
                        </div>

                        <div className="flex flex-col style-skills p-3 mb-5 box-shadow mx-16">
                            <h2 className="text-center font-bold text-2xl text-fuchsia-950 font-dm mb-1">General Tools:</h2>
                            <section className="flex flex-row gap-5 flex-wrap justify-center items-center">
                                <a href="https://www.linux.org/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://github.com/marwin1991/profile-technology-icons/assets/76662862/2481dc48-be6b-4ebb-9e8c-3b957efe69fa" alt="Linux" title="Linux" />
                                </a>
                                <a href="https://ubuntu.com/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://user-images.githubusercontent.com/25181517/186884153-99edc188-e4aa-4c84-91b0-e2df260ebc33.png" alt="Ubuntu" title="Ubuntu" />
                                </a>
                                <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" alt="Git" title="Git" />
                                </a>
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png" alt="GitHub" title="GitHub" />
                                </a>
                                <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png" alt="Visual Studio Code" title="Visual Studio Code" />
                                </a>
                                <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://user-images.githubusercontent.com/25181517/192158606-7c2ef6bd-6e04-47cf-b5bc-da2797cb5bda.png" alt="bash" title="bash" />
                                </a>
                                <a href="https://www.vim.org/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://user-images.githubusercontent.com/25181517/192108889-232b3431-a585-4b36-a62d-9078bd3641d9.png" alt="Vim" title="Vim" />
                                </a>
                                <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" title="npm" />
                                </a>
                                <a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">
                                    <Image className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md" width="70" height="70" src="https://user-images.githubusercontent.com/25181517/183049794-a3dfaddd-22ee-4ffe-b0b4-549ccd4879f9.png" alt="yarn" title="yarn" />
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


