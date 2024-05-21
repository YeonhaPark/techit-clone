import ClassButton from "./ClassButton";
import ClasssCard from "./ClassCard";
import classData from "../data/classData.json";
import { useState } from "react";
export default function SchoolsPerClass() {
  const [scheduleData] = useState(
    classData.map((c) => {
      c.isSelected = false;
      return c;
    })
  );
  const [selectedClasses, setSelectedClasses] = useState([]);

  const handleClassBtnClick = (e) => {
    const id = parseInt(e.target.dataset.id);
    if (selectedClasses.filter((c) => c.id === id).length === 0) {
      let elem = null;
      scheduleData.forEach((el) => {
        if (el.id === id) {
          elem = el;
        }
      });
      setSelectedClasses((prev) => [...prev, elem]);
    } else {
      const newSelectedClasses = selectedClasses.filter((c) => {
        return c.id !== id;
      });
      setSelectedClasses(newSelectedClasses);
    }
  };
  return (
    <>
      <h6 className="mt-8 mb-6 text-xl font-semibold">
        관심있는 클래스를 선택해주세요.
      </h6>
      <div className="border rounded-2xl border-techit-gray-100 p-4 flex flex-wrap gap-[10px]">
        {scheduleData.map((c) => (
          <ClassButton
            name={c.title}
            key={c.title}
            id={c.id}
            onClassBtnClick={handleClassBtnClick}
          />
        ))}
      </div>
      <div className="mt-6">
        <ul className="grid grid-cols-2 md:gap-6">
          {selectedClasses.map((c) => (
            <ClasssCard
              key={c.id}
              imgUrl={c.image}
              title={c.title}
              description={c.description}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
