"use client";
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const botToken = "8371697112:AAFkTjSV2hpBVO7kc_G8VG123c2c05tZbxY";
  const chatId = "7561832483"; // Masalan: "123456789"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const text = "Yangi xabar!\n\n" + 
               "Ism: " + formData.name + "\n" +
               "Email: " + formData.email + "\n" +
               "Tel: " + formData.phone + "\n" +
               "Xabar: " + formData.message;

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: "7561832483", 
        text: text
      })
    });

    if (response.ok) {
      alert("Xabar yuborildi!");
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      // Xatoni aniqroq tushunish uchun javobni konsolga chiqaramiz
      const errorData = await response.json();
      console.log("Telegram xatosi:", errorData);
      alert("Xatolik: " + errorData.description);
    }
  } catch (error) {
    console.error("Xatolik:", error);
  }
};
  return (
    <section className="bg-[#E5E5E5] py-20 px-4 flex flex-col items-center">
      <div className="mb-12 text-center">
        <h2 className="inline-block text-2xl font-black border-[5px] border-black px-12 py-3 uppercase tracking-[0.3em] mb-8">
          Contact
        </h2>
        <p className="text-[11px] text-gray-600 max-w-md mx-auto leading-relaxed">Bog'lanish uchun</p>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-8 mt-8">
        <input
          type="text"
          name="name"
          required
          placeholder="Ismingizni Kiriting*"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-transparent border-l-4 border-b-4 border-black p-3 text-xs font-bold tracking-widest placeholder:text-gray-400 outline-none focus:bg-white/50 transition-all"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Emailingizni Kiriting*"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-transparent border-l-4 border-b-4 border-black p-3 text-xs font-bold tracking-widest placeholder:text-gray-400 outline-none focus:bg-white/50 transition-all"
        />
        <input
          type="text"
          name="phone"
          placeholder="Telefon Raqamingizni Kiriting"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-transparent border-l-4 border-b-4 border-black p-3 text-xs font-bold tracking-widest placeholder:text-gray-400 outline-none focus:bg-white/50 transition-all"
        />
        <textarea
          name="message"
          rows="4"
          required
          placeholder="Sizning So'rovingiz*"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-transparent border-l-4 border-b-4 border-black p-3 text-xs font-bold tracking-widest placeholder:text-gray-400 outline-none focus:bg-white/50 transition-all"
        />
        
        <div className="flex justify-center mt-12">
          <button type="submit" className="border-l-4 border-r-4 border-black px-12 py-2 text-xs font-black tracking-[0.3em] hover:bg-black hover:text-white transition-all uppercase">
            Yuborish
          </button>
        </div>
      </form>
    </section>
  );
}