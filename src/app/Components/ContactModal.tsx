"use client"; 
import { useState } from 'react';
import envelope from "../../../public/images/envelope (1).png";
import Image from 'next/image';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, country, email, message }),
        });
    
        if (res.ok) {
            alert('Message sent successfully!');
            onClose();
        } else {
            alert(`Failed to send message. Please contact me directly at anaflous.zahra@outlook.com`);
        }
    };
    
    

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg mx-3 relative">
                <button className="absolute top-5 right-5 text-white text-2xl bg-fuchsia-950 ml-3 py-1 px-1 rounded-lg text-shadow z-60" onClick={onClose}>
                    &times;
                </button>
                <section className='flex flex-row items-center gap-3 mb-4 justify-center'>
                    <h2 className="text-4xl text-fuchsia-950 font-dm">Contact Me</h2>
                    <Image src={envelope} alt="envelope" className="w-12 h-12 flex" />
                </section>
                <form onSubmit={handleSubmit} className='mx-5'>
                    <input 
                        type="text"
                        placeholder='Who Are You??'
                        className="w-full p-2 border rounded mb-4 text-fuchsia-950 font-dm"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input 
                        type="text"
                        placeholder='Where Are You From?'
                        className="w-full p-2 border rounded mb-4 text-fuchsia-950 font-dm"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded mb-4 text-fuchsia-950 font-dm"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="✍️"
                        className="w-full p-2 border rounded mb-4 text-fuchsia-950 font-dm"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <section className='flex justify-center'>
                        <button type="submit" className="text-xl p-2 py-3 px-3 text-center rounded text-white font-dm bg-fuchsia-950 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:rounded-md">
                            Send
                        </button>
                    </section>
                </form>
            </div>
        </div>
    );
}
