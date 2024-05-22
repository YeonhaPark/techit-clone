import { Link } from "react-router-dom";

export default function EducationCard({ title, description, image }) {
  return (
    <li>
      <Link className="flex relative h-[310px] px-4 py-6 lg:p-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="relative h-full w-full">
            <img
              src={`/images/education/${image}.webp`}
              alt={image}
              className="object-cover absolute h-full w-full rounded-xl"
            />
          </div>
        </div>
        <div className="relative">
          <h3 className="text-lg font-bold leading-tight lg:text-2xl">
            {title}
          </h3>
          <p className="mt-1 whitespace-pre-wrap text-sm font-normal text-gray-800 md:text-base">
            {description}
          </p>
          <div className="mt-4 flex items-center">
            <span className="text-xs text-techit-gray-200 font-semibold ">
              더 알아보기
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="16"
              className="ml-1 text-gray-500 md:ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </div>
        </div>
      </Link>
    </li>
  );
}
