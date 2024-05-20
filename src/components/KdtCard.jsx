import dayjs from "dayjs";
import "dayjs/locale/ko";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
dayjs.extend(isSameOrAfter);
dayjs.locale("ko");
dayjs.extend(customParseFormat);

export default function KdtCard({
  title,
  description,
  image,
  startAt,
  endAt,
  pending,
}) {
  const isOverAfter7Days = (endAt) => {
    const now = dayjs();
    const after7Days = now.add(7, "day");
    return after7Days.isSameOrAfter(dayjs(endAt, "YY.MM.DD"));
  };
  const tagDetail = (startAt, endAt, pending) => {
    if (endAt && isOverAfter7Days(endAt)) {
      return ["마감임박 D-7", "text-blue-700 border-blue-700"];
    } else if (pending) {
      return ["사전알림신청", "text-emerald-600 border-teal-500"];
    } else if (!startAt) {
      return ["모집마감", "border-gray-500 text-gray-650"];
    } else {
      return ["모집중", "text-blue-700 border-blue-700"];
    }
  };
  const renderPeriod = (startAt, endAt) => {
    if (!startAt || !endAt) return null;
    const start = dayjs(startAt, "YY.MM.DD", "ko").format("YY.MM.DD(ddd)");
    const end = dayjs(endAt, "YY.MM.DD", "ko").format("YY.MM.DD(ddd)");
    return `${start} ~ ${end} 까지`;
  };

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
        <div
          className={`${
            tagDetail(startAt, endAt, pending)[1]
          } inline-flex items-center px-2 py-1 rounded border text-xs font-semibold sm:text-sm`}
        >
          {tagDetail(startAt, endAt, pending)[0]}
        </div>
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
