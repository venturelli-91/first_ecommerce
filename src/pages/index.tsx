import Banner from "@/components/Banner";
import NavigationBar from "@/components/NavigationBar";
import MainSection from "@/components/Sections/MainSection";
import SlideOffer from "@/components/SlideOffer";
import React from "react";


export default function Home() {
    return(
    
    <main>
      
      <NavigationBar></NavigationBar>
      <Banner />
      <SlideOffer></SlideOffer>   
      <MainSection/>
      
    </main>
    

  );
};