import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";
import design from "../../public/design.png";
import database from "../../public/database.png";
import computer from "../../public/computer.png";

export default function About() {
  return (
    <>
      <div>
        <h3 className="text-2xl md:text-3xl text-text-head py-3">
          About & Skills
        </h3>
        <p className="text-sm md:text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
          I&apos;m a recently graduated Full-Stack Web Developer from
          <a
            href="https://www.hackyourfuture.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-teal-500"> Hack Your Future</span>
          </a>
          , a coding school, who has relocated to the Netherlands with a strong
          passion for pursuing a career in IT.
        </p>
        <p className="text-sm md:text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
          Continuous learning is a fundamental part of being a web developer,
          and I stay up to date with the latest industry trends and
          technologies. I&apos;m always excited to explore new frameworks,
          libraries, and techniques that can enhance my skills.
        </p>
        <p className="text-sm md:text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
          Collaboration is an essential aspect of my work philosophy. I thrive
          in a team environment, where I can share ideas, learn from others, and
          contribute my skills to achieve collective success. I&apos;m a good
          communicator and always strive to understand the unique requirements
          of each project, ensuring that my work aligns with the client&apos;s
          vision and goals.
        </p>
        <p className="text-sm md:text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
          If you&apos;re interested in discussing opportunities or collaborating
          on projects, please feel free to reach out.
        </p>
      </div>

      {/* SKILLS */}
      <div className="lg:flex gap-10">
        {/* frontend */}
        <div className="text-center shadow-2xl dark:shadow-slate-700 p-5 rounded-xl my-10 dark:bg-slate-900 flex-1 hover:shadow-md ease-in-out duration-700">
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
            I like to code things, and enjoy bringing ideas to life in the
            browser.
          </p>
          <h4 className="py-4 text-lg text-teal-600">Languages I speak:</h4>
          <p className="text-slate-500 py-1">
            HTML, CSS, JavaScript, React.js, Next.js, Tailwind, Sass, APIs,
            MaterialUI
          </p>
          <h4 className="pt-4 text-lg text-teal-600">Dev Tools:</h4>
          <p className="text-gray-500 py-1">VS Code</p>
          <p className="text-gray-500 py-1">Terminal</p>
          <p className="text-gray-500 py-1">GitHub</p>
        </div>

        {/* backend */}
        <div className="text-center shadow-2xl dark:shadow-slate-700 p-5 rounded-xl my-10 dark:bg-slate-900 flex-1 hover:shadow-md ease-in-out duration-700">
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
            I enjoy the challenge of building a strong backend in modern web
            app.
          </p>
          <h4 className="py-4 text-lg text-teal-600">Languages I speak:</h4>
          <p className="text-slate-500 py-1">
            Node.js, MySQL, MongoDB, Express
          </p>
          <br />
          <h4 className="pt-4 text-lg text-teal-600">Dev Tools:</h4>
          <p className="text-gray-500 py-1">MongoDB Compass</p>
          <p className="text-gray-500 py-1">MySQL</p>
          <p className="text-gray-500 py-1">Postman</p>
        </div>

        {/* tools */}
        <div className="text-center shadow-2xl dark:shadow-slate-700 p-5 rounded-xl my-10 dark:bg-slate-900 flex-1 hover:shadow-md ease-in-out duration-700">
          <div className="flex justify-center">
            <Image src={design} alt="design icon" width={100} height={100} />
          </div>
          <h3 className="text-lg font-medium pt-8 pb-2">Other</h3>
          <p className="py-2 ">
            A few essential tools that greatly assist me in my development
            process.
          </p>
          <h4 className="py-4 text-lg text-teal-600">Languages I speak:</h4>
          <p className="text-slate-500 py-1">UX, UI, Web</p>
          <br />
          <br />
          <h4 className="pt-4 text-lg text-teal-600">Helpful Tools:</h4>
          <p className="text-gray-500 py-1">Pen & Paper</p>
          <p className="text-gray-500 py-1">Figma</p>
          <p className="text-gray-500 py-1">Browsers</p>
        </div>
      </div>

      <p className="text-sm py-2 md:py-4 leading-8 text-gray-500 md:text-lg max-w-3xl mx-auto">
        You can check more information about me and my work through the
        following links:
      </p>
      <div className="flex justify-evenly text-5xl text-text-head py-5">
        <a
          href="https://github.com/Andryushik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="hover:text-slate-500 hover:-translate-y-1 transform ease-in-out duration-500" />
        </a>
        <a
          href="https://www.linkedin.com/in/andrei-popov-g/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="hover:text-slate-500 hover:-translate-y-1 transform ease-in-out duration-500" />
        </a>
        <a
          target="_blank"
          href="mailto:a.g.popov@hotmaiil.com"
          rel="noopener noreferrer"
        >
          <IoDocumentText className="hover:text-slate-500 hover:-translate-y-1 transform ease-in-out duration-500" />
        </a>
      </div>
      <p className="text-sm md:text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
        Feel free to explore my GitHub profile to see my projects,
        contributions, and coding expertise. I appreciate your visit, and I look
        forward to connecting with you on LinkedIn to further discuss my work
        and professional background.
      </p>
    </>
  );
}
