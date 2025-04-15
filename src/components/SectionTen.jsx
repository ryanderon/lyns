const SectionTen = () => {
  return (
    <div className="bg-black h-[100vh] flex items-center gap-16 relative">
      <img
        className="w-full h-full"
        src={`${import.meta.env.BASE_URL}/img/verdigris.jpg`}
        alt="verdigris"
      />
      <div className="absolute bottom-40 right-20 text-right w-100">
        <h4>VERDIGRIS</h4>
        <p>
          we never spoke of the other skin, <br />
          soft-fleshed and blinking beneath. <br />
          roots dream in fluent lies— <br />
          what we shed keeps growing limbs
        </p>
      </div>
    </div>
  );
};

export default SectionTen;
