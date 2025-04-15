const SectionSeven = () => {
  return (
    <div className="bg-black h-[100vh] flex items-center gap-16 relative">
      <img
        className="w-full h-full"
        src={`${import.meta.env.BASE_URL}/img/rattlesong.jpg`}
        alt="rattlesong"
      />
      <div className="absolute bottom-40 right-20 text-right">
        <h4>RATTLESONG</h4>
        <p>
          veins of wrinkle in brittle hush, <br />
          secrets snag on thorn and dust. <br />
          the trees remember what we lose— <br />
          they whisper it back in rattles.
        </p>
      </div>
    </div>
  );
};

export default SectionSeven;
