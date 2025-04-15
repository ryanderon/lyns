const SectionTwo = () => {
  return (
    <div className="bg-black p-6 h-[100vh] flex items-center gap-16">
      <div className="w-1/3 h-[60vh]">
        <img
          src={`${import.meta.env.BASE_URL}/hero/profile.jpg`}
          alt="profile"
        />
      </div>
      <div className="w-2/3">
        <div>
          <h4>
            PHOTOGRAPHER. WRITER. <br /> MEMORY ARCHIVIST.
          </h4>
          <p>
            hi i’m joline, a visual storyteller with a soft spot for overlooked
            moments. i shoot photographs the way i write poetry; tender, and
            intentional.
          </p>
        </div>
        <div>
          <h3>IN ESSENCE</h3>
          <p>
            this space is a patchwork of everything i love. from shadows and
            light, to lines and lyricism. whether it’s through a frame or a
            phrase, i tell stories that stay.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
