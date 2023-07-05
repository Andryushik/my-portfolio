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
          {isLoading ? (
            <>
              <svg
                aria-hidden="true"
                role="status"
                class="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#1C64F2"
                />
              </svg>
              Sending...
            </>
          ) : (
            "Send message"
          )}
        </button>
      </form>
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
}
