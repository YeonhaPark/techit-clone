import Header from "./components/Header";
import TopBanner from "./components/TopBanner";
import SimpleSlider from "./components/Slider";
export default function App() {
  return (
    <div className="font-pretendard">
      <TopBanner />
      <Header />
      <div>
        <SimpleSlider />
      </div>
    </div>
  );
}
