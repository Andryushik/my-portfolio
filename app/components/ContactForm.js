import { useEffect, useEffectEvent } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "next-themes";
import { sendContactForm } from "@/lib/api";
import { contactFormSchema } from "@/validation/contactFormValidation";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

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
        Hiring, have a project in mind, or just want to say hi? I&apos;d love to hear from you.
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

        <div>
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
                <AiOutlineLoading3Quarters
                  aria-hidden="true"
                  className="inline w-4 h-4 mr-3 motion-safe:animate-spin"
                />
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
