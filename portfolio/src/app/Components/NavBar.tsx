
import logo from "./../../../public/images/logo.png";
import Image from 'next/image';
export default function NavBaR(){

    return(
        <>
        <div className="flex justify-end">
        <Image src={logo} alt="logo" className="w-96 h-18  "/>
        </div>
        </>
    )
}