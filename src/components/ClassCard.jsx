import c from "classnames";
const bgColorMapper = {
  frontend: "bg-techit-blue-100",
  design: "bg-techit-red-100",
  "backend-java": "bg-techit-blue-100",
  "backend-python": "bg-techit-blue-100",
  ios: "bg-techit-purple-100",
  android: "bg-techit-purple-100",
  ai: "bg-techit-blue-200",
  data: "bg-techit-teal-200",
  blockchain: "bg-techit-pink-100",
  startup: "bg-techit-red-100",
  "frontend-plus": "bg-techit-blue-100",
  "backend-plus": "bg-techit-green-100",
};
export default function ClassCard({ title, description, imgUrl }) {
  return (
    <li
      className={c(
        "border border-techit-gray-100 rounded-lg max-w-[604px] w-full"
      )}
    >
      <div
        className={`${bgColorMapper[imgUrl]} flex justify-between items-center rounded-t-lg h-[120px] px-4 py-4 md:px-6`}
      >
        <div>
          <h3 className="text-base lg:text-xl font-bold lg:font-semibold">
            {title}
          </h3>
          <h5 className="text-techit-gray-200 text-sm lg:text-base">
            {description}
          </h5>
        </div>
        <img
          src={`/images/class/${imgUrl}.png`}
          alt={title}
          className="w-[90px]"
        />
      </div>
      <div className=" mt-2 px-4 md:px-6">
        <div className="flex justify-between items-center py-3">
          <div className="font-bold">11기 - 사전알림</div>
          <button className="flex items-center">
            <span className="mr-1">사전 알림 신청</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="16"
              className="ml-1 "
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
    </li>
  );
}
