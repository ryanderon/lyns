const SectionEight = () => {
  return (
    <div>
      <div className="bg-black h-150 flex items-center overflow-hidden">
        <div className="w-1/2 h-full relative">
          <img
            src={`${import.meta.env.BASE_URL}/img/cities.jpg`}
            className="w-full h-full object-cover"
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
            src={`${import.meta.env.BASE_URL}/img/building.jpg`}
            className="w-full h-full object-cover blur-sm"
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
    </div>
  );
};

export default SectionEight;
