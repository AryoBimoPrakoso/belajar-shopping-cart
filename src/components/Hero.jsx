import React from "react";
import hero1 from "../assets/img/hero.jpg";
import hero2 from "../assets/img/hero2.jpg";
import hero3 from "../assets/img/hero3.jpg";

// Import carousel
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {


  return (
    <div className="w-full">
      <Carousel
        className="w-full relative max-w-screen-xl mx-auto"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="w-full">
          <CarouselItem className="w-full">
            <img
              src={hero1}
              alt=""
              className="w-full max-h-[400px] object-cover rounded-xl shadow-md"
            />
          </CarouselItem>
          <CarouselItem className="w-full">
            <img
              src={hero2}
              alt=""
              className="w-full max-h-[400px] object-cover rounded-xl shadow-md"
            />
          </CarouselItem>
          <CarouselItem className="w-full">
            <img
              src={hero3}
              alt=""
              className="w-full max-h-[400px] object-cover rounded-xl shadow-md"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full" />
      </Carousel>
    </div>
  );
};

export default Hero;
