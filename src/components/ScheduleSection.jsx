import { useState } from "react";
import TitleBar from "./TitleBar";

import c from "classnames";
import SchoolsPerClass from "./SchoolsPerClass";

export default function ScheduleSection() {
  const [selectedTab, setSelectedTab] = useState("class");

  return (
    <section className="mt-10 lg:mt-20 px-6 ">
      <TitleBar
        title="테킷 스쿨 일정 확인하기"
        description="한 눈에 보는 테킷 스쿨 오픈 일정"
        moreDetail={false}
      />
      <div className="mt-8 px-4 lg:mx-auto lg:mt-10 lg:px-6 container-style">
        <div className="mt-5 border-b border-techit-gray-100 lg:border-b">
          <button
            className={c(
              {
                "text-techit-yellow-350 font-semibold border-b-2 border-techit-yellow-350":
                  selectedTab === "class",
                "text-techit-gray-200  font-light": selectedTab !== "class",
              },
              "h-[40px] text-xl  mr-4"
            )}
            onClick={() => setSelectedTab("class")}
          >
            클래스 별
          </button>
          <button
            className={c(
              {
                "text-techit-yellow-350 font-semibold border-b-2 border-techit-yellow-350":
                  selectedTab === "month",
                "text-techit-gray-200 font-light": selectedTab !== "month",
              },
              "h-[40px] text-xl"
            )}
            onClick={() => setSelectedTab("month")}
          >
            월별로 보기
          </button>
        </div>
        {selectedTab === "class" && <SchoolsPerClass />}
      </div>
    </section>
  );
}
