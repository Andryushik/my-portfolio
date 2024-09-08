import SocialLinks from "../components/SocialLinks";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section id="contact">
      <div className="py-14 md:py-24 px-7 md:px-16 max-w-7xl mx-auto">
        <h3 className="text-2xl md:text-3xl text-text-head py-1 drop-shadow-md">
          Contacts
        </h3>

        <ContactForm />

        <div className="flex justify-center">
          <SocialLinks />
        </div>

        <p className="text-sm md:text-base pt-12 leading-8 text-gray-800 dark:text-gray-200">
          This portfolio website has been created using Next.js, Framer Motion
          and Tailwind CSS. The
          <a
            href="https://github.com/Andryushik/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-teal-500"> code source </span>
          </a>
          is available on my GitHub page.
          <br />
          Thx for visit. See you again!
        </p>
      </div>
    </section>
  );
}
