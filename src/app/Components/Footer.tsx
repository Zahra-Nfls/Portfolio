import Image from 'next/image';
import instagram from './../../../public/images/instagram.png'
import github from './../../../public/images/github.png'
import discord from './../../../public/images/discord.png'
import linkedin from './../../../public/images/linkedin.png'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <ul className='flex flex-row gap-5 justify-center items-center'>
                    <li>
                        <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer">
                            <Image src={instagram} alt="Instagram" className="w-8 h-8 mb-5 mt-5"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/zaraana" target="_blank" rel="noopener noreferrer">
                            <Image src={github} alt="GitHub" className="w-8 h-8 mb-5 mt-5"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://discord.gg/FKGAHdJz" target="_blank" rel="noopener noreferrer">
                            <Image src={discord} alt="Discord" className="w-8 h-8 mb-5 mt-5"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/zahra-anaflous-dev/" target="_blank" rel="noopener noreferrer">
                            <Image src={linkedin} alt="LinkedIn" className="w-8 h-8 mb-5 mt-5"/>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
