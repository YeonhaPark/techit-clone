import c from "classnames";

export default function TitleBar({ title, description, moreDetail }) {
  return (
    <div className="flex justify-between font-semibold  items-end h-[64.5px] container-style">
      <div className="h-full flex flex-col justify-between">
        <h5 className="text-techit-yellow-350">{title}</h5>
        <h3 className="text-techit-gray-300 text-[26px]">{description}</h3>
      </div>
      <button
        className={c({ hidden: !moreDetail }, "flex items-center text-sm")}
      >
        <span className="mr-1">자세히보기</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="16"
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
  );
}
