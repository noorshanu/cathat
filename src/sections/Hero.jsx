function Hero() {
  return (
    <section className=" py-6">
      <div className="container-wrapper">
        <div className="relative z-50">
          <div className=" flex justify-between flex-col sm:flex-row items-center ">
            <div className=" w-full bg-[#f5b0bbe8]  border rounded-lg p-5 shadow-lg">
              <h1 className=" font-sushi-one text-4xl my-4 text-[#d95a83]">
              Welcome to the world of CatHat on Solana! :
              </h1>

              <p className="font-sushi-one text-xl text-black">
               The purrfect blend
                of Japanese charm, meme magic, and delicious crypto goodness!  CatHat isn't just your ordinary feline;
              </p>

              <p className=" font-sushi-one text-xl text-black py-1">
               This adorable kitty
                is on a mission to satisfy appetites and make holders grow
                bigger than a sumo wrestler on a Hat binge! With each tasty
                morsel devoured, CatHat's hunger grows, and so does the
                community's excitement! Join our vibrant community of food
                lovers, crypto enthusiasts, and CatHat meme fans for a
                purrfectly fun ride!
              </p>

              <div className=" py-2">
                <a
                  href="https://solscan.io/token/AtWjUVrzT6pqW4TDBdCezmfZgoMgN2MJNjm2RNs9JTpg"
                  target="_blank"
                  className="my-2 flex justify-start text-base  text-black  sm:text-xl"
                >
                  {" "}
                  Contract : AtWjUVrzT6pqW4TDBdCezmfZgoMgN2MJNjm2RNs9JTpg
                </a>
              </div>
              <div className="relative z-40 flex items-center justify-start my-4 max-sm:flex-col max-sm:space-y-4 sm:space-x-5">
                <a
                  href="https://x.com/CatHat_1"
                  target="_blank"
                  className="py-2 text-base uppercase font-sushi-one px-10 rounded-full bg-gradient-to-b from-[#000000] to-[#2B0000] shadow-lg shadow-black/40 text-white  font-bold border border-white"
                >
                 twitter
                </a>
                <a
                  href="https://t.me/cathatso" target="_blank"
                  className="text-base py-2 uppercase font-sushi-one px-10 rounded-full bg-gradient-to-b from-[#e47369] to-[#f1a3ff] shadow-lg shadow-black/40 text-black  font-bold border border-yellow"
                >
                  join telegram
                </a>

                <a
                  href="https://www.dextools.io/app/en/solana/pair-explorer/D92SBNLu2JYxYQPzvMameoS4dzCpVtfec7zVAs53NrKu?t=1712145743223"
                  target="_blank"
                  className="py-2 text-base uppercase font-sushi-one px-10 rounded-full bg-gradient-to-b from-[#000000] to-[#2B0000] shadow-lg shadow-black/40 text-white  font-bold border border-white"
                >
                  Dex Tool
                </a>
              </div>
            </div>

            <div className=" w-full">
              <div>
                <img src="images/hero.png" alt="" className=" mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
