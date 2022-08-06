function CardsContainer() {
  return (
    <section className="flex flex-wrap gap-7 justify-center items-center my-6 py-5 px-3 max-w-7xl mx-auto">
      <div className="flex h-28 sm:h-36  w-full max-w-lg rounded-md bg-snk bg-[length:100%] bg-no-repeat overflow-hidden">
        <p className="text-lg font-bold">Shingeki No Kyojin</p>
      </div>
      <div className="flex h-28 sm:h-36  w-full max-w-lg rounded-md bg-deathnote bg-[length:100%] bg-no-repeat overflow-hidden">
        <p className="text-lg font-bold">Death Note</p>
      </div>
      <div className="flex h-28 sm:h-36  w-full max-w-lg rounded-md bg-tokyo bg-[length:100%] bg-no-repeat overflow-hidden">
        <p className="text-lg font-bold">Tokyo Revengers</p>
      </div>
      <div className="flex h-28 sm:h-36  w-full max-w-lg rounded-md bg-jk bg-[length:100%] bg-no-repeat overflow-hidden">
        <p className="text-lg font-bold">Jujutsu Kaisen</p>
      </div>
      <div className="flex h-28 sm:h-36  w-full max-w-lg rounded-md bg-kny bg-[length:100%] bg-no-repeat overflow-hidden">
        <p className="text-lg font-bold">Kimetsu no Yaiba</p>
      </div>
      <div className="flex h-28 sm:h-36  w-full max-w-lg rounded-md bg-tg bg-[length:100%] bg-no-repeat overflow-hidden">
        <p className="text-lg font-bold">Tokyo Ghoul</p>
      </div>
    </section>
  );
}

export default CardsContainer;
