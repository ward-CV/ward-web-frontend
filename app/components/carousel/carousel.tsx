"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface CarouselPluginProps {
  imagePaths: string;
}

export default function CarouselPlugin({ imagePaths }: CarouselPluginProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <div className="w-full h-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full sm:h-64 md:h-96 lg:h-auto"
      >
        <CarouselContent className="p-0">
          {Array.from({ length: 2 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="w-full h-full">
                  <Image
                    src={`/${imagePaths}${index + 1}.jpg`}
                    alt={`Slide ${index + 1}`}
                    width={1280}
                    height={960}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      borderRadius: "8px",
                    }}
                  />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
