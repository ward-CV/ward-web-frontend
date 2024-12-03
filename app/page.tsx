import CarouselPlugin from "./components/carousel/carousel";
import AboutUs from "./components/info/about_us";

export default function Home() {
  return (
    <div className="flex max-w-7xl mx-auto flex-col md:flex-row">
      {/* Левая часть с AboutUs */}
      <div className="w-full md:w-1/2 h-full p-8 flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <AboutUs />
        </div>
      </div>

      {/* Правая часть с CarouselPlugin */}
      <div className="w-full md:w-1/2 h-full p-8 flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <CarouselPlugin imagePaths="CarouselPlugin" />
        </div>
      </div>
    </div>
  );
}
