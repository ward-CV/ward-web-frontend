"use client";

import DetailedDescription from "./detailed_description";
import CarouselPlugin from "@/app/components/carousel/carousel";
import VerticalTabs from "./vertical_tabs";
import { BsGear } from "react-icons/bs";
import { PiDownloadSimpleThin } from "react-icons/pi";
import { CiStar } from "react-icons/ci";

const Product = () => {
  const tabs = [
    {
      id: 1,
      label: "Особенности",
      icon: CiStar,
      content: <div>Содержимое вкладки 1</div>,
    },
    {
      id: 2,
      label: "Технические характеристики",
      icon: BsGear,
      content: <div>Содержимое вкладки 2</div>,
    },
    {
      id: 3,
      label: "Загрузки",
      icon: PiDownloadSimpleThin,
      content: <div>Содержимое вкладки 3</div>,
    },
  ];

  return (
    <>
      <div className="flex max-w-7xl mx-auto flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-full flex items-center justify-center ">
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

      <div className="flex max-w-7xl mx-auto md:flex-row mb-40">
        <VerticalTabs tabs={tabs} />
      </div>
    </>
  );
};

export default Product;
