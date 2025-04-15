import TopNav from "./components/TopNav";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import SectionSeven from "./components/SectionSeven";
import SectionEight from "./components/SectionEight";
import SectionNine from "./components/SectionNine";
import SectionTen from "./components/SectionTen";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative h-screen w-full bg-black text-white min-h-screen">
      <TopNav />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTen />
      <Footer />
    </div>
  );
}

export default App;
