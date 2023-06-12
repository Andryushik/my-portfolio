import SocialLinks from "./SocialLinks";

export default function HomeIntro() {
  return (
    <div className="h-screen bg-fixed bg-left-bottom bg-contain bg-no-repeat hero-bg">
      <div className="px-7 md:px-16 lg:px-28 xl:px-40 flex flex-col md:flex-row md:justify-end items-center h-screen bg-white/30 dark:bg-black/30 bg-gradient-to-l from-black dark:from-white">
        <div className="text-center md:text-right md:w-3/5 py-20 md:py-10">
          <h1 className="text-3xl sm:4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl py-5 text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-teal-500 font-medium">
            Andrei Popov
          </h1>

          <h2 className="text-2xl sm:3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl py-2 md:py-4 ">
            Web Developer
          </h2>

          <p className="text-sm md:ml-32 lg:ml-40 xl:ml-60 2xl:ml-60 md:mt-14 py-1 md:py-5 leading-8 text-gray-500 md:text-xl max-w-3xl mx-auto">
            I invite you to explore my portfolio, where you can find a selection
            of my projects that highlight my abilities and showcase my diverse
            range of work.
          </p>

          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
