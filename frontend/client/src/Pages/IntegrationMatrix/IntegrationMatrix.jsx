import "./index.css";

import Faqs from "./components/Faqs";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Pricing from "./components/Pricing";
import Trusted from "./components/Trusted";
import Usage from "./components/Usage";

const IntegrationMatrix = () => {
  return (
    <div style={{ "max-width": "1440px", margin: "0 auto" }}>
      <Hero />
      <Trusted />
      <Info />
      <Usage />
      <Pricing />
      <Faqs />
    </div>
  );
};

export default IntegrationMatrix;
