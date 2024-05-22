import TitleBar from "./TitleBar";
import basicTrainingData from "../data/basicTrainingData.json";
import OnboardingCard from "./OnboardingCard";
const OnboardingSection = () => {
  return (
    <section className="mt-10 lg:mt-20 container-style px-6">
      <TitleBar
        title="테킷 온보딩 트랙"
        description="K-Digital 기초역량훈련 클래스"
        isDetail={true}
      />
      <ul className="mt-10 grid w-full grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-3 lg:gap-x-6 lg:gap-y-10">
        {basicTrainingData.map((card) => (
          <OnboardingCard
            key={card.title}
            title={card.title}
            description={card.description}
            image={card.image}
            price={card.price}
            discountedPrice={card.discountedPrice}
            tags={card.tags}
          />
        ))}
      </ul>
    </section>
  );
};

export default OnboardingSection;
