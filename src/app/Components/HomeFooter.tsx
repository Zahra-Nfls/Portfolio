import Image from 'next/image';
import github from './../../../public/images/github (2).png'
import discord from './../../../public/images/discord.png'
import linkedin from './../../../public/images/linkedin (1).png'

export default function HomeFooter() {
    return (
        <div className='mt-[-5.9vh] font-indie '>
            <div className="bottom-0">
                <ul className='flex flex-row gap-5 justify-end items-center mx-10'>
                    <li>
                        <a href="https://github.com/zaraana" target="_blank" rel="noopener noreferrer">
                            <Image src={github} alt="GitHub" className="w-7 h-7  hover:scale-125 transition-transform "/>
                        </a>
                    </li>
                    <li>
                        <a href="https://discord.gg/FKGAHdJz" target="_blank" rel="noopener noreferrer">
                            <Image src={discord} alt="Discord" className="w-7 h-7  hover:scale-125 transition-transform"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/zahra-anaflous-dev/" target="_blank" rel="noopener noreferrer">
                            <Image src={linkedin} alt="LinkedIn" className="w-7 h-7  hover:scale-125 transition-transform"/>
                        </a>
                    </li>
                </ul>
            </div>
            <footer className=" text-gray-500 text-center ">
    <p>© 2025 Zahra. All rights reserved.</p>
</footer>
        </div>
    )
}
