
"use client";
import HomeFooter from "../Components/HomeFooter";
import { addToast, ToastProvider } from "@heroui/react";
import React, { useState, useEffect, useRef } from "react";
import RouteNavBar from "../Components/RouteNavBar";
import { div } from "framer-motion/client";

export default function Contact() {
  const sanitizeInput = (text: string) => text.replace(/[<>]/g, "");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form) return;

    const formData = new FormData(form);
    formData.set("email", sanitizeInput(formData.get("email") as string));
    formData.set("subject", sanitizeInput(formData.get("subject") as string));
    formData.set("message", sanitizeInput(formData.get("message") as string));

    try {
      const response = await fetch("https://formspree.io/f/xeoabjyb", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        addToast({
          // title: "Message Sent",
          description: "✅ Your message was sent successfully!",
          severity: "success" as const, // ensure TS recognizes literal
        });
        form.reset();
      } else {
        addToast({
          // title: "Submission Error",
          description: "❌ Something went wrong. Please try again.",
          severity: "danger" as const, // ensure TS recognizes literal
        });
      }
    } catch (error) {
      addToast({
        // title: "Network Error",
        description: "❌ Unable to submit. Check your connection.",
        severity: "danger",  
      });
    }
  };

        const [isOpen, setIsOpen] = useState(false);
        const toggleMenu = () => setIsOpen(!isOpen);
        const menuRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
          const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
              setIsOpen(false);
            }
          };

          if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "hidden";
          } else {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "";
          }

          return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "";
          };
        }, [isOpen]);



return (
    <div className="flex flex-col bg-cover w-full h-full relative overflow-hidden">
        {/* Background Image */}
        <div
            className="fixed inset-0 bg-cover bg-center transition-filter duration-300"
            style={{ backgroundImage: "url('/images/BG (4).jpg')" }}
        />

  <div className="min-h-screen flex flex-col overflow-hidden text-xs md:text-base">
    <ToastProvider placement="top-left" toastOffset={35} />

    {/* Blur Overlay */}
        {isOpen && <div className="fixed inset-0 bg-black/30" style={{ zIndex: 5 }} />}

        {/* Content */}
        <div className="relative z-10 flex flex-col w-screen min-h-screen justify-between">
            {/* Navbar */}
            <div ref={menuRef} className="relative z-20">
            <RouteNavBar isOpen={isOpen} toggleMenu={toggleMenu} />
            </div>


    {/* Main content area */}
    <main className="flex-grow flex flex-col justify-center items-center px-12 md:px-4"
    style={{ filter: isOpen ? "blur(6px)" : "none", transition: "filter 0.3s ease" }}>
      
      <section className="text-center">
        <h2 className="font-indie text-lg font-semibold md:text-2xl mb-5 text-fuchsia-950 mt-8 md:mt-0">Get In Touch</h2>
      </section>
    
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-20 gap-10 w-full max-w-4xl mb-10 md:mb-0">

        {/* Contact Form */}
        <form
          className="space-y-4 font-indie"
          onSubmit={handleSubmit}
          method="POST"
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl border bg-fuchsia-950/10 focus:ring-2 focus:ring-fuchsia-950/50 outline-none transition-shadow"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-3 rounded-xl border bg-fuchsia-950/10 focus:ring-2 focus:ring-fuchsia-950/45 outline-none transition-shadow"
              placeholder="The subject of your message"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full px-4 py-3 rounded-xl border bg-fuchsia-950/10 focus:ring-2 focus:ring-fuchsia-950/45 outline-none transition-shadow"
              placeholder="Your message..."
            />
          </div>

          {/* Hidden honeypot */}
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          <section className="flex justify-center">
          <button
            type="submit"
            className="w-1/2 py-3 bg-fuchsia-950/45 text-white rounded-xl hover:bg-fuchsia-950/55 transition-colors"
          >
          Send Message
          </button>
          </section>
        </form>


        {/* Description */}
        <div className="font-indie">
          <p className="mb-6 md:mt-10">
            Whether you have a project in mind, need a helping hand, or just feel like saying hi,
            <br/><br/>
            I’d truly love to hear from you.
            <br/><br/>
            No pressure, no formalities, just a genuine chat between humans. 💬
            <br/><br/>
            Let's create something meaningful, together. ✨
          </p>
        
        <div className="flex items-center gap-2 mt-4 mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-700"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 2a6 6 0 00-6 6c0 4 6 10 6 10s6-6 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
        <span className="text-sm text-gray-800">Brussels, Belgium</span>
      </div>


          <div className="flex justify-end w-full md:mt-6 mb-5 md:mb-0">
            <a
              href="mailto:zara.zara92@outlook.be"
              className="w-28 md:w-[8rem] group block p-4 border bg-fuchsia-950/10 rounded-2xl shadow-sm transition hover:shadow-md hover:bg-fuchsia-950/55"
            >
              <h2 className=" font-semibold flex justify-center items-center gap-2 text-fuchsia-950 group-hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-fuchsia-950 group-hover:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0L12 13.5 2.25 6.75m19.5 0L12 13.5m0 0L2.25 6.75"
                  />
                </svg>
                Email Me
              </h2>
            </a>
          </div>



        <section>
          <h2 className="md:hidden mt-10 text-lg text-fuchsia-950 font-semibold"> Or...</h2>
        </section>
        </div>
      </div>
    </main>

    {/* Footer */}
    <HomeFooter />
  </div>
  </div>
  </div>
);

}
