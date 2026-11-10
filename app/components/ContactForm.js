import { useEffect, useEffectEvent } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "next-themes";
import { sendContactForm } from "@/lib/api";
import { contactFormSchema } from "@/validation/contactFormValidation";
import { ToastContainer, toast } from "react-toastify";

export default function ContactForm() {
  const contactForm = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      _gotcha: "",
    },
    resolver: yupResolver(contactFormSchema),
    mode: "onTouched",
    // focusFirstError does it, once the error is on the page.
    shouldFocusError: false,
  });

  const { register, handleSubmit, formState, reset, setError, setFocus } =
    contactForm;
  const { errors, isSubmitting, isSubmitSuccessful, submitCount } = formState;

  const { resolvedTheme } = useTheme();

  const onSubmit = async (data) => {
    try {
      await sendContactForm(data);
      toast.success("Message sent successfully!", {
        icon: () => "🚀",
        autoClose: 3000,
      });
    } catch {
      // Marks the submit unsuccessful, so the form isn't reset.
      setError("root.server", {
        message:
          "Sorry, your message wasn't sent. Please try again or message me on LinkedIn.",
      });
    }
  };

  // react-hook-form recommends resetting after submit here, not in onSubmit.
  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  // Focus the first invalid field once its error renders, so screen readers read both.
  // An Effect Event, so errors changing while typing don't move focus.
  const focusFirstError = useEffectEvent(() => {
    const field = ["name", "email", "message"].find((name) => errors[name]);
    if (!field) return;
    // Refocusing a focused field does nothing; blur it so the error is read.
    if (document.activeElement?.id === field) document.activeElement.blur();
    setFocus(field);
  });
  useEffect(() => {
    focusFirstError();
  }, [submitCount]);

  return (
    <div className="py-8 px-4 mx-auto max-w-3xl">
      <h3 className="mb-6 text-2xl tracking-tight font-bold text-center text-text-head">
        Message Me
      </h3>
      <p className="mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Have a question, a project or a job opportunity? Let me know.
      </p>
      <form
        className="space-y-8"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        {/* Honeypot: hidden from people; autofill doesn't know the name. */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="gotcha">Leave this field empty</label>
          <input
            type="text"
            id="gotcha"
            tabIndex={-1}
            autoComplete="off"
            {...register("_gotcha")}
          />
        </div>

        <div>
          <label
            className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
            htmlFor="name"
          >
            Your name
          </label>
          <input
            className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg dark:bg-gray-700 dark:border-gray-600 placeholder-gray-400 dark:text-white focus:outline-text-head"
            type="text"
            id="name"
            placeholder="Jane Doe"
            aria-invalid={Boolean(errors.name)}
            aria-describedby="name-error"
            {...register("name")}
          />
          <p id="name-error" className="absolute text-red-600 dark:text-red-400 text-sm">
            {errors.name?.message}
          </p>
        </div>

        <div>
          <label
            className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            htmlFor="email"
          >
            Your email
          </label>
          <input
            className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg dark:bg-gray-700 dark:border-gray-600 placeholder-gray-400 dark:text-white focus:outline-text-head"
            type="email"
            id="email"
            placeholder="name@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby="email-error"
            {...register("email")}
          />
          <p id="email-error" className="absolute text-red-600 dark:text-red-400 text-sm">
            {errors.email?.message}
          </p>
        </div>

        <div className="sm:col-span-2">
          <label
            className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
            htmlFor="message"
          >
            Your message
          </label>
          <textarea
            className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg dark:bg-gray-700 dark:border-gray-600 placeholder-gray-400 dark:text-white focus:outline-text-head"
            id="message"
            rows="5"
            data-lenis-prevent
            placeholder="How can I help?"
            aria-invalid={Boolean(errors.message)}
            aria-describedby="message-error"
            {...register("message")}
          ></textarea>
          <p id="message-error" className="absolute text-red-600 dark:text-red-400 text-sm">
            {errors.message?.message}
          </p>
        </div>
        <div className="md:flex md:items-center">
          <button
            className="block mx-auto md:mx-0 shrink-0 py-3 px-5 font-medium text-center text-white rounded-lg bg-button sm:w-fit hover:bg-button-hover transition-all ease-in duration-200 focus:outline-hidden focus:ring-4 focus:ring-purple-300 disabled:bg-button/50 disabled:text-gray-500"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600"
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
          {/* Always rendered: an alert is announced when its text changes. */}
          <span
            role="alert"
            className={
              errors.root?.server
                ? "block mt-8 md:mt-0 pl-8 text-red-600 dark:text-red-400"
                : undefined
            }
          >
            {errors.root?.server?.message}
          </span>
        </div>
      </form>

      <ToastContainer
        progressClassName="toast-progress"
        toastStyle={{
          border: "2px solid rgb(148 163 184)",
        }}
        position="top-center"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={resolvedTheme}
      />
    </div>
  );
}
