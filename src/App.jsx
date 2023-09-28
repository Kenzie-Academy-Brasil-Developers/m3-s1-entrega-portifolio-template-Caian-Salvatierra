import "./styles/import.css";

import { AboutMe } from "./components/AboutMeSection";
import { BannerSection } from "./components/BannerSection";
import { ProjectSection } from "./components/sections/ProjectSection";
import { TechSection } from "./components/sections/TechSection";
import { DefaultTemplate } from "./components/DefaultTemplate";

function App() {

  return (
    <>
      <DefaultTemplate>
          <BannerSection/>
          <AboutMe/>
          <TechSection/>
          <ProjectSection/>
      </DefaultTemplate>
     
      
    </>
  );
};

export default App
