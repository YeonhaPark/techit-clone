import { useEffect, useState } from "react";
import c from "classnames";
import CloudEnginner from "/images/techit_CLD01_keyvisual.webp";

export default function TopBanner() {
  const [isViewed, setIsViewed] = useState(false);
  const handleClickClose = () => {
    localStorage.setItem("isViewed", 1);
  };

  useEffect(() => {
    const savedIsViewed = localStorage.getItem("isViewed");
    if (savedIsViewed === "1") {
      setIsViewed(true);
    }
  }, []);
  return (
    <div
      className={c("flex items-center gap-2 h-[42px] bg-[#ff7711]", {
        hidden: isViewed,
      })}
    >
      <div className="flex items-center justify-between max-w-screen-xl mx-auto  text-sm font-medium md:text-base md:font-semibold w-full px-[10px]">
        <div className="flex items-center">
          기초가 탄탄한 클라우드 엔지니어 교육
          <img
            className="w-[52px]"
            src={CloudEnginner}
            alt="클라우드엔지니어 교육"
          />
        </div>
        <button className="h-5 w-5" onClick={handleClickClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-full w-full"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
