// TODO: Remove

export default function Skills() {
  return (
    <>
      {/* SKILLS */}
      <div className="lg:flex gap-10">
        {/* frontend */}
        <div className="text-center shadow-xl md:shadow-2xl dark:shadow-slate-700 p-5 rounded-xl my-10 dark:bg-slate-900 flex-1 hover:shadow-md ease-in-out duration-700">
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
        <div className="text-center shadow-xl md:shadow-2xl dark:shadow-slate-700 p-5 rounded-xl my-10 dark:bg-slate-900 flex-1 hover:shadow-md ease-in-out duration-700">
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
        <div className="text-center shadow-xl md:shadow-2xl dark:shadow-slate-700 p-5 rounded-xl my-10 dark:bg-slate-900 flex-1 hover:shadow-md ease-in-out duration-700">
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
    </>
  );
}
