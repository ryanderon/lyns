const SectionFour = () => {
  return (
    <div>
      <div className="bg-black h-150 flex items-center overflow-hidden">
        <div className="w-1/3 h-full">
          <img
            src={`${import.meta.env.BASE_URL}/img/scenes_of_life.jpg`}
            className="object-cover h-[70%] w-full"
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
            src={`${import.meta.env.BASE_URL}/img/mooncake.jpg`}
            className="object-cover h-[70%] w-full"
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
            src={`${import.meta.env.BASE_URL}/img/monochrome.jpg`}
            className="object-cover h-[70%] w-full"
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
