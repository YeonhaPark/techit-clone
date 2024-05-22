import { useEffect, useState } from "react";
import monthData from "../data/calendarData.json";
import SchoolCard from "./SchoolCard";

export default function SchoolsPerMonth() {
  const [currentMonthData, setCurrentMonthData] = useState(monthData[0]);
  const [currentPage, setCurrentPage] = useState(0);

  const onClickPrev = () => {
    if (currentPage === 0) {
      return;
    }
    const nextPrevPage = currentPage - 1;
    setCurrentPage(nextPrevPage);
    setCurrentMonthData(monthData[nextPrevPage]);
  };
  const onClickNext = () => {
    if (monthData.length - 1 === currentPage) {
      return;
    }
    const nextCurrentPage = currentPage + 1;
    setCurrentPage(nextCurrentPage);
    setCurrentMonthData(monthData[nextCurrentPage]);
  };

  useEffect(() => {
    console.log({ hi: Object.keys(currentMonthData) });
  }, [currentMonthData]);
  return (
    <div>
      <div className="flex items-center justify-center">
        <button onClick={onClickPrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 lg:w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <div className="mx-2 w-[138px] min-w-[138px] text-center text-lg font-semibold lg:text-2xl">
          {Object.keys(monthData[currentPage])[0]}
        </div>
        <button onClick={onClickNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 lg:w-6"
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
      <div>
        {currentMonthData[Object.keys(currentMonthData)[0]]?.length === 0 ? (
          <ul className="mt-4 flex justify-center">
            <li>
              <img src="/images/kdts/empty.png" alt="empty" />
              <div className="mt-3 text-techit-gray-200">
                해당 달에는 수강 가능한 클래스가 없습니다.
              </div>
            </li>
          </ul>
        ) : (
          <ul className="md:grid md:grid-cols-2 md:gap-6 mt-4">
            {currentMonthData[Object.keys(currentMonthData)[0]].map((v, i) => (
              <SchoolCard key={v.title} cardData={v} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
