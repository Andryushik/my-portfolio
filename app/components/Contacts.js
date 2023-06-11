import Image from "next/image";
import { CiMail, CiLocationOn } from "react-icons/ci";

export default function Contacts() {
  return (
    <>
      <div>
        <h3 className="text-2xl md:text-3xl text-text-head py-1">Contact</h3>

        <div className="p-7 flex justify-around items-center gap-5 flex-col md:flex-row">
          <a
            target="_blank"
            href="mailto:a.g.popov@hotmail.com?subject=[Website]"
            rel="noopener noreferrer"
          >
            <div className="text-5xl md:text-6xl flex items-center hover:text-text-head ease-in-out duration-500">
              <CiMail />
              <div className="flex flex-col ml-5">
                <span className="text-sm md:text-base">Mail: </span>
                <span className="text-sm md:text-base underline">
                  a.g.popov@hotmail.com
                </span>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://goo.gl/maps/TUnFzdNQGJRJjCSz6"
            rel="noopener noreferrer"
          >
            <div className="text-5xl md:text-6xl flex items-center hover:text-text-head ease-in-out duration-500">
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

        <p className="text-sm md:text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
          Thank you for visiting my portfolio, and I look forward to the
          possibility of working together!
        </p>
      </div>
    </>
  );
}
