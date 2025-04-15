const SectionEight = () => {
  return (
    <div>
      <div className="bg-black h-150 flex items-center overflow-hidden">
        <div className="w-1/2 h-full relative">
          <img
            className="w-full h-full object-cover"
            src="/src/assets/img/cities.jpg"
            alt="hero 2"
          />
          <div className="absolute bottom-10 left-10 flex">
            <h3 className="w-1/3 font-bold text-4xl">
              LOST <br />
              FUGUE
            </h3>
            <p className="w-1/3">
              the city sways in fractured light, <br />
              faces smudged like rain on glass.
            </p>
            <p className="w-1/3">
              footsteps vanish in wet glow, <br />
              nothing holds, nothing stays.
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full relative">
          <img
            className="w-full h-full object-cover blur-sm"
            src="/src/assets/img/building.jpg"
            alt="hero 2"
          />
          <div className="absolute bottom-10 left-10 flex">
            <h3 className="w-1/3 font-bold text-4xl">RUSTLINE</h3>
            <p className="w-1/3">
              the gate hums low, <br />
              teeth bared in rust.
            </p>
            <p className="w-1/3">
              a figure walks ahead, <br />
              unraveling a name unspoken, <br />a moment unkept.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="bg-black h-150 flex items-center overflow-hidden">
          <img
            className="w-1/2 h-full object-cover filter grayscale"
            src="/src/assets/hero/hero-2.jpg"
            alt="hero 2"
          />
          <img
            className="w-1/2 h-full object-cover filter grayscale"
            src="/src/assets/hero/hero-3.jpg"
            alt="hero 2"
          />
        </div> */}
    </div>
  );
};

export default SectionEight;
