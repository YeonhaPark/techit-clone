import Header from "./components/Header";
import TopBanner from "./components/TopBanner";
import SimpleSlider from "./components/Slider";
import KdtSection from "./components/KdtSection";
import ScheduleSection from "./components/ScheduleSection";
export default function App() {
  return (
    <div className="font-pretendard">
      <TopBanner />
      <Header />
      <SimpleSlider />
      <KdtSection />
      <ScheduleSection />
    </div>
  );
}
