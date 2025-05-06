import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "@/customer/components/HomeSectionCarousel/HomeSectionCarousel";
import { dummyData } from "@/Data/dummyData";

export const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={dummyData} sectionName={"Games"} />
        <HomeSectionCarousel data={dummyData} sectionName={"watch"} />
        <HomeSectionCarousel data={dummyData} sectionName={"book"} />
        <HomeSectionCarousel data={dummyData} sectionName={"lol"} />
      </div>
    </div>
  );
};
export default HomePage;
