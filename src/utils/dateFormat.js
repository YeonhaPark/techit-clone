import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const renderPeriod = (startAt, endAt) => {
  if (!startAt || !endAt) return null;
  const start = dayjs(startAt, "YY.MM.DD", "ko").format("YY.MM.DD(ddd)");
  const end = dayjs(endAt, "YY.MM.DD", "ko").format("YY.MM.DD(ddd)");
  return `${start} ~ ${end} 까지`;
};

export { renderPeriod };
