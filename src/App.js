import React from "react";
import "./App.css";
import About from "./components/About/About.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Timer from "./components/Timer/Timer.jsx";
import Outro from "./components/Hero/Outro.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FAQs from "./components/FAQ/faqs.jsx";
import PrizePool from "./components/Prize/PrizePool.jsx";
import Sponsors from "./components/Sponsors/Sponsors.jsx";
import Cards from "./components/Cards/Cards.jsx"; // Import the new Cards component

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PrizePool />
      <Timer />
      <About />
      <Cards /> {/* Use the new Cards component */}
      <Sponsors /> {/* Use the new Sponsors component */}
      <Outro />
      <FAQs />
      <Footer />
    </div>
  );
};

export default App;
