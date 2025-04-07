
import logo from "./../../../public/images/logo (3)(1).png"    
import Image from 'next/image';
export default function NavBaR(){

    return(
        <>
        <div className="flex justify-start mb-5">
        <Image src={logo} alt="logo" className="w-48 mt-3 ml-5"/>
        </div>
        </>
    )
}  