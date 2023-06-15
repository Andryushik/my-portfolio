import SocialLinks from "./SocialLinks";

export default function Intro() {
  return (
    <section id="home">
      <div className="bg-avatar h-screen bg-fixed bg-left-bottom bg-contain bg-no-repeat">
        <div className="px-7 md:px-16 lg:px-28 xl:px-40 flex flex-col md:flex-row md:justify-end items-center h-screen bg-white/20 dark:bg-black/20 bg-gradient-to-l from-black dark:from-white">
          <div className="text-center md:text-right md:w-3/5 py-20 md:py-10">
            <h1 className="text-2xl sm:3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl py-5 text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-teal-500 font-medium drop-shadow-lg">
              Hi, <br />
              my name is <br /> Andrei
            </h1>

            <h2 className="text-2xl sm:3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl py-2 md:py-4 text-stone-500 drop-shadow-lg">
              I&apos;m a Web Developer
            </h2>

            {/* <p className="text-sm md:ml-32 lg:ml-40 xl:ml-60 2xl:ml-60 md:mt-4 py-1 md:py-5 leading-8 text-gray-400 dark:text-gray-600 md:text-xl max-w-3xl mx-auto drop-shadow-lg">
              I invite you to explore my portfolio, where you can find a
              selection of my projects.
            </p> */}
            <div className="flex justify-center md:justify-end drop-shadow-lg">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
