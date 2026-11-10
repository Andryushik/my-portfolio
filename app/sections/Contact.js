import SocialLinks from "../components/SocialLinks";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section id="contact">
      <div className="py-14 md:py-24 px-7 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-text-head py-1 drop-shadow-md">
          Contact
        </h2>

        <ContactForm />

        <div className="flex justify-center">
          <SocialLinks />
        </div>

        <p className="text-sm/8 md:text-base pt-12 text-gray-800 dark:text-gray-200">
          This site is built with Next.js, Motion and Tailwind CSS. The{" "}
          <a
            className="text-text-head underline"
            href="https://github.com/Andryushik/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            source code
          </a>{" "}
          is available on GitHub.
          <br />
          Thanks for visiting!
        </p>
      </div>
    </section>
  );
}
