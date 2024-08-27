    "use client";

    import NavBar from "../Components/RouteNavBar";
    import bg from "../../../public/images/route3.png";
    import Image from 'next/image';
    import Weather from "../../../public/images/The Weather App.png";
    import Movie from "../../../public/images/Movie-Browser.png";
    import DidlyDoo from "../../../public/images/DidlyDoo.png";
    import Quote from "../../../public/images/Random Quote Generator.png";
    import Collection from "../../../public/images/The Collection.png";
    import React from "../../../public/images/To Do Lis React.png";
    import List from "../../../public/images/To Do List.png";
    import vcard from "../../../public/images/v-card.png";
    import usb from "../../../public/images/pendrive.png";
    import workInProgress from "../../../public/images/workInProgress.gif";
    import ReactPractice from "../../../public/images/practice React.png";
    import portfolio from "../../../public/images/portfolio.png";
    import { useState } from 'react';
    import RouteNavBar from "../Components/RouteNavBar";
    

    export default function Projects() {
        const [isModalOpen, setIsModalOpen] = useState(false);
        const openModal = () => {
            setIsModalOpen(true);
        };
    
        const closeModal = () => {
            setIsModalOpen(false);
        };
    
        const projects = [
        { id: 1, title: 'E-Commerce Platform', description: 'Platform where users can browse products, add them to the cart, and make purchases.', image: '/images/workInProgress.gif', width: 300, height: 200, deployUrl: 'https://zaraana.github.io/V-Card/' },
        { id: 1, title: 'Personal Finance Tracker', description: 'Tracker that helps users manage their income, expenses and saving goals', image: '/images/workInProgress.gif', width: 300, height: 200, deployUrl: 'https://zaraana.github.io/V-Card/' },
        { id: 2, title: 'Movie-Browser', description: 'React App that fetches movies from API, their infos and link to trailer + user log-in.', image: '/images/Movie-Browser.png', width: 300, height: 200, deployUrl: 'https://zaraana.github.io/V-Card/' },
        { id: 3, title: 'To Do Lis React', description: 'React To Do List, add, modify, delete tasks and store them.', image: '/images/To Do Lis React.png', width: 300, height: 200, deployUrl: 'https://zara-to-do-app.netlify.app/' },
        { id: 6, title: 'React-Practice', description: 'Some React Practice', image: "/images/practice React.png", width: 300, height: 200, deployUrl: 'https://zaraana.github.io/V-Card/' },
        { id: 4, title: 'The Weather App', description: 'JavaScript App cast weather/city + 5 next days forecast + img and city description + sidebar and search history ', image: '/images/The Weather App.png', width: 300, height: 200, deployUrl: 'https://zaraana.github.io/The-Weather-App/' },
        { id: 9, title: 'To Do List', description: 'Description of project three', image: '/images/To Do List.png', width: 300, height: 200, deployUrl: 'https://zaraana.github.io/V-Card/' },
        { id: 9, title: 'V-Card', description: 'Html and CSS V-Card', image: '/images/v-card.png', width: 300, height: 200, deployUrl: 'https://zaraana.github.io/V-Card/' },
        { id: 7, title: 'The Collection', description: 'A Js App with a collection of my favorite movies.', image: '/images/The Collection.png', width: 300, height: 200, deployUrl: 'https://zaraana.github.io/V-Card/' },
        { id: 8, title: 'Random Quote Generator', description: 'App that fetches random quotes using API.', image: '/images/Random Quote Generator.png', width: 300, height: 200, deployUrl: 'https://zaraana.github.io/V-Card/' },
        { id: 10, title: 'Didlydoo', description: 'Group project to create a very useful tool to plan events.', image: '/images/DidlyDoo.png', width: 300, height: 200, deployUrl: 'https://zaraana.github.io/Didlydoo-App/' },
        { id: 10, title: 'Portfolio', description: 'Html and CSS made Portfolio.', image: '/images/portfolio.png', width: 300, height: 200, deployUrl: 'https://zaraana.github.io/' },
    ];

    return (
        <div className="relative " style={{ width: '1848px', height: '1000px', overflow: 'hidden' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg.src})`, backgroundSize: 'cover' }}>
        <RouteNavBar openModal={openModal} isModalOpen={isModalOpen} closeModal={closeModal} />
            <section className="flex flew-row justify-center mb-5 mt-16 gap-3">
            <h2 className="text-4xl text-fuchsia-950 font-dm ">My Projects</h2>
            <Image src={usb} alt="usb" className="w-10"/>
            </section>
            <div className="mt-2 mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 overflow-y-auto scrollbar-custom " style={{ maxHeight: '800px' }}>
            {projects.map((project) => (
                <div key={project.id} className="p-5 my-5 bg-white shadow-lg rounded-lg div-style-mobile box-shadow flex flex-col justify-center">
                <Image src={project.image} alt={project.title} width={project.width} height={project.height} className="w-69 h-52 object-fit rounded " />
                <h3 className="text-xl text-fuchsia-950 mt-2 font-dm">{project.title}</h3>
                <p className=" text-xs mt-2 font-playfair h-20">{project.description}</p>
                <a href={project.deployUrl} target="_blank" rel="noopener noreferrer">
                    <button className="mt-4 px-4 py-2 bg-fuchsia-950 text-white rounded transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md">
                    View Project
                    </button>
                </a>
                </div>
            ))}
            <section>
            <a href="https://github.com/zaraana?tab=repositories" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 mb-20 mx-3 px-5 py-4 bg-fuchsia-950 text-white rounded transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md">More..</button>
            </a>
            </section>
            </div>
        </div>
        </div>
    );
    }
