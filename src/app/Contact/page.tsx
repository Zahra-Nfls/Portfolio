"use client";
import { useState } from "react";

export default function Contact() {  // <-- Assure-toi que c'est une exportation par défaut
  const [showSuccess, setShowSuccess] = useState(false);

  const sanitizeInput = (text: string) => {
    return text.replace(/[<>]/g, ""); // Supprime les balises HTML
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.set("email", sanitizeInput(formData.get("email") as string));
    formData.set("subject", sanitizeInput(formData.get("subject") as string));
    formData.set("message", sanitizeInput(formData.get("message") as string));

    const response = await fetch("https://formspree.io/f/xqaenokn", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setShowSuccess(true);
      event.currentTarget.reset();
      setTimeout(() => setShowSuccess(false), 5000);
    } else {
      alert("Une erreur est survenue, veuillez réessayer.");
    }
  };

  return (
    <>
      <section className="pt-36 pb-20 bg-gradient-to-b from-rose-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-moi</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Que ce soit pour un projet web ou une opportunité, je suis à votre disposition.
          </p>
        </div>
      </section>

      <section className="pt-20 pb-36 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Infos de contact */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Informations de contact</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Vous pouvez me contacter via ce formulaire ou par email. Je répondrai rapidement !
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-900/20 flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <p className="font-medium text-lg">Email</p>
                    <a
                      href="mailto:email@example.com"
                      className="text-gray-600 dark:text-gray-300 hover:text-rose-600 transition-colors"
                    >
                      email
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-900/20 flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <p className="font-medium text-lg">Localisation</p>
                    <p className="text-gray-600 dark:text-gray-300">Liège, Belgique</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <form className="space-y-6 relative" onSubmit={handleSubmit} method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-800 focus:ring-2 focus:ring-rose-500 outline-none transition-shadow"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-800 focus:ring-2 focus:ring-rose-500 outline-none transition-shadow"
                  placeholder="Le sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-800 focus:ring-2 focus:ring-rose-500 outline-none transition-shadow resize-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              {/* Honeypot (champ caché anti-spam) */}
              <input type="text" name="_gotcha" style={{ display: "none" }} />

              <button
                type="submit"
                className="w-full px-6 py-3 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition-colors"
              >
                ✉️ Envoyer le message
              </button>

              {showSuccess && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-xl shadow-md">
                  ✅ Message envoyé avec succès !
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
