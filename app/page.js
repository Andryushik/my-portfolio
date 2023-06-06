import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import deved from "../public/dev-ed-wave.png"; // TODO: remove this and file
import design from "../public/design.png";
import database from "../public/database.png";
import computer from "../public/computer.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  return (
    <main className="px-10 md:px-20 lg:px-40">
      {/* HOME/INTRO */}
      <section id="home" className="min-h-screen">
        <div className="text-center  px-5 md:px-10 py-10 md:mt-10">
          <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-teal-500 font-medium md:text-7xl">
            Andrei Popov
          </h2>
          <h3 className="text-xl py-2 md:py-4 md:text-3xl">
            Full Stack Web Developer
          </h3>
          <p className="text-sm py-4 md:py-8 leading-8 text-gray-500 md:text-xl max-w-3xl mx-auto">
            Relocated to the Netherlands and eager to pursue a new career in IT
            as a Web Developer. Recently graduated from Hack Your Future and
            filled with enthusiasm. Possess international work experience in
            customer service and sales.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-500">
          <AiFillLinkedin />
          <AiFillGithub />
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
          <Image
            src={deved}
            alt="Profile Photo"
            fill
            className="object-cover"
            priority={true}
            sizes="50vw"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div>
          <h3 className="text-3xl py-1">About & Skills</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Since the beginning of my journey as a freelance designer and
            developer, I&apos;ve done remote work for
            <span className="text-teal-500"> agencies </span>
            consulted for <span className="text-teal-500">startups </span>
            and collaborated with talented people to create digital products for
            both business and consumer use.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I offer from a wide range of services, including brand design,
            programming and teaching.
          </p>
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-900 flex-1">
            <div className="flex justify-center">
              <Image
                src={computer}
                alt="computer icon"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-lg font-medium pt-8 pb-2">Frontend</h3>
            <p className="py-2 ">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className="text-gray-500 py-1">Photoshop</p>
            <p className="text-gray-500 py-1">Illustrator</p>
            <p className="text-gray-500 py-1">Figma</p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-900 flex-1">
            <div className="flex justify-center">
              <Image
                src={database}
                alt="database icon"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-lg font-medium pt-8 pb-2">Backend</h3>
            <p className="py-2 ">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className="text-gray-500 py-1">Photoshop</p>
            <p className="text-gray-500 py-1">Illustrator</p>
            <p className="text-gray-500 py-1">Figma</p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-900 flex-1">
            <div className="flex justify-center">
              <Image src={design} alt="design icon" width={100} height={100} />
            </div>
            <h3 className="text-lg font-medium pt-8 pb-2">UX/UI Design</h3>
            <p className="py-2 ">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className="text-gray-500 py-1">Photoshop</p>
            <p className="text-gray-500 py-1">Illustrator</p>
            <p className="text-gray-500 py-1">Figma</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div>
          <h3 className="text-3xl py-1">Projects</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Since the beginning of my journey as a freelance designer and
            developer, I&apos;ve done remote work for
            <span className="text-teal-500"> agencies </span>
            consulted for <span className="text-teal-500">startups </span>
            and collaborated with talented people to create digital products for
            both business and consumer use.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I offer from a wide range of services, including brand design,
            programming and teaching.
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1">
            <Image
              src={web1}
              alt="temp"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web2}
              alt="temp"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web3}
              alt="temp"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web4}
              alt="temp"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web5}
              alt="temp"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web6}
              alt="temp"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div>
          <h3 className="text-3xl py-1">Contact</h3>
          <Image
            src={consulting}
            alt="contacts icon"
            width={100}
            height={100}
          />
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Since the beginning of my journey as a freelance designer and
            developer, I&apos;ve done remote work for
            <span className="text-teal-500"> agencies </span>
            consulted for <span className="text-teal-500">startups </span>
            and collaborated with talented people to create digital products for
            both business and consumer use.
          </p>
        </div>
      </section>
    </main>
  );
}
