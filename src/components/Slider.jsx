import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import SlideBanner from "./SlideBanner";
import {} from "react";
import { banners } from "../../const";

export default function SimpleSlider() {
  const sliderRef = useRef();
  const [page, setPage] = useState(0);

  const onClickNext = () => {
    sliderRef.current.slickNext();
    getCurrentPage();
  };

  const onClickPrev = () => {
    sliderRef.current.slickPrev();
    getCurrentPage();
  };

  const getCurrentPage = () => {
    setPage(sliderRef.current?.innerSlider.state.currentSlide);
  };
  useEffect(() => {
    const interval = setInterval(getCurrentPage, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative overflow-hidden">
      <Slider {...settings} ref={sliderRef}>
        {banners.map((banner) => (
          <SlideBanner
            key={banner.id}
            id={banner.id}
            title={banner.title}
            description={banner.description}
            isTextWhite={banner.isTextWhite}
          >
            {banner.content}
          </SlideBanner>
        ))}
      </Slider>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-[1280px] w-full px-6">
        <div className="text-white bg-black bg-opacity-30 flex w-fit text-xs rounded-full gap-2 px-3 py-[5px]">
          <div>
            {page + 1} / {banners.length}
          </div>
          <div>
            <button onClick={onClickPrev} className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <button onClick={onClickNext} className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
