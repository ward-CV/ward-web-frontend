import DetailedDescription from "./detailed_description";
import CarouselPlugin from "@/app/components/carousel/carousel";

const Product = () => {
  return (
    <div className="flex max-w-7xl mx-auto flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-full p-8 flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <CarouselPlugin imagePaths="CarouselPlugin" />
        </div>
      </div>

      <div className="w-full md:w-1/2 h-full p-8 ">
        <div className="w-full h-full ">
          <DetailedDescription />
        </div>
      </div>
    </div>
  );
};

export default Product;
