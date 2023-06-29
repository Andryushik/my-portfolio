import React from "react";

export default function ContactForm() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-md">
      <h4 className="mb-6 text-2xl tracking-tight font-bold text-center text-text-head">
        Message Me
      </h4>
      <p className="mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Wanna hire me? Got a question? Want to send feedback? Let me know.
      </p>
      <form onSubmit="" className="space-y-8">
        <div>
          <label
            for="email"
            className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-text-head"
            placeholder="name@gmail.com"
            required
          />
        </div>
        <div>
          <label
            for="subject"
            className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-text-head"
            placeholder="Let me know how I can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            for="message"
            className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="6"
            className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-text-head"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-3 px-5 font-medium text-center text-white rounded-lg bg-text-head sm:w-fit hover:bg-text-head/70 transition-all ease-in duration-200 focus:outline-none focus:ring-4 focus:ring-purple-300"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
