import Image from "next/image";

export default function Devicons() {
  return (
    <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
      <div className="w-8 h-8 lg:w-12 lg:h-12">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          alt="HTML"
          height={48}
          width={48}
        />
      </div>
      <div className="w-8 h-8 lg:w-12 lg:h-12">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          alt="CSS"
          height={48}
          width={48}
        />
      </div>
      <div className="w-8 h-8 lg:w-12 lg:h-12">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript"
          height={48}
          width={48}
        />
      </div>
      <div>
        <Image
          className="w-8 h-8 lg:w-12 lg:h-12"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React.js"
          height={48}
          width={48}
        />
      </div>
      <div className="w-8 h-8 lg:w-12 lg:h-12 bg-white rounded-full p-1">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
          alt="Next.js"
          height={40}
          width={40}
        />
      </div>
      <div className="w-8 h-8 lg:w-12 lg:h-12">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          alt="Tailwind-css"
          height={48}
          width={48}
        />
      </div>
      <div className="w-8 h-8 lg:w-12 lg:h-12">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
          alt="Sass"
          height={48}
          width={48}
        />
      </div>
      {/* <div className="w-8 h-8 lg:w-12 lg:h-12">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          alt="Typescript"
          height={48}
          width={48}
        />
      </div> */}
      <div className="w-8 h-8 lg:w-12 lg:h-12">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
          alt="MaterialUI"
          height={48}
          width={48}
        />
      </div>
      <div className="w-8 h-8 lg:w-12 lg:h-12">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
          alt="Bootstrap"
          height={48}
          width={48}
        />
      </div>
      <div className="w-8 h-8 lg:w-12 lg:h-12 bg-white rounded-full p-1">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          alt="Node.js"
          height={40}
          width={40}
        />
      </div>
      <div className="w-8 h-8 lg:w-12 lg:h-12">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
          alt="Firebase"
          height={48}
          width={48}
        />
      </div>
      <div className="w-8 h-8 lg:w-12 lg:h-12">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
          alt="MongoDB"
          height={48}
          width={48}
        />
      </div>
      <div className="w-8 h-8 lg:w-12 lg:h-12">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
          alt="MySQL"
          height={48}
          width={48}
        />
      </div>
      <div className="w-8 h-8 lg:w-12 lg:h-12 bg-white rounded-full p-1">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          alt="Express"
          height={40}
          width={40}
        />
      </div>
      <div className="w-8 h-8 lg:w-12 lg:h-12">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg"
          alt="GIT"
          height={48}
          width={48}
        />
      </div>
      <div className="w-8 h-8 lg:w-12 lg:h-12 bg-white rounded-full p-1">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          alt="Figma"
          height={40}
          width={40}
        />
      </div>
    </div>
  );
}
