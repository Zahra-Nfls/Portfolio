
// "use client";
// import HomeFooter from "../Components/HomeFooter";
// import { addToast, ToastProvider } from "@heroui/react";
// import React, { useState, useEffect, useRef } from "react";
// import RouteNavBar from "../Components/RouteNavBar";
// import { div } from "framer-motion/client";

// export default function Contact() {
//   const sanitizeInput = (text: string) => text.replace(/[<>]/g, "");

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const form = event.currentTarget;
//     if (!form) return;

//     const formData = new FormData(form);
//     formData.set("email", sanitizeInput(formData.get("email") as string));
//     formData.set("subject", sanitizeInput(formData.get("subject") as string));
//     formData.set("message", sanitizeInput(formData.get("message") as string));

//     try {
//       const response = await fetch("https://formspree.io/f/xeoabjyb", {
//         method: "POST",
//         body: formData,
//         headers: { Accept: "application/json" },
//       });

//       if (response.ok) {
//         addToast({
//           // title: "Message Sent",
//           description: "✅ Your message was sent successfully!",
//           severity: "success" as const, // ensure TS recognizes literal
//         });
//         form.reset();
//       } else {
//         addToast({
//           // title: "Submission Error",
//           description: "❌ Something went wrong. Please try again.",
//           severity: "danger" as const, // ensure TS recognizes literal
//         });
//       }
//     } catch (error) {
//       addToast({
//         // title: "Network Error",
//         description: "❌ Unable to submit. Check your connection.",
//         severity: "danger",  
//       });
//     }
//   };

//         const [isOpen, setIsOpen] = useState(false);
//         const toggleMenu = () => setIsOpen(!isOpen);
//         const menuRef = useRef<HTMLDivElement>(null);

//         useEffect(() => {
//           const handleClickOutside = (event: MouseEvent) => {
//             if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//               setIsOpen(false);
//             }
//           };

//           if (isOpen) {
//             document.addEventListener("mousedown", handleClickOutside);
//             document.body.style.overflow = "hidden";
//           } else {
//             document.removeEventListener("mousedown", handleClickOutside);
//             document.body.style.overflow = "";
//           }

//           return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//             document.body.style.overflow = "";
//           };
//         }, [isOpen]);



// return (
//     <div className="flex flex-col bg-cover w-full h-full relative overflow-hidden">
//         {/* Background Image */}
//         <div
//             className="fixed inset-0 bg-cover bg-center transition-filter duration-300"
//             style={{ backgroundImage: "url('/images/BG (4).png')" }}
//         />

//   <div className="min-h-screen flex flex-col overflow-hidden text-xs md:text-base">
//     <ToastProvider placement="top-left" toastOffset={35} />

//     {/* Blur Overlay */}
//         {isOpen && <div className="fixed inset-0 bg-black/30" style={{ zIndex: 5 }} />}

//         {/* Content */}
//         <div className="relative z-10 flex flex-col w-screen min-h-screen justify-between">
//             {/* Navbar */}
//             <div ref={menuRef} className="relative z-20">
//             <RouteNavBar isOpen={isOpen} toggleMenu={toggleMenu} />
//             </div>


//     {/* Main content area */}
//     <main className="flex-grow flex flex-col justify-center items-center px-12 md:px-4"
//     style={{ filter: isOpen ? "blur(6px)" : "none", transition: "filter 0.3s ease" }}>
      
//       <section className="text-center">
//         <h2 className="font-indie text-lg font-semibold md:text-2xl mb-5 text-fuchsia-950 mt-8 md:mt-0">Get In Touch</h2>
//       </section>
    
//       <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-20 gap-10 w-full max-w-4xl mb-10 md:mb-0">

//         {/* Contact Form */}
//         <form
//           className="space-y-4 font-indie"
//           onSubmit={handleSubmit}
//           method="POST"
//         >
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               className="w-full px-4 py-3 rounded-xl border bg-fuchsia-950/10 focus:ring-2 focus:ring-fuchsia-950/50 outline-none transition-shadow"
//               placeholder="your@email.com"
//             />
//           </div>

//           <div>
//             <label htmlFor="subject" className="block text-sm font-medium mb-2">
//               Subject
//             </label>
//             <input
//               type="text"
//               id="subject"
//               name="subject"
//               required
//               className="w-full px-4 py-3 rounded-xl border bg-fuchsia-950/10 focus:ring-2 focus:ring-fuchsia-950/45 outline-none transition-shadow"
//               placeholder="The subject of your message"
//             />
//           </div>

//           <div>
//             <label htmlFor="message" className="block text-sm font-medium mb-2">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows={6}
//               required
//               className="w-full px-4 py-3 rounded-xl border bg-fuchsia-950/10 focus:ring-2 focus:ring-fuchsia-950/45 outline-none transition-shadow"
//               placeholder="Your message..."
//             />
//           </div>

//           {/* Hidden honeypot */}
//           <input type="text" name="_gotcha" style={{ display: "none" }} />

//           <section className="flex justify-center">
//           <button
//             type="submit"
//             className="w-1/2 py-3 bg-fuchsia-950/45 text-white rounded-xl hover:bg-fuchsia-950/55 transition-colors"
//           >
//           Send Message
//           </button>
//           </section>
//         </form>


//         {/* Description */}
//         <div className="font-indie">
//           <p className="mb-6 md:mt-10">
//             Whether you have a project in mind, need a helping hand, or just feel like saying hi,
//             <br/><br/>
//             I’d truly love to hear from you.
//             <br/><br/>
//             No pressure, no formalities, just a genuine chat between humans. 💬
//             <br/><br/>
//             Let's create something meaningful, together. ✨
//           </p>
        
//         <div className="flex items-center gap-2 mt-4 mb-3">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-gray-700"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path d="M10 2a6 6 0 00-6 6c0 4 6 10 6 10s6-6 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
//         </svg>
//         <span className="text-sm text-gray-800">Brussels, Belgium</span>
//       </div>


//           <div className="flex justify-end w-full md:mt-6 mb-5 md:mb-0">
//             <a
//               href="mailto:zara.zara92@outlook.be"
//               className="w-28 md:w-[8rem] group block p-4 border bg-fuchsia-950/10 rounded-2xl shadow-sm transition hover:shadow-md hover:bg-fuchsia-950/55"
//             >
//               <h2 className=" font-semibold flex justify-center items-center gap-2 text-fuchsia-950 group-hover:text-white transition-colors">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="w-4 h-4 text-fuchsia-950 group-hover:text-white"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0L12 13.5 2.25 6.75m19.5 0L12 13.5m0 0L2.25 6.75"
//                   />
//                 </svg>
//                 Email Me
//               </h2>
//             </a>
//           </div>



//         <section>
//           <h2 className="md:hidden mt-10 text-lg text-fuchsia-950 font-semibold"> Or...</h2>
//         </section>
//         </div>
//       </div>
//     </main>

//     {/* Footer */}
//     <HomeFooter />
//   </div>
//   </div>
//   </div>
// );

// }


"use client";

import React, { FormEvent, useEffect, useRef, useState } from "react";
import { addToast, ToastProvider } from "@heroui/react";

import HomeFooter from "../Components/HomeFooter";
import RouteNavBar from "../Components/RouteNavBar";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((previousState) => !previousState);
  };

  const sanitizeInput = (value: FormDataEntryValue | null) => {
    if (typeof value !== "string") return "";

    return value.replace(/[<>]/g, "").trim();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.set("email", sanitizeInput(formData.get("email")));
    formData.set("subject", sanitizeInput(formData.get("subject")));
    formData.set("message", sanitizeInput(formData.get("message")));

    try {
      const response = await fetch("https://formspree.io/f/xeoabjyb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        addToast({
          description: "❌ Something went wrong. Please try again.",
          severity: "danger",
        });

        return;
      }

      addToast({
        description: "✅ Your message was sent successfully!",
        severity: "success",
      });

      form.reset();
    } catch {
      addToast({
        description: "❌ Unable to submit. Check your connection.",
        severity: "danger",
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedElement = event.target as Node;

      if (
        menuRef.current &&
        !menuRef.current.contains(clickedElement)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <ToastProvider placement="top-left" toastOffset={35} />

      {/* Original paper background */}
      <div
        aria-hidden="true"
        className="fixed inset-0 bg-cover bg-center bg-no-repeat transition-[filter] duration-300"
        style={{
          backgroundImage: "url('/images/BG (4).png')",
          filter: isOpen ? "blur(6px)" : "none",
        }}
      />

      {/* Smaller Karma image — desktop only */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 hidden bg-right-bottom bg-no-repeat transition-[filter] duration-300 md:block"
        style={{
          backgroundImage: "url('/images/contactKarma.jpeg')",
          backgroundSize: "57% auto",
          filter: isOpen ? "blur(6px)" : "none",
        }}
      />

      {/* Dark overlay when navigation is open */}
      {isOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-[5] bg-black/30"
        />
      )}

      {/* Page content */}
      <div className="relative z-10 flex min-h-screen w-full flex-col text-xs md:text-base">
        {/* Navigation */}
        <div ref={menuRef} className="relative z-20">
          <RouteNavBar
            isOpen={isOpen}
            toggleMenu={toggleMenu}
          />
        </div>

        {/* Main content */}
        <main
          className="flex flex-grow flex-col items-center justify-center px-6 py-10 md:px-4 md:py-6"
          style={{
            filter: isOpen ? "blur(6px)" : "none",
            transition: "filter 0.3s ease",
          }}
        >
          {/* Page title */}
          <section className="text-center">
            <h1 className="mb-2 mt-8 font-indie text-lg font-semibold text-fuchsia-950 md:mt-0 md:text-2xl">
              Get In Touch
            </h1>

            {/* Nagomi divider */}
            {/* <div
              aria-hidden="true"
              className="mx-auto mb-7 flex items-center justify-center gap-2 text-fuchsia-900/60"
            >
              <span className="h-px w-10 bg-fuchsia-900/30" />
              <span className="text-base">✿</span>
              <span className="h-px w-10 bg-fuchsia-900/30" />
            </div> */}
          </section>

          <div className="flex w-full max-w-4xl flex-col-reverse gap-10 md:grid md:grid-cols-2 md:gap-20">
            {/* Contact form */}
            <form
              className="space-y-4 font-indie"
              onSubmit={handleSubmit}
              method="POST"
            >
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-fuchsia-950/20 bg-fuchsia-950/10 px-4 py-3 outline-none transition duration-300 placeholder:text-slate-500/65 focus:border-fuchsia-950/40 focus:ring-2 focus:ring-fuchsia-950/30"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="The subject of your message"
                  className="w-full rounded-xl border border-fuchsia-950/20 bg-fuchsia-950/10 px-4 py-3 outline-none transition duration-300 placeholder:text-slate-500/65 focus:border-fuchsia-950/40 focus:ring-2 focus:ring-fuchsia-950/30"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Your message..."
                  className="w-full resize-y rounded-xl border border-fuchsia-950/20 bg-fuchsia-950/10 px-4 py-3 outline-none transition duration-300 placeholder:text-slate-500/65 focus:border-fuchsia-950/40 focus:ring-2 focus:ring-fuchsia-950/30"
                />
              </div>

              {/* Formspree honeypot */}
              <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {/* Submit button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-1/2 rounded-xl bg-gradient-to-r from-fuchsia-950/70 to-purple-700/60 py-3 text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-950/40 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Contact information */}
            <div className="relative z-10 font-indie md:max-w-sm">
              <div className="rounded-3xl md:bg-white/65 md:p-5 md:shadow-sm">
                <p className="mb-6 leading-relaxed md:mt-5">
                  Whether you have a project in mind, need a helping hand, or
                  just feel like saying hi,
                  <br />
                  <br />
                  I’d truly love to hear from you.
                  <br />
                  <br />
                  No pressure, no formalities, just a genuine chat between
                  humans. 💬
                  <br />
                  <br />
                  Let&apos;s create something meaningful, together. ✨
                </p>

                {/* Location */}
                <div className="mb-3 mt-4 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10 2a6 6 0 0 0-6 6c0 4 6 10 6 10s6-6 6-10a6 6 0 0 0-6-6Zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
                  </svg>

                  <span className="text-sm text-gray-800">
                    Brussels, Belgium
                  </span>
                </div>

                {/* Email button */}
                <div className="mb-5 flex w-full justify-end md:mb-0 md:mt-6">
                  <a
                    href="mailto:Anaflous.Zaahra@outlook.com"
                    className="group block w-28 rounded-2xl border border-fuchsia-950/15 bg-fuchsia-950/10 p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-fuchsia-950/55 hover:shadow-md md:w-32"
                  >
                    <span className="flex items-center justify-center gap-2 font-semibold text-fuchsia-950 transition-colors group-hover:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0L12 13.5 2.25 6.75"
                        />
                      </svg>

                      Email Me
                    </span>
                  </a>
                </div>
              </div>

              <h2 className="mt-10 text-lg font-semibold text-fuchsia-950 md:hidden">
                Or...
              </h2>
            </div>
          </div>
        </main>

        <HomeFooter />
      </div>
    </div>
  );
}