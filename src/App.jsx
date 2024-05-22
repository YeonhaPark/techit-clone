import Header from "./components/Header";
import TopBanner from "./components/TopBanner";
import SimpleSlider from "./components/Slider";
import KdtSection from "./components/KdtSection";
import ScheduleSection from "./components/ScheduleSection";
import StripBanner from "./components/StripBanner";
import OnboardingSection from "./components/OnboardingSection";
import TrendSection from "./components/TrendSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";
export default function App() {
  return (
    <div className="font-pretendard relative">
      <TopBanner />
      <Header />
      <SimpleSlider />
      <KdtSection />
      <ScheduleSection />
      <StripBanner />
      <OnboardingSection />
      <TrendSection />
      <EducationSection />
      <Footer />
      <FloatingButton />{" "}
    </div>
  );
}
