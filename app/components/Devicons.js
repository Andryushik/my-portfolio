import Image from "next/image";

export default function Devicons() {
  return (
    <div className="p-5 flex justify-between">
      <div>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          alt="HTML"
          height={50}
          width={50}
        />
      </div>
      <div>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          alt="CSS"
          height={50}
          width={50}
        />
      </div>
      <div>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          alt="Tailwind-css"
          height={50}
          width={50}
        />
      </div>
      <div>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          alt="React.js"
          height={50}
          width={50}
        />
      </div>
      <div className="bg-white rounded-full p-[2px]">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
          alt="Next.js"
          height={48}
          width={48}
        />
      </div>
      <div>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript"
          height={50}
          width={50}
        />
      </div>
      <div className="bg-white rounded-full">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          alt="Node.js"
          height={50}
          width={50}
        />
      </div>
      <div>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
          alt="Sass"
          height={50}
          width={50}
        />
      </div>
      <div>
        <Image src="" alt="" height={50} width={50} />
      </div>
    </div>
  );
}
