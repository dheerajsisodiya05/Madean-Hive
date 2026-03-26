import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DealCard from "./DealCard";
import { useAppSelector } from "../../../../Redux Toolkit/Store";
import type { Deal } from "../../../../types/dealTypes";

export default function DealSlider() {
  const { homePage } = useAppSelector((store) => store);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    centerMode: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const deals = homePage?.homePageData?.deals || [];

  return (
    <div className="py-10 px-4 lg:px-20">
      {/* <h2 className="text-2xl lg:text-4xl pb-6 font-bold text-[#00927c] text-center">
        Hot Deals Today
      </h2> */}

      <div className="relative">
        <Slider {...settings}>
          {deals.map((deal: Deal, idx: number) => (
            <div
              key={idx}
              className="px-3"     // spacing between cards
            >
              <div
                className="
                  bg-white 
                  rounded-xl 
                  shadow-md 
                  hover:shadow-lg 
                  transition-all 
                  duration-300
                  overflow-hidden
                "
              >
                <DealCard deal={deal} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
