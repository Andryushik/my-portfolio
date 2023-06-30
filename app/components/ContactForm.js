"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Your message sent successfully");
      setLoading(false);

      event.target.name.value = "";
      event.target.email.value = "";
      event.target.message.value = "";
    }
    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    }
  }

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-md">
      <h4 className="mb-6 text-2xl tracking-tight font-bold text-center text-text-head">
        Message Me
      </h4>
      <p className="mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Wanna hire me? Got a question? Want to send feedback? Let me know.
      </p>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label
            className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
            htmlFor="name"
          >
            Your name
          </label>
          <input
            className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-text-head"
            type="text"
            id="name"
            placeholder="Guest"
            required
            minLength={2}
            maxLength={150}
          />
        </div>

        <div>
          <label
            className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            htmlFor="email"
          >
            Your email
          </label>
          <input
            className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-text-head"
            type="email"
            id="email"
            placeholder="name@gmail.com"
            required
            minLength={5}
            maxLength={150}
          />
        </div>

        {/* <div>
          <label
            className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-text-head"
            type="text"
            id="subject"
            placeholder="Message from your website"
            required
          />
        </div> */}

        <div className="sm:col-span-2">
          <label
            className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
            htmlFor="message"
          >
            Your message
          </label>
          <textarea
            className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-text-head"
            id="message"
            rows="6"
            placeholder="Let me know how I can help you..."
            required
            minLength={5}
            maxLength={500}
          ></textarea>
        </div>
        <button
          className="py-3 px-5 font-medium text-center text-white rounded-lg bg-text-head sm:w-fit hover:bg-text-head/70 transition-all ease-in duration-200 focus:outline-none focus:ring-4 focus:ring-purple-300"
          type="submit"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
