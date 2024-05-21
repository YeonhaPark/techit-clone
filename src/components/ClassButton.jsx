import c from "classnames";
import { useState } from "react";
export default function ClassButton({ id, name, onClassBtnClick }) {
  const [clicked, setClicked] = useState(false);
  const handleClassBtnClick = (e) => {
    setClicked((prev) => !prev);
    onClassBtnClick(e);
  };
  return (
    <button
      className={c(
        {
          "border-techit-yellow-350 text-techit-yellow-350 bg-orange-50":
            clicked,
          "border-techit-gray-100": !clicked,
        },
        "p-[6px] text-xs md:text-sm lg:text-lg lg:px-3 lg:py-2 border rounded-md"
      )}
      data-id={id}
      onClick={handleClassBtnClick}
    >
      {name}
    </button>
  );
}
