const SectionFour = () => {
  return (
    <div>
      <div className="bg-black h-150 flex items-center overflow-hidden">
        <div className="w-1/3 h-full">
          <img
            className="object-cover h-[70%] w-full"
            src="/src/assets/hero/scenes_of_life.jpg"
            alt="hero 2"
          />
          <div className="p-4">
            <p>Scenes of Life</p>
            <p>
              | <i>Nature, Sceneries</i>
            </p>
          </div>
        </div>
        <div className="w-1/3 h-full">
          <img
            className="object-cover h-[70%] w-full"
            src="/src/assets/hero/mooncake.jpg"
            alt="hero 2"
          />
          <div className="p-4">
            <p>Objects in Time</p>
            <p>
              | <i>Product Photography</i>
            </p>
          </div>
        </div>
        <div className="w-1/3 h-full">
          <img
            className="object-cover h-[70%] w-full"
            src="/src/assets/img/monochrome.jpg"
            alt="hero 2"
          />
          <div className="p-4">
            <p>Objects in Time</p>
            <p>
              | <i>Product Photography</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionFour;
