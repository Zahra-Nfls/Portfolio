import Image from 'next/image';
import github from './../../../public/images/github (2).png'
import discord from './../../../public/images/discord.png'
import linkedin from './../../../public/images/linkedin (1).png'

export default function HomeFooter() {
    return (
        <div className='font-indie  md:mb-0'>
            <div className='mb-2 md:mb-0'>
                <ul className='flex flex-row gap-2 md:gap-5 justify-end items-center mx-4 md:mx-10'>
                    <li>
                        <a href="https://github.com/zaraana" target="_blank" rel="noopener noreferrer">
                            <Image src={github} alt="GitHub" className="w-5 h-5 md:w-6 md:h-6 hover:scale-125 transition-transform "/>
                        </a>
                    </li>
                    <li>
                        <a href="https://discord.gg/cPVdSgHT" target="_blank" rel="noopener noreferrer">
                            <Image src={discord} alt="Discord" className="w-5 h-5 md:w-6 md:h-6 hover:scale-125 transition-transform"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/zahra-anaflous-dev/" target="_blank" rel="noopener noreferrer">
                            <Image src={linkedin} alt="LinkedIn" className="w-5 h-5 md:w-6 md:h-6 hover:scale-125 transition-transform"/>
                        </a>
                    </li>
                </ul>
            </div>
            <footer className="mb-0.5 text-gray-500 text-center text-xs md:text-sm">
    <p>© 2025 Zahra Nfls カルマ. All rights reserved.</p>
</footer>
        </div>
    )
}
