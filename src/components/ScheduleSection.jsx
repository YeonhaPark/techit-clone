import TitleBar from "./TitleBar";
export default function ScheduleSection() {
  return (
    <section className="mt-10 lg:mt-20 px-6 ">
      <TitleBar
        title="테킷 스쿨 일정 확인하기"
        description="한 눈에 보는 테킷 스쿨 오픈 일정"
        moreDetail={false}
      />
      <div className="mt-8 px-4 lg:mx-auto lg:mt-10 lg:px-6 container-style"></div>
    </section>
  );
}
