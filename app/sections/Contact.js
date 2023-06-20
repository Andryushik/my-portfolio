import SocialLinks from "../components/SocialLinks";
// import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact">
      <div className="py-14 md:py-24 px-7 md:px-16 lg:px-28 xl:px-40">
        <h3 className="text-2xl md:text-3xl text-text-head py-1 drop-shadow-md">
          Contact
        </h3>

        {/* TODO: */}
        {/* <ContactForm /> */}

        <div className="flex justify-center">
          <SocialLinks />
        </div>
        <p className="text-sm md:text-base pt-12 leading-8 text-gray-800 dark:text-gray-200">
          Thank you for visiting my portfolio, and I look forward to the
          possibility of working together!
        </p>
      </div>
    </section>
  );
}
