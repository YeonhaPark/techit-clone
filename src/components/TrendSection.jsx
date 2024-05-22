import TitleBar from "./TitleBar";
import trendData from "../data/trendData.json";
import TrendCard from "./TrendCard";
const TrendSection = () => {
  return (
    <section className="mt-10 lg:mt-20 container-style px-6">
      <TitleBar
        title="최신 기술 트렌드 확인하기"
        description="!T 트렌드"
        isDetail={true}
      />
      <ul className="mt-10 grid w-full grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-3 lg:gap-x-6 lg:gap-y-10">
        {trendData.map((card) => (
          <TrendCard
            key={card.title}
            title={card.title}
            image={card.image}
            views={card.views}
            author={card.author}
            publishedAt={card.publishedAt}
            organization={card.organization}
          />
        ))}
      </ul>
    </section>
  );
};

export default TrendSection;
