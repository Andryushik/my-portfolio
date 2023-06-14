import SocialLinks from "./SocialLinks";

export default function Contacts() {
  return (
    <div className="pt-14 md:pt-20 px-7 md:px-16 lg:px-28 xl:px-40">
      <h3 className="text-2xl md:text-3xl text-text-head py-1">Contact</h3>

      {/* TODO: <ContactForm /> */}

      <div className="flex justify-center">
        <SocialLinks />
      </div>

      <p className="text-sm md:text-base pt-12 pb-5 leading-8 text-gray-800 dark:text-gray-200">
        Thank you for visiting my portfolio, and I look forward to the
        possibility of working together!
      </p>
    </div>
  );
}
