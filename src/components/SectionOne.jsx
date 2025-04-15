const SectionOne = () => {
  return (
    <div className="relative h-[100vh]">
      <div className="inset-0 z-0 w-full h-full">
        <img
          src="/src/assets/hero/hero-1.jpg"
          alt="Background"
          className="w-full h-full object-cover blur-md brightness-75"
        />
      </div>

      <div className="absolute top-1/4 left-6 z-10">
        <h1 className="text-white text-[4rem] font-extrabold leading-[3.5rem]">
          through
        </h1>
        <div className="flex flex-col leading-none">
          <span className="text-yellow-400 font-extrabold text-[5rem]">
            lyn’s
          </span>
          <span className="text-yellow-400 font-extrabold text-[5rem]">
            lens
          </span>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 z-10">
        <button className="text-white text-lg font-bold underline underline-offset-4">
          step inside
        </button>
      </div>

      <div className="absolute bottom-6 right-6 z-10 max-w-md text-right text-sm font-light">
        <p>
          before time turns them into
          <br />
          ghosts, i let them live a little
          <br />
          longer.
        </p>
        <div className="w-1 h-full bg-white ml-auto mt-1" />
      </div>
    </div>
  );
};

export default SectionOne;
