"use client"; // Ensure it runs on the client side

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Card from "./Card";

interface CarouselProps {
    title: string;
    data: { id: number; title?: string; name?: string; description: string; image: string; cityUrl: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ title, data }) => {
    return (
        <div className="relative mx-auto p-5"> 
            <h2 className="text-m font-bold mb-4 text-center">{title}</h2>
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={5}
                slidesPerView={1}
                className="w-[250px] "
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Card
                            title={item.title || item.name || ""}
                            description={item.description}
                            image={item.image}
                            cityUrl={item.cityUrl}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
