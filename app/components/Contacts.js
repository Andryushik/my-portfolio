import Image from "next/image";
import { CiMail, CiLocationOn } from "react-icons/ci";
import contact from "../../public/contact.png";

export default function Contacts() {
  return (
    <>
      <div>
        <h3 className="text-3xl py-1">Contact</h3>
        <Image src={contact} alt="contacts icon" width={100} height={100} />
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Since the beginning of my journey as a freelance designer and
          developer, I&apos;ve done remote work for
          <span className="text-teal-500"> agencies </span>
          consulted for <span className="text-teal-500">startups </span>
          and collaborated with talented people to create digital products for
          both business and consumer use.
        </p>
        <div className="p-7 flex justify-around items-center gap-5 flex-col md:flex-row">
          <a
            target="_blank"
            href="mailto:a.g.popov@hotmaiil.com"
            rel="noopener noreferrer"
          >
            <div className="text-5xl md:text-6xl flex items-center">
              <CiMail />
              <div className="flex flex-col ml-5">
                <span className="text-sm md:text-base">Mail: </span>
                <span className="text-sm md:text-base underline">
                  a.g.popov@hotmail.com
                </span>
              </div>
            </div>
          </a>
          <a target="_blank" href="#" rel="noopener noreferrer">
            <div className="text-5xl flex items-center">
              <CiLocationOn />
              <div className="flex flex-col ml-5">
                <span className="text-sm md:text-base">Address: </span>
                <span className="text-sm md:text-base underline">
                  Maastricht, Netherlands
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
