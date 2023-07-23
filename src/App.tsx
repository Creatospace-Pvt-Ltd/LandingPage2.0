import "./App.css";
import CountdownTimer from "./Components/Countdown";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import ThingsToDo from "./Components/ThingsToDo";
import WhatToDo from "./Components/WhatToDo";
import WhoCreate from "./Components/WhoCreate";
import WhyCreato from "./Components/WhyCreato";

function App() {
  return (
    <div className="h-screen overflow-y-scroll">
      <Navbar />
      <HeroSection />
      <CountdownTimer />
      <WhyCreato />
      <WhatToDo />
      <WhoCreate />
      <ThingsToDo />
      <Footer />
    </div>
  );
}

export default App;
