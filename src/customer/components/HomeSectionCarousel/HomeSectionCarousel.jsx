import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@headlessui/react";
import { dummyData } from "@/Data/dummyData";

const HomeSectionCarousel = ({ data, sectionName }) => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = data.map((item) => (
    <div>
      <HomeSectionCard product={item} />
      <br></br>
    </div>
  ));
  return (
    <div className="border border-gray-200">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h2>
      <div className="relative p-5">
        <AliceCarousel items={items} responsive={responsive} />
        {/* <Button
          variant="contained"
          className="z-50"
          sx={{
            position: "absolute",
            top: "2rem",
            right: "0rem",
            transorm: "translateX(50%) rotate(90deg)",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(180deg)" }} />
        </Button> */}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
