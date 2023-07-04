"use client";
import { useState } from "react";
import { sendContactForm } from "@/lib/api";

const initValues = { name: "", email: "", subject: "", message: "" };
const initState = { isLoading: false, error: "", values: initValues };

export default function ContactForm() {
  const [state, setState] = useState(initState);

  const { values, isLoading, error } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.id]: target.value,
      },
    }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await sendContactForm(values);
      setState(initState);

      // TODO:modal success message
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

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
            value={values.name}
            onChange={handleChange}
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
            value={values.email}
            onChange={handleChange}
          />
        </div>

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
            value={values.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          className="py-3 px-5 font-medium text-center text-white rounded-lg bg-text-head sm:w-fit hover:bg-text-head/70 transition-all ease-in duration-200 focus:outline-none focus:ring-4 focus:ring-purple-300 disabled:bg-text-head/50 disabled:text-gray-500"
          type="submit"
          disabled={
            isLoading || !values.name || !values.email || !values.message
          }
        >
          Send message
        </button>
      </form>
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
}
