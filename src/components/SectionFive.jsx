const SectionFive = () => {
  return (
    <div className="bg-black h-[100vh] flex items-center gap-16 relative">
      <img
        className="w-full h-full"
        src={`${import.meta.env.BASE_URL}/img/ant.jpg`}
        alt="ant"
      />
      <div className="absolute bottom-40 right-20 text-right">
        <h4>
          A WORLD <br />
          WITHIN A DROP
        </h4>
        <p>
          the leaf bows under jeweled sorrow, <br />
          each drop—sky’s painted grief. <br /> <br />
          a tiny pilgrim treads floor of gold, <br />
          carrying whispers that do not ask.
        </p>
      </div>
    </div>
  );
};

export default SectionFive;
