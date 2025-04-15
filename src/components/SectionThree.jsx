const SectionThree = () => {
  return (
    <div>
      <div className="bg-black h-150 flex items-center overflow-hidden">
        <img
          className="w-1/2 h-full object-cover"
          src="/src/assets/hero/hero-2.jpg"
          alt="hero 2"
        />
        <img
          className="w-1/2 h-full object-cover"
          src="/src/assets/hero/hero-3.jpg"
          alt="hero 2"
        />
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

export default SectionThree;
