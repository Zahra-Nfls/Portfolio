
// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Image from 'next/image';


//     interface SliderProps {
//         settings: object;
//         items: Array<{
//         id: number;
//         image: string;
//         title?: string;
//         description?: string;
//         }>;
//     }

//     export default function Slider ({settings, items}:SliderProps) {
//         return(
//             <Slider {...settings}>
//             {items.map((item) => (
//             <div key={item.id} className="p-2 bg-white shadow-lg rounded-lg div-style-mobile box-shadow">
//                 <Image src={item.image} alt={item.title || 'Item Image'} className="w-full h-40 object-cover rounded" />
//                 {item.title && <h3 className="text-2xl text-fuchsia-950 font-dm">{item.title}</h3>}
//                 {item.description && <p className="mt-2 font-playfair">{item.description}</p>}
//             </div>
//             ))}
//         </Slider>
//         )
//     }