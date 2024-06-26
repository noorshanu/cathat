import React from "react";
import RoadmapCards from "../components/RoadmapCards";

const Intro = () => {
  return (
    <>
      <div className=" container-wrapper  px-4 ">

        <h2 className="font-sushi-one text-5xl my-2 text-[#ffffff] text-center">
          Our Products
        </h2>
        
        <div className=" big-info__inner px-4 border-[#fff] border py-2 ">
        
          <div className=" max-w-xl">
          <p className="font-medium font-sushi-one text-3xl text-black  py-2">
        CatHat: The cutest meme coin on Solana, serving up CatHat-inspired crypto fun!
        </p>
           <h1 className=" text-2xl py-3  font-sushi-one text-black  font-medium">
           1. CatHat NFTs: Dive into a world of digital CatHat art with our exclusive collection of CatHat NFTs. Rare and delicious – just like the real thing!
           </h1>

           <h1 className=" text-2xl py-3 font-sushi-one  text-black font-medium">
           2. Trading Bot: Our trading bot helps you navigate the crypto market while you enjoy your CatHat. Never miss out on the hottest trends again!

           </h1>

           <h1 className=" text-2xl py-3 font-sushi-one text-black font-medium">
           3. 24/7 Growing Community: Join our expanding community and let's grow together while munching onCatHat!
           </h1>
          </div>

          <div className=" w-full sm:w-[500px]">
           <RoadmapCards/>
          </div>

         
        </div>
      </div>
   
    </>
  );
};

export default Intro;
