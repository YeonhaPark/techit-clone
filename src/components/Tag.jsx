import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import "dayjs/locale/ko";
dayjs.extend(isSameOrAfter);
dayjs.locale("ko");
dayjs.extend(customParseFormat);
export default function Tag({ startAt, endAt, pending }) {
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
  return (
    <div
      className={`${
        tagDetail(startAt, endAt, pending)[1]
      } inline-flex items-center px-2 py-1 rounded border text-xs font-semibold lg:text-sm`}
    >
      {tagDetail(startAt, endAt, pending)[0]}
    </div>
  );
}
