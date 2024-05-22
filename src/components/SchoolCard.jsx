import Tag from "./Tag";
import { renderPeriod } from "../utils/dateFormat";

export default function SchoolCard({ cardData }) {
  return (
    <li>
      <div className="flex cursor-pointer lg:hover:shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] mb-4 h-[110px] items-center overflow-hidden rounded-lg border border-techit-gray-100 bg-white last:mb-0 md:h-[156px] md:rounded-xl lg:mb-0">
        <div className="w-[134px] shrink-0 overflow-hidden md:w-52">
          <img
            src={`/images/kdts/${cardData.image}.webp`}
            alt={cardData.image}
          />
        </div>
        <div className="p-2">
          <Tag
            startAt={cardData.startAt}
            endAt={cardData.endAt}
            pending={cardData.pending}
          />
          <h3 className="mb-2 mt-2 text-sm font-semibold lg:mb-1 lg:mt-2 lg:text-lg lg:font-bold">
            {cardData.title}
          </h3>
          <p className="mb-1 hidden break-keep text-sm lg:text-base lg:block xl:truncate">
            {cardData.description}
          </p>
          <span className="text-techit-gray-200 text-xs lg:text-sm">
            {renderPeriod(cardData.startAt, cardData.endAt)}
          </span>
        </div>
      </div>
    </li>
  );
}
