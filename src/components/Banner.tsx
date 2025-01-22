import React from "react";
import Image from "next/image";
import Img1 from "@/assets/trib.-frutas-2.png";

const Banner = () => {
    return(

        <div className="my-12 flex border-none">
            <div className="w-full h-80 relative opacity-10">
            <Image 
            src={Img1} 
            alt="Banner"
            layout="fill"
            objectFit="cover"
            className="z-0"/>
            </div>
        
            <div className="absolute text-center text-emerald-800 z-10 font-serif">
                <h1 className="text-4xl font-bold drop-shadow-lg mt-28 ml-80">
                    Confira nossas ofertas imperdíveis!
                </h1>
                <p className="text-4xl font-bold mt-10 absolute left-80">
                    Explore o nosso site!</p>
            </div>

        
        </div>
           

    

    
    )
}

export default Banner;