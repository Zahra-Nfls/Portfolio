"use client";

import NavBar from "../Components/RouteNavBar";
import bg from "../../../public/images/bgabout.png";
import folder from "../../../public/images/folder (1).png";
import React from 'react';
import Image from 'next/image';
import RouteNavBar from "../Components/RouteNavBar";
import { useState } from 'react';
import nationality from "../../../public/images/passport.png";
import mantova from "../../../public/images/mantova.jpeg";
import gondola from "../../../public/images/gondola.png";
import frites from "../../../public/images/frites.png";
import morocco from "../../../public/images/kesh.jpeg";
import belgium from "../../../public/images/belgium.png";
import italy from "../../../public/images/italy.png";
import conan from "../../../public/images/detective conan.png";
import mechanic from "../../../public/images/mechanic.webp";
import tre from "../../../public/images/images/tre.png";
import theNine from "../../../public/images/theNine.jpeg";
import baaghi from "../../../public/images/baaghi.jpg";
import criminalMinds from "../../../public/images/images/criminal-minds.webp";
import eyeh from "../../../public/images/eyeh.jpg";
import sanam from "../../../public/images/sanam.jpeg";
import wrat from "../../../public/images/wrat.jpeg";
import Christie  from "../../../public/images/Christie.jpeg";
import conanManga from "../../../public/images/conan-managa.webp";
import انتيخريستوس from "../../../public/images/antecristo.jpg";
import haruki from "../../../public/images/haruki.jpeg";
import piccoli  from "../../../public/images/piccoli.jpg";
import skz from "../../../public/images/skz.jpeg";
import tamer from "../../../public/images/tamer.jpeg";
import ultimo from "../../../public/images/ultimo.jpg";
import wael from "../../../public/images/wael.jpg";
import chirine from "../../../public/images/chirine.jpg";
import cinema from "../../../public/images/cinema.png";
import favorite from "../../../public/images/favorite.png";
import Music from "../../../public/images/music.png";
import country from "../../../public/images/country.png";
import nek from "../../../public/images/nek.jpg";
import majed from "../../../public/images/majed.jpg";
import paul from "../../../public/images/paul.jpg";
import bad from "../../../public/images/bad boys 4.jpg";
import korea from "../../../public/images/korea.jpg";
import japan from "../../../public/images/japan1.jpg";
import turkey from "../../../public/images/turkey.jpg";
import bflag from "../../../public/images/belgium.png";
import mflag from "../../../public/images/morocco.png";
import iflag from "../../../public/images/italy.png";
import rabat from "../../../public/images/rabat.png";
import sflag from "../../../public/images/saudi-arabia (1).png";
import sicon from "../../../public/images/building (1).png";
import SAUDI from "../../../public/images/SAUDI.jpg";
import tflag from "../../../public/images/turkey.jpg";
import ticon from "../../../public/images/blue-mosque.png";
import jflg from "../../../public/images/japan (1).png";
import jicon from "../../../public/images/fuji (1).png";
import Kflag from "../../../public/images/south-korea.png";
import kicon from "../../../public/images/KICON.png";
import motto from "../../../public/images/motto.png";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";


export default function About() {
    const [isModalOpen, setIsModalOpen] = useState(false);
        
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const nationalities = [
        { id: 1, name: 'Italian', cityName:"Mantova", icon: '/images/italy.png', icon2: '/images/gondola.png', description: 'Born and raised in Italy and I lived there for  18 years.', image: '/images/mantova.jpeg', width: 300, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Mantua' },
        { id: 2, name: 'Moroccan',cityName:"Marrakesh", icon: '/images/morocco.png', icon2: '/images/rabat.png', description: 'My both parents are Moroccans.', image: '/images/kesh.jpeg', width: 300, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Marrakesh' },
        { id: 3, name: 'Belgian',cityName:"Bruxelles", icon: '/images/belgium.png', icon2: '/images/frites.png', description: 'I have been living in Belgium since 2011.', image: '/images/bx.jpg', width: 300, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Brussels' },
    ];
    
    const movies = [
        { id: 1, title: 'Detective Conan', description: 'A famous Japanese anime series featuring the young detective Shinichi Kudo, who is transformed into a child while solving complex cases.', image: '/images/detective conan.jpg', width: 150, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Detective_Conan' },
        { id: 2, title: 'The Mechanic', description: 'A professional hitman, Arthur Bishop, who specializes in making his hits look like accidents, faces a dilemma when his mentor is targeted.', image: '/images/mechanic.webp', width: 150, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/The_Mechanic_(2011_film)' },
        { id: 3, title: 'Tre Uomini E Una Gamba', description: 'An Italian comedy about three friends who embark on a journey to deliver a wooden leg, facing various humorous situations.', image: '/images/tre.jpg', width: 150, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Tre_uomini_e_una_gamba' },
        { id: 4, title: 'The Nine Tailed Fox', description: 'A Korean drama revolving around a legendary nine-tailed fox, blending romance and fantasy in a modern setting.', image: '/images/theNine.jpeg', width: 150, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Tale_of_the_Nine_Tailed' },
        { id: 5, title: 'Baaghi', description: 'An Indian action thriller about a rebellious martial artist who embarks on a mission to rescue his kidnapped lover.', image: '/images/baaghi.jpg', width: 150, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Baaghi_(2016_film)' },
        { id: 6, title: 'Criminal Minds', description: 'An American TV series following the FBI’s Behavioral Analysis Unit as they profile and capture the country’s most dangerous criminals.', image: '/images/criminal-minds.webp', width: 150, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Criminal_Minds' },
        { id: 7, title: 'Ammohom', description: 'A drama that delves into the life struggles of a lower-class Egyptian family, exploring societal issues and personal sacrifices.', image: '/images/eyeh.jpg', width: 150, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Ammohom' },
        { id: 8, title: 'Sanam Teri Kasam', description: 'A tragic love story from India where two lovers face insurmountable odds, blending heartache and passion.', image: '/images/sanam.jpeg', width: 150, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Sanam_Teri_Kasam' },
        { id: 9, title: 'Wrath of Man', description: 'A heist thriller where a mysterious and cold character seeks revenge after a brutal attack on a cash truck.', image: '/images/wrat.jpeg', width: 150, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Wrath_of_Man' },
        { id: 10, title: 'Bad Boys Ride or Die', description: 'Continuing the action-packed adventures of detectives Marcus Burnett and Mike Lowrey.', image: '/images/bad boys 4.jpg', width: 150, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Bad_Boys_(franchise)' },
    ];
    

const books = [
    { id: 1, title: 'Sherlock Holmes By Conan Doyle', description: 'A classic series featuring the world’s most famous detective, Sherlock Holmes, known for his sharp intellect and keen observation skills.', image: '/images/sherlock2.png', width: 300, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Sherlock_Holmes' },
    { id: 2, title: 'Agatha Christie Books', description: 'Mystery novels by Agatha Christie, filled with intriguing plots, surprising twists, and unforgettable characters.', image: '/images/Christie.jpeg', width: 300, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Agatha_Christie' },
    { id: 3, title: 'Detective Conan Manga', description: 'The manga series that inspired the Detective Conan anime, featuring complex mysteries and a brilliant young detective.', image: '/images/conan-managa.webp', width: 300, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Detective_Conan' },
    { id: 4, title: 'انتيخريستوس', description: 'A controversial novel blending elements of history, religion, and fantasy, sparking debates and discussions.', image: '/images/antecristo.jpg', width: 300, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Antichrist' },
    { id: 5, title: 'Haruki Murakami', description: 'Books by Haruki Murakami, a Japanese author known for his surreal, dream-like narratives and deep explorations of the human psyche.', image: '/images/haruki.jpeg', width: 300, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Haruki_Murakami' },
    { id: 6, title: 'Piccoli Brividi', description: 'An Italian adaptation of the Goosebumps series, bringing horror and thrill to young readers.', image: '/images/piccoli.jpg', width: 300, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Goosebumps' },
];

const singers = [
    { id: 1, name: 'Stray Kids', description: 'A popular South Korean boy band known for their energetic performances and self-produced music.', image: '/images/skz.jpeg', width: 300, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Stray_Kids' },
    { id: 2, name: 'BTS', description: 'Global K-pop sensations known for their powerful messages, intricate choreography, and massive fanbase.', image: '/images/bts.jpeg', width: 300, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/BTS' },
    { id: 3, name: 'Wael Kfoury', description: 'A Lebanese singer with a powerful voice, known for his romantic ballads and deep cultural influence.', image: '/images/wael.jpg', width: 300, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Wael_Kfoury' },
    { id: 4, name: 'Ultimo', description: 'An Italian singer-songwriter whose emotional lyrics and heartfelt performances resonate deeply with his fans.', image: '/images/ultimo.jpg', width: 300, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Ultimo_(singer)' },
    { id: 5, name: 'Tamer Hosny', description: 'An Egyptian singer, actor, and composer, Tamer Hosny is known for his versatility and connection with the Arab youth.', image: '/images/tamer.jpeg', width: 300, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Tamer_Hosny' },
    { id: 6, name: 'Chirine Abdelwahab', description: 'A beloved Arabic pop singer with a strong fanbase, known for her soulful voice and emotive performances.', image: '/images/chirine.jpg', width: 300, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Sherine' },
    { id: 7, name: 'Majed Al Mohandes', description: 'An Iraqi-Saudi singer and composer, known as the "Engineer of Arabic Song" for his precise and melodic style.', image: '/images/majed.jpg', width: 300, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Majid_Al_Muhandis' },
    { id: 8, name: 'Nek', description: 'An Italian singer-songwriter famous for his pop-rock music, especially the hit "Laura non c’è".', image: '/images/nek.jpg', width: 300, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Nek' },
    { id: 9, name: 'Paul Kim', description: 'A South Korean singer-songwriter known for his emotional ballads and soothing voice.', image: '/images/paul.jpg', width: 300, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Paul_Kim_(musician,_born_1988)' },
];

const countries = [
    { id: 1, name: 'Korea',cityName:"Seoul", description: 'Country known for its advanced technology and rich cultural heritage.', icon:'/images/south-korea.png',  icon2:'/images/KICON.png',  image: '/images/korea.jpg', width: 300, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/South_Korea' },
    { id: 2, name: 'Japan', cityName:"Akihabara", description: 'Famous for its blend of traditional culture and cutting-edge innovation.', icon:'/images/japan (1).png',  icon2:'/images/fuji (1).png', image: '/images/japan1.jpg', width: 300, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Japan' },
    { id: 3, name: 'Saudi Arabia',cityName:"Mecca", description: 'A nation with a rich history and significant influence in the Arab world.', icon:'/images/saudi-arabia (1).png',  icon2:'/images/building (1).png', image: '/images/SAUDI.jpg', width: 300, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Saudi_Arabia' },
    { id: 4, name: 'Turkey', cityName:"Istanbul", description: 'A unique blend of Eastern and Western cultures with a rich history.', icon:'/images/turkey.png',  icon2:'/images/blue-mosque.png', image: '/images/turkey.jpg', width: 300, height: 200, cityUrl: 'https://en.wikipedia.org/wiki/Turkey' },
];


    
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                },
            },
        ],
    };
    



    return (
        <>
                <div className="relative" style={{ width: '1400px', height: '1050px',  overflow: 'hidden'}}>
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg.src})`, backgroundSize: 'cover' }}>
                    <RouteNavBar openModal={openModal} isModalOpen={isModalOpen} closeModal={closeModal} />
                    <section className="flex flex-row justify-center gap-3  mt-16 ">
                    <h1 className="text-4xl text-fuchsia-950 font-dm text-center mb-5">About Me</h1>
                    <Image src={folder} alt="folder" className="w-10 h-10"/>
                    </section>

                    <div className="flex flex-col overflow-y-auto scrollbar-custom mx-10" style={{ maxHeight: '800px' }}>

                    <div className="py-5 div-style-mobile box-shadow mb-5">
                    <section className="flex flex-col justify-center items-center">
                            <h2 className="text-3xl font-bold font-dm text-fuchsia-950">My Life Motto:</h2>
                            <Image src={motto} alt="motto" className=" ml-4 transform hover:scale-110 transition-transform duration-300" />
                        </section>
                    </div>


                {/* Nationalities */}
                    <div className="py-5 div-style-mobile box-shadow mb-5">
                        <section className="flex flex-row justify-center items-center">
                            <h2 className="text-3xl font-bold font-dm text-fuchsia-950">My Nationalities</h2>
                            <Image src={nationality} alt="nationality" className="w-10 h-10 ml-4" />
                        </section>
                        <div className="mt-2 mx-4 sm:mx-8 md:mx-20 lg:mx-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 overflow-y-auto scrollbar-custom" style={{ maxHeight: '700px' }}>
                            {nationalities.map((nationality) => (
                                <div key={nationality.id} className="p-5 my-5 bg-white shadow-lg rounded-lg div-style-mobile box-shadow relative transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                                    <a href={nationality.cityUrl} target="_blank" rel="noopener noreferrer">
                                        <Image src={nationality.image} alt={nationality.name} width={nationality.width} height={nationality.height} className="w-full h-40 object-cover rounded" />
                                        <section className="flex flex-row items-center mt-2">
                                            <h3 className="text-2xl text-fuchsia-950 font-dm">{nationality.name}</h3>
                                            <Image src={nationality.icon} alt={nationality.name} width={nationality.width} height={nationality.height} className="w-8 ml-3" />
                                        </section>
                                        <p className="mt-2 text-xs font-playfair">{nationality.description}</p>
                                        <section className="flex flex-row items-center justify-center mt-2">
                                            <Image src={nationality.icon2} width={nationality.width} height={nationality.height} alt={nationality.name} className="w-8" />
                                            <p className="ml-2 text-fuchsia-950 font-playfair">{nationality.cityName}</p>
                                        </section>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>


            
                      {/* Movies */}
                    <div >
                    <div className="mt-2 div-style-mobile box-shadow mb-5">
                    <section className="flex flex-row justify-center items-center mb-4 ">
                        <h2 className=" text-3xl font-bold font-dm text-fuchsia-950">My Favorite Movies</h2>
                        <Image src={cinema} alt="cinema" className="w-10 h-10 ml-4" />
                    </section>
                        <Slider {...sliderSettings} className="mx-4 mb-5">
                            {movies.map((movie) => (
                                <div key={movie.id} className="p-5 gap-5 div-slider flex flex-col" >
                                    <a href={movie.cityUrl} target="_blank" rel="noopener noreferrer">
                                        <div className="flex flex-col justify-center items-center ">
                                            <Image
                                                src={movie.image}
                                                alt={movie.title}
                                                width={movie.width}
                                                height={movie.height}
                                                className="w-60 h-40 rounded-md mt-2 "
                                            />
                                            
                                                <h3 className="text-2xl text-fuchsia-950 font-dm">{movie.title}</h3>
                                                <p className="mt-1 mt-2 text-xs font-playfair mb-5 mx-2">{movie.description}</p>
                                        
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>



                 {/* Singers */}
                <div >
                <div className="mt-2 div-style-mobile box-shadow mb-5">
                <section className="flex flex-row justify-center items-center mb-4 ">
                    <h2 className=" text-3xl font-bold text-fuchsia-950 font-dm ">My Favorite Singers</h2>
                    <Image src={Music} alt="Music" className="w-10 h-10 ml-4" />
                </section>
                    <Slider {...sliderSettings} className="mx-4 mb-5">
                        {singers.map((singer) => (
                            <div key={singer.id} className="p-5 gap-5 div-slider flex flex-col " >
                                <a href={singer.cityUrl} target="_blank" rel="noopener noreferrer">
                                    <div className="flex flex-col justify-center items-center ">
                                        <Image
                                            src={singer.image}
                                            alt={singer.name}
                                            width={singer.width}
                                            height={singer.height}
                                            className="w-60 h-40 rounded-md mt-2 "
                                        />
                                        
                                            <h3 className="text-2xl text-fuchsia-950 font-dm">{singer.name}</h3>
                                            <p className="mt-1 mt-2 text-xs font-playfair mb-5 mx-2">{singer.description}</p>
                                    
                                    </div>
                                </a>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>




        {/* Books */}
            <div >
            <div className="mt-2 div-style-mobile box-shadow mb-5">
            <section className="flex flex-row justify-center items-center mb-4 ">
                <h2 className=" text-3xl font-bold text-fuchsia-950 font-dm ">My Favorite Books</h2>
                <Image src={favorite} alt="Books" className="w-10 h-10 ml-4" />
            </section>
                <Slider {...sliderSettings} className="mx-4 mb-5">
                    {books.map((books) => (
                        <div key={books.id} className="p-5 gap-5 div-slider flex flex-col " >
                            <a href={books.cityUrl} target="_blank" rel="noopener noreferrer">
                                <div className="flex flex-col justify-center items-center ">
                                    <Image
                                        src={books.image}
                                        alt={books.title}
                                        width={books.width}
                                        height={books.height}
                                        className="w-60 h-40 rounded-md mt-2 "
                                    />
                                    
                                        <h3 className="text-2xl text-fuchsia-950 font-dm">{books.title}</h3>
                                        <p className="mt-1 mt-2 text-xs font-playfair mb-5 mx-2">{books.description}</p>
                                
                                </div>
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>


        {/* Countries */}
            <div >
            <div className="mt-2 div-style-mobile box-shadow mb-20">
            <section className="flex flex-row justify-center items-center  ">
                <h2 className=" text-3xl font-bold font-dm text-fuchsia-950">My Favorite Countries</h2>
                <Image src={country} alt="country" className="w-10 h-10 ml-4" />
            </section>
                <Slider {...sliderSettings} className="mx-4 mb-5">
                    {countries.map((country) => (
                        <div key={country.id} className="p-5 gap-5 div-slider flex flex-col " >
                            <a href={country.cityUrl} target="_blank" rel="noopener noreferrer">
                                <div className="flex flex-col justify-center items-center ">
                                    <Image
                                        src={country.image}
                                        alt={country.name}
                                        width={country.width}
                                        height={country.height}
                                        className="w-60 h-40 rounded-md mt-2 "
                                    />
                                </div>
                        <section className="flex flex-row">
                        <h3 className="text-2xl text-fuchsia-950 font-dm">{country.name}</h3>
                        <Image src={country.icon} 
                        alt={country.name} 
                        width={country.width}
                        height={country.height}
                        className="w-8 ml-3"/>

                        </section>
                            <p className="mt-2 text-xs font-playfair">{country.description}</p>
                        <section className="flex flex-row items-center justify-center">
                        <Image src={country.icon2}
                        width={country.width}
                        height={country.height}
                        alt={country.name} className="w-9 mt-5"/>
                        <p className="mt-2 text-fuchsia-950 ml-2 font-playfair">{country.cityName}</p>
                        </section>
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
            
    </div>
    </div>
        </>
    );
}

