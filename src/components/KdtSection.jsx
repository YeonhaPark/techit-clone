import kdtData from "../data/kdtData.json";
import KdtCard from "./KdtCard";
import TitleBar from "./TitleBar";
export default function KdtSection() {
  return (
    <section className="mt-10 lg:mt-20 px-6 ">
      <TitleBar
        title={"KDT 테킷 스쿨"}
        description="K-Digital Training 부트캠프"
        moreDetail={true}
      />
      <div className="mt-8 px-4 lg:mx-auto lg:mt-10 lg:px-6 container-style">
        <ul className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 lg:gap-x-6">
          {kdtData.map((v, i) => (
            <KdtCard
              key={i}
              image={v.image}
              title={v.title}
              description={v.description}
              startAt={v.startAt}
              endAt={v.endAt}
              pending={v.pending}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
