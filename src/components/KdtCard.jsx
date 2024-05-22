import Tag from "./Tag";
import { renderPeriod } from "../utils/dateFormat";

export default function KdtCard({
  title,
  description,
  image,
  startAt,
  endAt,
  pending,
}) {
  return (
    <li>
      <div className="rounded md:rounded-lg overflow-hidden">
        <img
          className="hover:scale-110 duration-300"
          src={`/images/kdts/${image}.webp`}
          alt={title}
        />
      </div>
      <div className="mt-3 md:mt-4">
        <Tag startAt={startAt} endAt={endAt} pending={pending} />
        <p className="font-semibold mb-2 mt-4">{title}</p>
        <p className="font-medium text-xs md:text-base lg:font-normal xl:text-lg break-keep">
          {description}
        </p>
        <p className="mt-2 text-xs text-gray-400 md:mt-4 md:text-base">
          {renderPeriod(startAt, endAt)}
        </p>
      </div>
    </li>
  );
}
