import Image from "next/image";
import web1 from "../../public/web1.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";

export default function Projects() {
  return (
    <>
      <div>
        <h3 className="text-2xl md:3xl py-1">Projects</h3>
        <p className="text-sm md:text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
          As a junior web developer, I have endeavored to utilize various
          approaches in each of my projects to enhance my skills and gain
          diverse experience. This has enabled me to become proficient in
          multiple frameworks and technologies.
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

      <p className="text-sm md:text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
        P.S. This portfolio website has been created using Next.js and Tailwind
        CSS. With Next.js, I have been able to leverage server-side rendering
        and efficient routing, while Tailwind CSS has provided a flexible and
        utility-based approach to styling. The combination of Next.js and
        Tailwind CSS has allowed me to create a seamless and responsive user
        experience.
      </p>
    </>
  );
}
