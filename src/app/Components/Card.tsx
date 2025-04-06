import Image from "next/image";

interface CardProps {
    title: string;
    description: string;
    image: string;
    cityUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, image, cityUrl }) => {
    return (
        <div className="bg-white flex flex-col items-center justify-center shadow-md rounded-lg overflow-hidden w-[250px] h-[210px] ">
            <Image src={image} alt={title} width={150} height={90} className="rounded-md" />
            <h3 className="text-sm font-semibold mt-2 text-center">{title}</h3>
            <p className="text-xs text-gray-600 text-center">{description}</p>
            <a href={cityUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs mt-1">
                Learn More
            </a>
        </div>
    );
};

export default Card;
