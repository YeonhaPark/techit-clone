import EducationCard from "./EducationCard";
import TitleBar from "./TitleBar";
import educationData from "../data/educationData.json";
export default function EducationSection() {
  return (
    <section className="mt-10 lg:mt-20 container-style px-6">
      <TitleBar
        title="모든 교육 경험"
        description="테킷이 두드리는 새로운 교육"
      />
      <ul className="mt-10 grid w-full grid-cols-2 gap-x-4 gap-y-4 lg:gap-x-6 lg:gap-y-10">
        {educationData.map((card) => (
          <EducationCard
            key={card.title}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </ul>
    </section>
  );
}
